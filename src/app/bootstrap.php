<?php

session_start();

require __DIR__ . '/../vendor/autoload.php';

$settings['settings'] = [
    'displayErrorDetails'    => true,
    'addContentLengthHeader' => false,
    'routerCacheFile'        => false,
    'twigCache'              => false,
    'gallery_path'           => __DIR__ . '/../img/gallery/',
    'products_path'          => __DIR__ . '/../img/products/',
    'slider_path'            => __DIR__ . '/../img/slider/',
    'misc_path'              => __DIR__ . '/../img/misc/',
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

];

if ($_SERVER['HTTP_HOST'] != 'localhost') {
    $settings['settings'] = array_replace_recursive($settings['settings'], [
        'displayErrorDetails'    => false,
        'addContentLengthHeader' => true,
        'routerCacheFile'        => __DIR__ . '/../cache/routes.cache.php',
        'twigCache'              => __DIR__ . '/../cache',
        'db'                     => [
            'database' => 'invisir5_invision',
            'username' => 'invisir5_root',
            'password' => 'invisir5_password',
        ],
    ]);
}

$app = new \Slim\App($settings);

$container = $app->getContainer();

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container->get('settings')['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function () use ($capsule) {
    return $capsule;
};

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig(__DIR__ . '/../resources/views', [
        'cache' => $container->get('settings')['twigCache'],
    ]);

    $view->addExtension(new \Slim\Views\TwigExtension(
        $container->router,
        $container->request->getUri()
    ));

    return $view;
};

$container['flash'] = function () {
    return new \Slim\Flash\Messages;
};

$container['csrf'] = function () {
    return new \Slim\Csrf\Guard;
};

$container['auth'] = function () {
    return new App\Classes\Auth;
};

$container['notFoundHandler'] = function ($container) {
    return function ($request, $response) use ($container) {
        return $container->view->render(
            $response->withStatus(404)
                ->withHeader('Content-Type', 'text/html'),
            'errors/404.twig'
        );
    };
};

$container['notAllowedHandler'] = function ($container) {
    return function ($request, $response, $methods) use ($container) {
        return $container->view->render(
            $response->withStatus(405)
                ->withHeader('Allow', implode(', ', $methods))
                ->withHeader('Content-type', 'text/html'),
            'errors/405.twig', [
                'methods' => implode(', ', $methods),
            ]
        );
    };
};
