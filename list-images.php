<?php
header('Content-Type: application/json');

// Get all jpg, jpeg, png, gif files in the gallery folder
$images = glob("assets/images/*.{jpg,jpeg,png,gif}", GLOB_BRACE);

// Optional: sort alphabetically
sort($images);

// Return JSON
echo json_encode($images);