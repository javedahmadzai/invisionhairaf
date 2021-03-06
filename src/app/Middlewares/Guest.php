<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Guest extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        if ($this->auth->check()) {
            return $response->withRedirect($this->router->pathFor('admin.home'));
        }

        return $next($request, $response);
    }
}
