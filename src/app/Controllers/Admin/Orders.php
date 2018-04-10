<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Orders as CustomerOrders;
use App\Models\Products as Product;

class Orders extends Controller
{
    public function index($request, $response)
    {
        $orders = [];

        $customer_orders = CustomerOrders::orderBy('id', 'desc')->where('completed', false)->get();

        foreach ($customer_orders as $order) {
            $orders[$order->id] = [
                'id'       => $order->id,
                'fname'    => $order->fname,
                'lname'    => $order->lname,
                'email'    => $order->email,
                'phone'    => $order->phone,
                'city'     => $order->city,
                'company'  => $order->company,
                'address1' => $order->address1,
                'address2' => $order->address2,
                'date'     => $order->created_at,
            ];

            $orders[$order->id]['items'] = Product::join('orderitem', 'products.id', '=', 'orderitem.pid')
                ->select('products.*', 'orderitem.price', 'orderitem.quantity', 'orderitem.total')
                ->where('oid', $order->id)
                ->get();
        }

        return $this->view->render($response, 'admin/orders.twig', [
            'orders' => $orders,
        ]);
    }

    public function done($request, $response, $args)
    {

        $order            = CustomerOrders::find($args['id']);
        $order->completed = true;
        $order->save();
        return $response->withRedirect($this->router->pathFor('admin.orders'));
    }
}
