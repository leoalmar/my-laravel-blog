<?php

namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;


class HomeController extends Controller
{

    public function index()
    {
        $toView = [];

        return view('site.index', $toView);
    }

}
