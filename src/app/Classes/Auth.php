<?php

namespace App\Classes;

use App\Models\Webmaster as Webmaster;

class Auth
{
    public function check()
    {
        if (isset($_SESSION['webmaster'])) {
            return isset($_SESSION['webmaster']);
        }
    }

    public function login($username, $password)
    {
        $webmaster = Webmaster::where('username', $username)->first();

        if (!$webmaster) {
            return false;
        }
        if ($password == $webmaster->password) {
            $_SESSION['webmaster'] = $webmaster->id;

            return true;
        }

        return false;
    }

    public function logout()
    {
        unset($_SESSION['webmaster']);
    }
}
