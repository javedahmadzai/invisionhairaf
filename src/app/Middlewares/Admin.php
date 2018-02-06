<?php

namespace App\Middlewares;

class Admin extends Middleware
{
    public function __invoke($request, $response, $next)
    {
        if (!$this->auth->check()) {
            $this->flash->addMessage('admin.login-error', 'You must be logged in first!');

            return $response->withRedirect($this->router->pathFor('admin.login'));
        }

        $response = $next($request, $response);

        return $response;
    }
}
