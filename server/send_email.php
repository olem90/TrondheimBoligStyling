<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Load PHPMailer files (adjust the path if needed)
require 'config.php';
require 'server/PHPMailer/src/PHPMailer.php';
require 'server/PHPMailer/src/SMTP.php';
require 'server/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (empty($name) || empty($subject) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = SMTP_SERVER;
        $mail->SMTPAuth = true;
        $mail->Username = EMAIL_USER;
        $mail->Password = EMAIL_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = SMTP_PORT;

        $mail->setFrom($email, $name);
        $mail->addAddress('trondheimboligstyling@gmail.com');
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email. Error: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
}

