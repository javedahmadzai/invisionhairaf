<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Admin extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        if (!$this->auth->check()) {
            $this->flash->addMessage('admin.login-error', 'You must be logged in first!');

            return $response->withRedirect($this->router->pathFor('admin.login'));
        }

        return $next($request, $response);
    }
}
