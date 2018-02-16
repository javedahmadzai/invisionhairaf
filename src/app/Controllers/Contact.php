<?php

namespace App\Controllers;

use App\Models\Mail;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Validator;

class Contact extends Controller
{
    public function index($request, $response)
    {
        return $this->view->render($response, 'pages/contact.twig', [
            'validation' => $this->flash->getFirstMessage('contact-validation'),
            'error'      => $this->flash->getFirstMessage('contact-error'),
            'success'    => $this->flash->getFirstMessage('contact-success'),
        ]);
    }

    public function mail($request, $response)
    {
        try {
            $validation = Validator::key('fname', Validator::stringType()->length(1, 25)->notEmpty())
                ->key('lname', Validator::stringType()->length(1, 25)->notEmpty())
                ->key('email', Validator::email()->length(1, 64)->notEmpty())
                ->key('phone', Validator::numeric()->length(1, 15))
                ->key('subject', Validator::stringType()->length(1, 255)->notEmpty())
                ->key('message', Validator::stringType()->length(100, 1000)->notEmpty())
                ->key('csrf_name', Validator::notEmpty())
                ->key('csrf_value', Validator::notEmpty())
                ->assert($request->getParams());
        } catch (NestedValidationException $e) {
            $errors = $e->findMessages([
                'fname'     => 'First name must contain letters and be 1 - 25 of length',
                'lname'     => 'Last name must contain letters and be 1 - 25 of length',
                'phone'     => 'Phone must be numeric and 1 - 15 in length',
                'subject'   => 'Email Subject must be 1 to 255 letters',
                'message'   => 'Message body must be 100 to 1000 in length',
                'csrf_name' => 'Please try later!',
            ]);

            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('contact-validation', array_values(array_filter($errors)));

            return $response->withRedirect($this->router->pathFor('contact'));
        }

        try {
            $sendMail = new PHPMailer(true);
            $sendMail->setFrom(
                $request->getParam('email'),
                $request->getParam('fname') . ' ' . $request->getParam('lname')
            );
            $sendMail->addAddress('info@invisionhairaf.com');
            $sendMail->Subject = $request->getParam('subject');
            $sendMail->Body    = $request->getParam('message');
            $sendMail->send();
        } catch (Exception $e) {
            $_SESSION['old_input'] = $request->getParams();
            $this->flash->addMessage('contact-error', $e->getMessage());

            return $response->withRedirect($this->router->pathFor('contact'));
        }

        $saveMail          = new Mail;
        $saveMail->fname   = $request->getParam('fname');
        $saveMail->lname   = $request->getParam('lname');
        $saveMail->email   = $request->getParam('email');
        $saveMail->phone   = $request->getParam('phone');
        $saveMail->subject = $request->getParam('subject');
        $saveMail->message = $request->getParam('message');
        $saveMail->save();

        $this->flash->addMessage('contact-success', 'Successfully send your mail!');

        return $response->withRedirect($this->router->pathFor('contact'));
    }
}
