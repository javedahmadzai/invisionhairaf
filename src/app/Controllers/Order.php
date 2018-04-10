<?php

namespace App\Controllers;

use App\Models\OrderItem;
use App\Models\Orders;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator;

class Order extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'pages/order.twig', [
            'validation' => $this->flash->getFirstMessage('order-validation'),
        ]);
    }

    public function place($request, $response)
    {
        try {
            $validation = Validator::key('fname', Validator::stringType()->length(1, 25)->notEmpty())
                ->key('lname', Validator::stringType()->length(1, 25)->notEmpty())
                ->key('company', Validator::stringType())
                ->key('address1', Validator::stringType()->length(5, 200))
                ->key('address2', Validator::stringType())
                ->key('city', Validator::stringType()->length(1, 25)->notEmpty())
                ->key('email', Validator::email()->length(1, 64)->notEmpty())
                ->key('phone', Validator::numeric()->length(1, 15))
                ->key('csrf_name', Validator::notEmpty())
                ->key('csrf_value', Validator::notEmpty())
                ->assert($request->getParams());
        } catch (NestedValidationException $e) {
            $errors = $e->findMessages([
                'fname'     => 'First name must contain letters and be 1 - 25 of length',
                'lname'     => 'Last name must contain letters and be 1 - 25 of length',
                'phone'     => 'Phone must be numeric and 1 - 15 in length',
                'email'     => 'Please write a valid email address',
                'address1'  => 'Address must be between 5 and 200 characters',
                'city'      => 'Write a valid city name between 1 - 25 characters',
                'csrf_name' => 'Please try later!',
            ]);

            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('order-validation', array_values(array_filter($errors)));

            return $response->withRedirect($this->router->pathFor('order'));
        }

        $order           = new Orders;
        $order->fname    = $request->getParam('fname');
        $order->lname    = $request->getParam('lname');
        $order->email    = $request->getParam('email');
        $order->phone    = $request->getParam('phone');
        $order->city     = $request->getParam('city');
        $order->company  = $request->getParam('company');
        $order->address1 = $request->getParam('address1');
        $order->address2 = $request->getParam('address2');
        $order->save();

        foreach ($_SESSION['cart'] as $item) {
            $orderItem           = new OrderItem;
            $orderItem->oid      = $order->id;
            $orderItem->pid      = $item['id'];
            $orderItem->quantity = $item['quantity'];
            $orderItem->price    = $item['price'];
            $orderItem->total    = $item['total'];
            $orderItem->save();
        }

        unset($_SESSION['cart']);

        return $this->view->render($response, 'pages/thankyou.twig');
    }
}
