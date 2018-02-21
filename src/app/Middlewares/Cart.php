<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Cart extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        if (!empty($_SESSION['cart'])) {
            $this->view->getEnvironment()->addGlobal('cart_message', 'You have added some items to your cart.');
        }

        return $next($request, $response);
    }
}
