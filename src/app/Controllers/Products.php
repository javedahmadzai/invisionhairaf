<?php

namespace App\Controllers;

class Products extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'products.twig');
    }
}
