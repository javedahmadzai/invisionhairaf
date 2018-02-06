<?php

namespace App\Middlewares;

class Guest extends Middleware
{
    public function __invoke($request, $response, $next)
    {
        if ($this->auth->check()) {
            return $response->withRedirect($this->router->pathFor('admin.home'));
        }
        $response = $next($request, $response);

        return $response;
    }
}
