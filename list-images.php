<?php
header('Content-Type: application/json');

$images = glob("assets/images/*.{jpg,jpeg,png,gif}", GLOB_BRACE);
sort($images);

// Prepend slash so URLs are absolute
$images = array_map(fn($img) => '/' . $img, $images);

echo json_encode($images);
