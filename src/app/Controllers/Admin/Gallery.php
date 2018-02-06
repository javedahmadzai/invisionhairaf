<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Gallery as Image;

class Gallery extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'admin/gallery.twig', [
            'error'   => $this->flash->getFirstMessage('admin.gallery-error'),
            'success' => $this->flash->getFirstMessage('admin.gallery-success'),
        ]);
    }

    public function uploadImages($request, $response)
    {
        $image = $request->getUploadedFiles()['image'];

        if ($image->getError() !== UPLOAD_ERR_OK) {
            $this->flash->addMessage('admin.gallery-error', 'Error Uploading files, try later');

            return $response->withRedirect($this->router->pathFor('admin.gallery'));
        }

        $extension = pathinfo($image->getClientFilename(), PATHINFO_EXTENSION);
        $basename  = bin2hex(random_bytes(8));
        $filename  = sprintf('%s.%0.8s', $basename, $extension);

        $image->moveTo($this->settings['gallery_path'] . DIRECTORY_SEPARATOR . $filename);

        $image = new Image;

        $image->description = $request->getParam('description');
        $image->url         = $filename;

        $image->save();

        $this->flash->addMessage('admin.gallery-success', 'Successfully Uploaded Files');

        return $response->withRedirect($this->router->pathFor('admin.gallery'));
    }
}
