<?php

function pr($debug)
{
    echo '<pre>', print_r($debug, true), '</pre>';
}

if (PHP_SAPI == 'cli-server') {
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];

    if (is_file($file)) {
        return false;
    }
}

$file = '/../vendor/autoload.php';
require file_exists(__DIR__ . $file) ? __DIR__ . $file : __DIR__ . '/..' . $file;
unset($file);

session_start();

$settings = require __DIR__ . '/app/app/settings.php';
$app      = new \Slim\App($settings);
unset($settings);

require __DIR__ . '/app/app/dependencies.php';

require __DIR__ . '/app/app/middleware.php';

require __DIR__ . '/app/app/routes.php';

$app->run();
