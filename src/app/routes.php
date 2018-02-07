<?php
$app->add(new App\Middlewares\Csrf($container));
$app->add(new App\Middlewares\TrailingSlash($container));
$app->add(new App\Middlewares\OldInput($container));
$app->add($container->csrf);

$app->get('/', '\App\Controllers\Home:index')->setName('home');
$app->get('/about', '\App\Controllers\About:index')->setName('about');
$app->get('/contact', '\App\Controllers\Contact:index')->setName('contact');
$app->get('/services', '\App\Controllers\Services:index')->setName('services');
$app->get('/products', '\App\Controllers\Products:index')->setName('products');
$app->get('/gallery', '\App\Controllers\Gallery:index')->setName('gallery');

// Admin
$app->group('/admin', function () {
    $this->get('/login', '\App\Controllers\Admin\Auth:index')->setName('admin.login');
    $this->post('/login', '\App\Controllers\Admin\Auth:login');
})->add(new App\Middlewares\Guest($container));

$app->group('/admin', function () {
    $this->get('', '\App\Controllers\Admin\Home:index')->setName('admin.home');
    $this->get('/logout', '\App\Controllers\Admin\Auth:logout')->setName('admin.logout');
    $this->get('/gallery', '\App\Controllers\Admin\Gallery:index')->setName('admin.gallery');
    $this->post('/gallery', '\App\Controllers\Admin\Gallery:uploadImages');
    $this->delete('/gallery/{id}', '\App\Controllers\Admin\Gallery:deleteImage');
})->add(new App\Middlewares\Admin($container));
