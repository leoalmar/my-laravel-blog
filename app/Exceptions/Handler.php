<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        HttpException::class,
        ModelNotFoundException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     * @return void
     */
    public function report(Exception $e)
    {
        return parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $e)
    {
        if ($e instanceof ModelNotFoundException) {
            $e = new NotFoundHttpException($e->getMessage(), $e);
        }

        if ($e instanceof \Cartalyst\Sentinel\Checkpoints\ThrottlingException) {

            $free = $e->getFree()->format('d M, h:i:s a');

            switch ($e->getType())
            {
                case 'global':
                    $message = "Our site appears to be spammed. To give eveything a chance to calm down, please try again after {$free}.";
                    break;
                case 'ip':
                    $message = "Too many unauthorized attemps have been made against your IP address. Please wait until {$free} before trying again.";
                    break;
                case 'user':
                    $message = "Too many unauthorized attemps have been made against your account. For your security, your account is locked until {$free}.";
                    break;
            }

            
            $error = [
                ['field' => 'password', 'message' => $message],
            ];
            return response(["success" => false, "select" => "password", "error" => $error ], 403);
        }


        return parent::render($request, $e);
    }
}
