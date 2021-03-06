<?php

namespace App\Middlewares;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class TrailingSlash extends Middleware
{
    public function __invoke(Request $request, Response $response, callable $next)
    {
        $uri  = $request->getUri();
        $path = $uri->getPath();
        if ($path != '/' && substr($path, -1) == '/') {
            $uri = $uri->withPath(substr($path, 0, -1));

            if ($request->getMethod() == 'GET') {
                return $response->withRedirect((string) $uri, 301);
            } else {
                return $next($request->withUri((string) $uri), $response);
            }
        }

        return $next($request, $response);
    }
}
