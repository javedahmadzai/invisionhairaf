<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;

class Auth extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'admin/auth.twig', [
            'error' => $this->flash->getFirstMessage('admin.login-error'),
        ]);
    }

    public function login($request, $response)
    {
        $auth = $this->auth->login(
            $request->getParam('username'),
            $request->getParam('password')
        );

        if (!$auth) {
            $this->flash->addMessage('admin.login-error', 'Invalid Login!');

            return $response->withRedirect($this->router->pathFor('admin.login'));
        }

        return $response->withRedirect($this->router->pathFor('admin.home'));
    }

    public function logout($request, $response)
    {
        $this->auth->logout();

        return $response->withRedirect($this->router->pathFor('admin.login'));
    }
}
