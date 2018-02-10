<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Mail;

class Emails extends Controller
{
    public function index($request, $response)
    {
        $emails = Mail::all()->sortByDesc('id');

        return $this->view->render($response, 'admin/emails.twig', [
            'emails' => $emails,
        ]);
    }
}
