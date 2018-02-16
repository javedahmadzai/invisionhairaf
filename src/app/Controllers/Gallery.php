<?php

namespace App\Controllers;

use App\Models\Gallery as Image;

class Gallery extends Controller
{
    public function index($request, $response)
    {
        $images = $this->db->table('gallery')->get();

        return $this->view->render($response, 'pages/gallery.twig', [
            'images' => $images,
        ]);
    }
}
