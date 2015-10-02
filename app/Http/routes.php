<?php


/* ================ SITE'S ROUTES ============================================================= */
$router->group(['as' => 'site.'], function() {

	Route::get('/', ['as' => 'home', 'uses' => 'Site\HomeController@index']);

});
/* ============================================================================================= */


/* ================ ADMIN'S ROUTES ============================================================= */

Route::get('dashboard', ['as' => 'admin.home', 'uses' => 'Admin\HomeController@index']);	
	
$router->group(['prefix' => 'admin'], function() use ($router) {
	
	Route::post('authenticate', ['as' => 'admin.authenticate', 'uses' => 'Admin\UsersController@login' ]);
	
	$router->group(['middleware' => ['AdminAuth']], function() { 

		Route::get('check', ['as' => 'admin.check', 'uses' => 'Admin\UsersController@check']);
		Route::get('logout', ['as' => 'admin.logout', 'uses' => 'Admin\UsersController@logout' ]);

		Route::resource('users', 'Admin\UsersController');
		Route::resource('permissions', 'Admin\PermissionsController');

	});
});

/* ============================================================================================= */



/* 
 *	Return view dinamically for Angular Router
 */
Route::get('view/{name_view}', function ($name_view) {
	return view($name_view);
});
