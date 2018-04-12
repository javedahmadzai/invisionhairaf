<?php

namespace App\Controllers;

class Download extends Controller
{
    public function form($request, $response)
    {
        $filename   = __DIR__ . '/../../img/downloads/form.pdf';
        $filestream = fopen($filename, 'rb');

        $stream = new \Slim\Http\Stream($filestream);

        return $response->withStatus(200)
            ->withHeader('Content-type', 'application/octet-stream')
            ->withHeader('Content-Transfer-Encoding', 'Binary')
            ->withHeader('Content-Disposition', 'attachment;filename="' . $filename . '"')
            ->withHeader('Content-Length', filesize($filename))
            ->withHeader('Expires', '0')
            ->withHeader('Cache-Control', 'must-revalidate')
            ->withHeader('Pragma', 'public')
            ->withBody($stream);
    }
}
