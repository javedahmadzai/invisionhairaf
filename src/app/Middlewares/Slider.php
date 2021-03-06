<?php

namespace App\Middlewares;

use App\Models\Slider as Slides;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Slider extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        $this->view->getEnvironment()->addGlobal('gslider', Slides::all());

        return $next($request, $response);
    }
}
