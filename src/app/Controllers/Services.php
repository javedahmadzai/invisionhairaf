<?php

namespace App\Controllers;

class Services extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'services.twig');
    }
}
