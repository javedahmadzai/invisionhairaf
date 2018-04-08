<?php

namespace App\Controllers;

use App\Models\HairReplacement as HairReplacementStorage;

class HairReplacement extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'pages/hairreplacement.twig', [
            'page' => HairReplacementStorage::first() ?? [],
        ]);
    }
}
