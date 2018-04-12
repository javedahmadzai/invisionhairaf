<?php
$app->add(new App\Middlewares\TrailingSlash());
$app->add(new App\Middlewares\PagePath($container));
$app->add(new App\Middlewares\OldInput($container));
$app->add(new App\Middlewares\Csrf($container));
$app->add($container->get('csrf'));

// Home
$app->group('/', function () {
    $this->get('', '\App\Controllers\Home:index')->setName('home');
})->add(new App\Middlewares\Slider($container));

// About
$app->group('/about', function () {
    $this->get('', '\App\Controllers\About:index')->setName('about');
});

// Contact
$app->group('/contact', function () {
    $this->get('', '\App\Controllers\Contact:index')->setName('contact');
    $this->post('', '\App\Controllers\Contact:mail');
});

// Services
$app->group('/services', function () {
    $this->get('', '\App\Controllers\Services:index')->setName('services');
});

// Products
$app->group('/products', function () {
    $this->get('', '\App\Controllers\Products:index')->setName('products');
    $this->get('/{id}', '\App\Controllers\Products:getProduct')->setName('product');
})->add(new App\Middlewares\CartFlashMessage($container));

// Gallery
$app->group('/gallery', function () {
    $this->get('', '\App\Controllers\Gallery:index')->setName('gallery');
});

// Hair Replacement
$app->group('/hairreplacement', function () {
    $this->get('', '\App\Controllers\HairReplacement:index')->setName('hairreplacement');
});

// Cart
$app->group('/cart', function () {
    $this->get('', '\App\Controllers\Cart:index')->setName('cart');
    $this->post('', '\App\Controllers\Cart:add');
    $this->get('/{id}', '\App\Controllers\Cart:remove');
});

// Order
$app->group('/order', function () {
    $this->get('', '\App\Controllers\Order:index')->setName('order');
    $this->post('', '\App\Controllers\Order:place');
});

// Downloads
$app->group('/download', function () {
    $this->get('/form', '\App\Controllers\Download:form')->setName('download-form');
});

// ------------------------- ADMIN AREA -------------------------

// Admin - UnAuthenticated Area
$app->group('/admin', function () {
    $this->get('/login', '\App\Controllers\Admin\Auth:index')->setName('admin.login');
    $this->post('/login', '\App\Controllers\Admin\Auth:login');
})->add(new App\Middlewares\Guest($container));

// Admin - Authenticated Area
$app->group('/admin', function () {
    $this->get('', '\App\Controllers\Admin\Home:index')->setName('admin.home');
    $this->get('/logout', '\App\Controllers\Admin\Auth:logout')->setName('admin.logout');
    //-- gallery
    $this->get('/gallery', '\App\Controllers\Admin\Gallery:index')->setName('admin.gallery');
    $this->post('/gallery', '\App\Controllers\Admin\Gallery:uploadImages');
    $this->delete('/gallery/{id}', '\App\Controllers\Admin\Gallery:deleteImage');
    //-- emails
    $this->get('/emails', '\App\Controllers\Admin\Emails:index')->setName('admin.emails');
    $this->delete('/emails/{id}', '\App\Controllers\Admin\Emails:delete');
    //-- products
    $this->get('/products', '\App\Controllers\Admin\Products:index')->setName('admin.products');
    $this->post('/products', '\App\Controllers\Admin\Products:addProduct');
    $this->delete('/products/{id}', '\App\Controllers\Admin\Products:deleteProduct');
    //-- slider
    $this->get('/slider', '\App\Controllers\Admin\Slider:index')->setName('admin.slider');
    $this->post('/slider', '\App\Controllers\Admin\Slider:addSlide');
    $this->delete('/slider/{id}', '\App\Controllers\Admin\Slider:deleteSlide');
    //-- orders
    $this->get('/orders', '\App\Controllers\Admin\Orders:index')->setName('admin.orders');
    $this->put('/orders/{id}', '\App\Controllers\Admin\Orders:done');
    //-- hairreplacement
    $this->get('/hairreplacement', '\App\Controllers\Admin\HairReplacement:index')->setName('admin.hairreplacement');
    $this->post('/hairreplacement', '\App\Controllers\Admin\HairReplacement:update');
})->add(new App\Middlewares\Admin($container));
