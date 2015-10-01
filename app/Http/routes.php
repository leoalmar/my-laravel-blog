<?php


/* ================ SITE'S ROUTES ============================================================= */
$router->group(['as' => 'site.'], function() {

	Route::get('/', ['as' => 'home', 'uses' => 'Site\HomeController@index']);

});
/* ============================================================================================= */


/* ================ ADMIN'S ROUTES ============================================================= */
$router->group(['middleware' => ['AdminAuth'], 'prefix' => 'admin'], function() { 

	Route::get('check', ['as' => 'admin.check', 'uses' => 'Admin\UsersController@check']);
	Route::get('logout', ['as' => 'admin.logout', 'uses' => 'Admin\UsersController@logout' ]);

	Route::resource('users', 'Admin\UsersController');
	Route::resource('permissions', 'Admin\PermissionsController');

});
/* ============================================================================================= */



/* 
 *	Return view dinamically for Angular Router
 */
Route::get('view/{name_view}', function ($name_view) {
	return view($name_view);
});
