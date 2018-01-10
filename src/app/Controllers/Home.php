<?php

namespace App\Controllers;

class Home extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'home.twig');
    }
}
