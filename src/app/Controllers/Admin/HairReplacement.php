<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\HairReplacement as HairReplacementStorage;

class HairReplacement extends Controller
{
    public function index($request, $response)
    {
        $page = HairReplacementStorage::first();

        return $this->view->render($response, 'admin/hairreplacement.twig', [
            'error'   => $this->flash->getFirstMessage('admin.hairreplacement-error'),
            'success' => $this->flash->getFirstMessage('admin.hairreplacement-success'),
            'page'    => $page ?? [],
        ]);
    }

    public function update($request, $response)
    {
        $image = $request->getUploadedFiles()['image'];

        if ($image->getError() == UPLOAD_ERR_OK) {
            $extension = pathinfo($image->getClientFilename(), PATHINFO_EXTENSION);
            $basename  = bin2hex(random_bytes(8));
            $filename  = sprintf('%s.%0.8s', $basename, $extension);

            $image->moveTo($this->settings['misc_path'] . DIRECTORY_SEPARATOR . $filename);
        }

        try {
            $firstRecord = HairReplacementStorage::first();

            if (!$firstRecord) {
                $hairreplacement = new HairReplacementStorage();
            } else {
                $hairreplacement = HairReplacementStorage::find($firstRecord->id);
            }

            $hairreplacement->title = $request->getParam('title');
            if ($filename) {
                $hairreplacement->image = $filename;
            }
            $hairreplacement->body = $request->getParam('body');
            $hairreplacement->save();

        } catch (Exception $e) {
            $this->flash->addMessage('admin.hairreplacement-error', $e->getMessage());

            return $response->withRedirect($this->router->pathFor('admin.hairreplacement'));
        }

        $this->flash->addMessage('admin.hairreplacement-success', 'Successfully Uploaded Page');

        return $response->withRedirect($this->router->pathFor('admin.hairreplacement'));
    }
}
