<?php
namespace App\Controllers;

use Psr\Container\ContainerInterface as Container;

class Controller
{
    private $container;

    public function __construct(Container $container = null)
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
