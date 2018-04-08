<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class PagePath extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        $uri = trim($request->getUri()->getPath(), '/');
        $this->view->getEnvironment()->addGlobal('uri', $uri ?: '/');

        return $next($request, $response);
    }
}
