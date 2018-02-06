<?php

namespace App\Middlewares;

class Middleware
{
    protected $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function __get($key)
    {
        if ($this->container->{$key}) {
            return $this->container->{$key};
        }
    }
}
