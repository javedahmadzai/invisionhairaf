<?php

namespace App\Controllers;

use App\Models\Products as Product;

class Cart extends Controller
{
    public function index($request, $response)
    {
        $this->view->render($response, 'pages/cart.twig', [
            'items' => $_SESSION['cart'],
        ]);
    }

    public function add($request, $response)
    {
        $product = Product::find($request->getParam('id'));

        $cart[$product->id] = [
            'id'       => $product->id,
            'image'    => $product->image,
            'title'    => $product->title,
            'price'    => $product->price,
            'quantity' => $request->getParam('quantity'),
            'total'    => $product->price * $request->getParam('quantity'),
        ];

        $_SESSION['cart'][$product->id] = array_replace($_SESSION['cart'][$product->id] ?? [], $cart)[$product->id];

        $this->view->render($response, 'pages/cart.twig', [
            'items' => $_SESSION['cart'],
        ]);
    }

    public function remove($request, $response, $args)
    {
        if (isset($_SESSION['cart'][$args['id']])) {
            unset($_SESSION['cart'][$args['id']]);
        }

        return $response->withRedirect($this->router->pathFor('cart'));
    }
}
