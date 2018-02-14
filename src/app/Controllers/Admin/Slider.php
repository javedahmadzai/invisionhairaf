<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Slider as Slides;

class Slider extends Controller
{
    public function index($request, $response)
    {
        $slides = Slides::all();

        return $this->view->render($response, 'admin/slider.twig', [
            'slides'  => $slides,
            'success' => $this->flash->getFirstMessage('admin.slider-success'),
            'error'   => $this->flash->getFirstMessage('admin.slider-error'),
        ]);
    }

    public function addSlide($request, $response)
    {
        $image = $request->getUploadedFiles()['image'];

        if ($image->getError() !== UPLOAD_ERR_OK) {
            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('admin.slider-error', 'Error Uploading files, try later!');

            return $response->withRedirect($this->router->pathFor('admin.slider'));
        }

        $extension = pathinfo($image->getClientFilename(), PATHINFO_EXTENSION);
        $basename  = bin2hex(random_bytes(8));
        $filename  = sprintf('%s.%0.8s', $basename, $extension);

        $image->moveTo($this->settings['slider_path'] . DIRECTORY_SEPARATOR . $filename);

        $slide              = new Slides;
        $slide->title       = $request->getParam('title');
        $slide->description = $request->getParam('description');
        $slide->image       = $filename;
        $slide->save();

        $this->flash->addMessage('admin.slider-success', 'Successfully Added Slide!');

        return $response->withRedirect($this->router->pathFor('admin.slider'));
    }

    public function deleteSlide($request, $response, $args)
    {
        $slide = Slides::find($args['id']);
        $slide->delete();
        unlink($this->settings['slider_path'] . DIRECTORY_SEPARATOR . $slide->image);

        return $response->withRedirect($this->router->pathFor('admin.slider'));
    }
}
