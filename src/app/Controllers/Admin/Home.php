<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;

class Home extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'admin/home.twig');
    }
}
