<?php

namespace App\Middlewares;

use Psr\Container\ContainerInterface as Container;

class Middleware
{
    protected $container;

    public function __construct(Container $container)
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
