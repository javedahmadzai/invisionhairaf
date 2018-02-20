<?php

namespace App\Middlewares;

use Psr\Container\ContainerInterface as Container;

class Middleware
{
    private $container;

    public function __construct(Container $container = null)
    {
        $this->container = $container;
    }

    public function __get(string $key)
    {
        if ($this->container->{$key}) {
            return $this->container->{$key};
        }
    }
}
