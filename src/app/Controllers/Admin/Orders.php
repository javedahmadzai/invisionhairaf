<?php

namespace App\Controllers\Admin;

use App\Controllers\Controller;
use App\Models\Customers;
use App\Models\OrderItem;
use App\Models\Products as Product;

class Orders extends Controller
{
    public function index($request, $response)
    {
        $customers = Customers::orderBy('id', 'desc')->get();

        foreach ($customers as $customer) {
            $orders[$customer->id] = [
                'fname'      => $customer->fname,
                'lname'      => $customer->lname,
                'email'      => $customer->email,
                'phone'      => $customer->phone,
                'city'       => $customer->city,
                'company'    => $customer->company,
                'address1'   => $customer->address1,
                'address2'   => $customer->address2,
                'created_at' => $customer->created_at,
                'total'      => 0,
            ];
            $orderItems = OrderItem::where('oid', $customer->id)->get();
            foreach ($orderItems as $orderItem) {
                $product = Product::where('id', $orderItem->pid)->first();

                $orders[$customer->id]['items'][$orderItem->pid] = [
                    'title'         => $product->title,
                    'current_price' => $product->price,
                    'image'         => $product->image,
                    'quantity'      => $orderItem->quantity,
                    'price'         => $orderItem->price,
                    'total'         => $orderItem->total,
                    'date'          => $orderItem->created_at,
                ];
                $orders[$customer->id]['total'] += $orders[$customer->id]['items'][$orderItem->pid]['total'];
            }
        }

        return $this->view->render($response, 'admin/orders.twig', [
            'orders' => $orders,
        ]);
    }
}
