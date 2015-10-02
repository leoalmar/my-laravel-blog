<?php 

namespace App\Http\Middleware;

use Closure;
use Cartalyst\Sentinel\Native\Facades\Sentinel as Sentinel;
use App;

class AdminAuth {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{

        /**
         * Get the route name to make a validation of the user's permission relative to the resource requested
         */
		$route_name = $request->route()->getName();
		
		/**
		 * Check if the user is logged, then return HTTP 401 status
		 */
		if(!$user = Sentinel::check()){
        	return response(['success' => false], 401);
        }

        if($route_name == "admin.check") {
        	
        	// Delete the password of user
        	unset($user->password);
			
			// Force the user comes with the Roles
			$user->roles; 

        	return response(['success' => true, 'user' => $user], 200);
        }

		/**
		 * Array of routes without permissions needed
		 */
		$free_access = [];

		if( in_array( $route_name ,$free_access) || $user->hasAccess($route_name) ){
			return $next($request);
		}	

		return response(['success' => true],401);

	}
}
