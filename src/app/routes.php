<?php
$app->add(new App\Middlewares\TrailingSlash($container));
$app->add(new App\Middlewares\OldInput($container));
$app->add(new App\Middlewares\Csrf($container));
$app->add($container['csrf']);

$app->get('/', '\App\Controllers\Home:index')->setName('home')->add(new App\Middlewares\Slider($container));
$app->get('/about', '\App\Controllers\About:index')->setName('about')->add(new App\Middlewares\Slider($container));
$app->get('/contact', '\App\Controllers\Contact:index')->setName('contact');
$app->post('/contact', '\App\Controllers\Contact:mail');
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
    //-- gallery
    $this->get('/gallery', '\App\Controllers\Admin\Gallery:index')->setName('admin.gallery');
    $this->post('/gallery', '\App\Controllers\Admin\Gallery:uploadImages');
    $this->delete('/gallery/{id}', '\App\Controllers\Admin\Gallery:deleteImage');
    //-- emails
    $this->get('/emails', '\App\Controllers\Admin\Emails:index')->setName('admin.emails');
    //-- products
    $this->get('/products', '\App\Controllers\Admin\Products:index')->setName('admin.products');
    $this->post('/products', '\App\Controllers\Admin\Products:addProduct');
    $this->delete('/products/{id}', '\App\Controllers\Admin\Products:deleteProduct');
    //-- slider
    $this->get('/slider', '\App\Controllers\Admin\Slider:index')->setName('admin.slider');
    $this->post('/slider', '\App\Controllers\Admin\Slider:addSlide');
    $this->delete('/slider/{id}', '\App\Controllers\Admin\Slider:deleteSlide');
})->add(new App\Middlewares\Admin($container));
