<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \App\Models\Slider as Slides;

class Slider extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        $this->view->getEnvironment()->addGlobal('gslider', Slides::all());

        return $next($request, $response);
    }
}
