<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Products as Product;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator;

class Products extends Controller
{
    public function index($request, $response)
    {
        $products = Product::all()->sortByDesc('id');

        return $this->view->render($response, 'admin/products.twig', [
            'products'      => $products,
            'validation'    => $this->flash->getFirstMessage('admin.products-validation'),
            'success'       => $this->flash->getFirstMessage('admin.products-success'),
            'error'         => $this->flash->getFirstMessage('admin.products-error'),
            'deletesuccess' => $this->flash->getFirstMessage('admin.products-delete.success'),
            'deleteerror'   => $this->flash->getFirstMessage('admin.products-delete.error'),
        ]);
    }

    public function addProduct($request, $response)
    {
        try {
            $validation = Validator::key('title', Validator::stringType()->length(1, 100)->notEmpty())
                ->key('price', Validator::numeric()->length(1, 10))
                ->key('description', Validator::stringType()->length(100, 1000)->notEmpty())
                ->key('csrf_name', Validator::notEmpty())
                ->key('csrf_value', Validator::notEmpty())
                ->assert($request->getParams());
        } catch (NestedValidationException $e) {
            $errors = $e->findMessages([
                'title'       => 'Title must be between 1 and 100 characters.',
                'price'       => 'Price must be numeric and 1 to 10 numbers long',
                'description' => 'Product description must be 100 to 1000 characters long',
                'csrf_name'   => 'Please try later!',
            ]);

            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('admin.products-validation', array_values(array_filter($errors)));

            return $response->withRedirect($this->router->pathFor('admin.products'));
        }

        $image = $request->getUploadedFiles()['image'];

        if ($image->getError() !== UPLOAD_ERR_OK) {
            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('admin.products-error', 'Error Uploading files, try later!');

            return $response->withRedirect($this->router->pathFor('admin.products'));
        }

        try {
            $extension = pathinfo($image->getClientFilename(), PATHINFO_EXTENSION);
            $basename  = bin2hex(random_bytes(8));
            $filename  = sprintf('%s.%0.8s', $basename, $extension);

            $image->moveTo($this->settings['products_path'] . DIRECTORY_SEPARATOR . $filename);
            $product              = new Product;
            $product->title       = $request->getParam('title');
            $product->price       = $request->getParam('price');
            $product->description = $request->getParam('description');
            $product->image       = $filename;
            $product->save();

        } catch (Exception $e) {
            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('admin.products-error', $e->getMessage());

            return $response->withRedirect($this->router->pathFor('admin.products'));
        }

        $this->flash->addMessage('admin.products-success', 'Successfully added Product!');

        return $response->withRedirect($this->router->pathFor('admin.products'));
    }

    public function deleteProduct($request, $response, $args = null)
    {
        try {
            $product = Product::find($args['id']);
            $product->delete();
            unlink($this->settings['products_path'] . DIRECTORY_SEPARATOR . $product->image);

        } catch (Exception $e) {
            $this->flash->addMessage('admin.products-delete.error', $e->getMessage());

            return $response->withRedirect($this->router->pathFor('admin.products'));
        }

        $this->flash->addMessage('admin.products-delete.success', 'Successfully deleted Product!');

        return $response->withRedirect($this->router->pathFor('admin.products'));
    }
}
