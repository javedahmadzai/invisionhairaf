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
            'emails'       => $emails,
            'emaildeleted' => $this->flash->getFirstMessage('admin.email-deleted'),
        ]);
    }

    public function delete($request, $response, $args)
    {
        $email = Mail::find($args['id']);
        $email->delete();

        $this->flash->addMessage('admin.email-deleted', "Email of date {$email->created_at} deleted successfuly!");

        return $response->withRedirect($this->router->pathFor('admin.emails'));
    }
}
