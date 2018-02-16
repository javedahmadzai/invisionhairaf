<?php

namespace App\Controllers;

class About extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'pages/about.twig');
    }
}
