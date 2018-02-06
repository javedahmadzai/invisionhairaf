<?php

session_start();

require __DIR__ . '/../../vendor/autoload.php';

$app = new \Slim\App([
    'settings' => [
        'displayErrorDetails'    => true,
        'addContentLengthHeader' => false,
        'db'                     => [
            'driver'    => 'mysql',
            'host'      => 'localhost',
            'database'  => 'invision',
            'username'  => 'root',
            'password'  => '',
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ],
    ],
]);

$container = $app->getContainer();

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container['settings']['db']);

$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule) {
    return $capsule;
};

$container['csrf'] = function () {
    return new \Slim\Csrf\Guard;
};

$container['flash'] = function () {
    return new \Slim\Flash\Messages();
};

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
        'cache' => false,
    ]);

    $view->addExtension(new \Slim\Views\TwigExtension(
        $container->router,
        $container->request->getUri()
    ));

    $view->addExtension(new App\Classes\CsrfExtension(
        $container['csrf']
    ));

    return $view;
};

$container['auth'] = function ($container) {
    return new App\Classes\Auth;
};
