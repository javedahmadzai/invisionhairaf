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

    public function getProduct($request, $response, $args)
    {
        $product = Product::find($args['id']);

        if (!$product) {
            return $this->view->render($response, 'product.twig', [
                'error' => 'This product does not exists!',
            ]);
        }

        return $this->view->render($response, 'product.twig', [
            'product' => $product,
        ]);
    }
}
