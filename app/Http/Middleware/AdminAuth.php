<?php namespace App\Http\Middleware;

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

		/*
		 * Check if the user is logged, then return HTTP 401 status
		 */
		if(!$user = Sentinel::check()){
        	return response(['success' => false], 401);
        }

        /*
         + Get the route name to make a validation of the user's permission relative to the resource requested
         */
		$name = $request->route()->getName();

//dd($user->roles);
dd($name);

		/*
		 + Array of routes without permissions needed
		 */
		$free_access = [];

		if( !in_array( $name ,$free_access) ){


			$action_name = $request->route()->getAction()["as"];


			$sub_items = [
				/*
				"areas" => [
					"index" => ["mines","hotels","places","districts","financials","technologies"],
					"show" => ["mines","hotels","places","districts","financials","technologies"],
					"update" => ["mines","hotels","places","districts","financials","technologies"],
				]
				*/
			];


			if( isset($config[ $resource ] ) ){

				if( !$$user->hasAccess( $config[ $resource ] ) ){


					foreach ($sub_items[$resource] as $k => $item) {

						if( $name == "admin.".$resource.".".$k ){

							foreach ($item as $permission) {

								if( $$user->hasAccess( $config[ $permission ] )){
									return $next($request);
								}
							}
						} 
					}

					return response(['success' => true],401);
				}
			}
		}

		return $next($request);

	}
}
