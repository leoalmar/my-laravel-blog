<?php

namespace App\Http\Middleware;

use Closure;
use Cartalyst\Sentinel\Native\Facades\Sentinel as Sentinel;

class Authenticate
{
    
    /**
     * Create a new filter instance.
     * 
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {


        return $next($request);
    }
}
