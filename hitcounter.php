<?php
// Simple hit counter - reads from file and increments
// Only displays when accessed directly, not when included

$counterFile = 'hitcounter.txt';
$displayCounter = false;

// Check if this is being accessed directly (for your view only)
if (basename($_SERVER['PHP_SELF']) === 'hitcounter.php') {
    $displayCounter = true;
}

// Read current count
if (file_exists($counterFile)) {
    $count = (int)file_get_contents($counterFile);
} else {
    $count = 0;
}

// Increment count
$count++;
file_put_contents($counterFile, $count);

// Display counter if accessed directly
if ($displayCounter) {
    echo "<!DOCTYPE html>
<html>
<head>
    <title>Hit Counter</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .counter { font-size: 48px; color: #333; margin: 20px 0; }
        .info { color: #666; }
    </style>
</head>
<body>
    <h1>Page Hit Counter</h1>
    <div class='counter'>$count</div>
    <p class='info'>Total page visits</p>
    <p><a href='index.html'>← Back to main page</a></p>
</body>
</html>";
}
?>
