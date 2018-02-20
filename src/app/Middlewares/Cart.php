<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Cart extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        if (isset($_SESSION['cart'])) {
            $this->view->getEnvironment()->addGlobal('cart', 'You have added some items to your cart.');
        }

        return $next($request, $response);
    }
}
