<?php

namespace App\Controllers;

class Gallery extends Controller
{
    public function index($request, $response)
    {
        $images = $this->db->table('gallery')->get();

        return $this->view->render($response, 'gallery.twig', [
            'images' => $images,
        ]);
    }
}
