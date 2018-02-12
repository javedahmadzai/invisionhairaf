<?php

namespace App\Controllers;

use App\Models\Products as Product;

class Products extends Controller
{
    public function index($request, $response)
    {
        $products = Product::all();

        return $this->view->render($response, 'products.twig', [
            'products' => $products,
        ]);
    }
}
