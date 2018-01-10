<?php

$app->get('/', '\App\Controllers\Home:index')->setName('home');
$app->get('/about', '\App\Controllers\About:index')->setName('about');
$app->get('/contact', '\App\Controllers\Contact:index')->setName('contact');
$app->get('/services', '\App\Controllers\Services:index')->setName('services');
$app->get('/products', '\App\Controllers\Products:index')->setName('products');
