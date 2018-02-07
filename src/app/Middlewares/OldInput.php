<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class OldInput extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        if (isset($_SESSION['old_input'])) {
            $this->view->getEnvironment()->addGlobal('old', $_SESSION['old_input']);
            $_SESSION['old_input'] = $request->getParams();
        }

        return $next($request, $response);
    }
}
