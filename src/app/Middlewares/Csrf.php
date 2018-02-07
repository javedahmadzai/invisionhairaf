<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Csrf extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        $this->view->getEnvironment()->addGlobal('csrf_field', '
            <input type="hidden" name="' . $this->csrf->getTokenNameKey() . '" value="' . $this->csrf->getTokenName() . '">
            <input type="hidden" name="' . $this->csrf->getTokenValueKey() . '" value="' . $this->csrf->getTokenValue() . '">
        ');

        return $next($request, $response);
    }
}
