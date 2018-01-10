<?php

namespace App\Controllers;

class Contact extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'contact.twig');
    }
}
