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
        	return response(['success' => false],401);
        }

        /*
         + Get the route name to make a validation of the user's permission relative to the resource requested
         */
		$name 		= $request->route()->getName();

//dd($user->roles);

		$current 	= explode('.',$name); 
		$resource 	= $current[1];
		/*
		 + Array of routes without permissions needed
		 */
		$free_access = ["check"];

		if( isset($resource) && !in_array( $resource ,$free_access) ){

			$action_name = $request->route()->getAction()["as"];

			/*
			 * Convertion of the name of routes to Portuguese language
			 * You need to include in this array, every resources names that needs permission
			 * The permissions should be configured in the Sentinel's groups using the Portuguese names
			 * Important: The system check the group's permissions, and not which group the user is assigned
			 */
			$config = [
				"users" 		=> "Usuários",
				"banners" 		=> "Banners",
				"partners" 		=> "Parceiros",
				"points" 		=> "Pontos",
			];

			$sub_items = [
				/*
				"areas" => [
					"index" => ["mines","hotels","places","districts","financials","technologies"],
					"show" => ["mines","hotels","places","districts","financials","technologies"],
					"update" => ["mines","hotels","places","districts","financials","technologies"],
				]
				*/
			];

			$current_user = Sentinel::getUser();

			if( isset($config[ $resource ] ) ){

				if( !$current_user->hasAccess( $config[ $resource ] ) ){


					foreach ($sub_items[$resource] as $k => $item) {

						if( $name == "admin.".$resource.".".$k ){

							foreach ($item as $permission) {

								if( $current_user->hasAccess( $config[ $permission ] )){
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
