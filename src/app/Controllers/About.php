<?php

namespace App\Controllers;

class About extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'about.twig');
    }
}
