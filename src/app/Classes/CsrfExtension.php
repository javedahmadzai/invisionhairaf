<?php

namespace App\Classes;

class CsrfExtension extends \Twig_Extension
{
    protected $guard;

    public function __construct($guard)
    {
        $this->guard = $guard;
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('csrf_field', [$this, 'csrfField']),
        ];
    }

    public function csrfField()
    {
        return '
            <input type="hidden" name="' . $this->guard->csrf->getTokenNameKey() . '" value="' . $this->guard->csrf->getTokenName() . '">
            <input type="hidden" name="' . $this->guard->csrf->getTokenValueKey() . '" value="' . $this->guard->csrf->getTokenValue() . '">
        ';
    }
}
