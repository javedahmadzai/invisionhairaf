<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Gallery as Image;

class Gallery extends Controller
{
    public function index($request, $response)
    {
        $images = Image::all();

        return $this->view->render($response, 'admin/gallery.twig', [
            'images'  => $images,
            'error'   => $this->flash->getFirstMessage('admin.gallery-error'),
            'success' => $this->flash->getFirstMessage('admin.gallery-success'),
        ]);
    }

    public function uploadImages($request, $response)
    {
        $image = $request->getUploadedFiles()['image'];

        if ($image->getError() !== UPLOAD_ERR_OK) {
            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('admin.gallery-error', 'Error Uploading files, try later!');

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

    public function deleteImage($request, $response, $args = null)
    {
        $image = Image::find($args['id']);
        $image->delete();
        unlink($this->settings['gallery_path'] . DIRECTORY_SEPARATOR . $image->url);

        return $response->withRedirect($this->router->pathFor('admin.gallery'));
    }
}
