<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Request;

use Cartalyst\Sentry\Facades\Laravel\Sentry as Sentry; 


class PermissionsController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{

		/*
		// Find the group using the group id
	    $group = Sentry::findGroupById(3);
	    // Delete the group
	    $group->delete();

		$group = Sentry::createGroup([
	        'name' => 'Administrador',
	        'permissions' => [
				'Usuários' => 1,
				'Notícias' => 1,
				'Parceiros' => 1,
				'Licitações' => 1,
				'Hotelaria' => 1,
				'Mineração' => 1,
				'Desenvolvimento' => 1,
				'MAPA' => 1,
	        ],
	    ]);
		*/

		//$group = Sentry::findGroupById(1);

		$groups = Sentry::findAllGroups();

		$user = Sentry::findUserByID($id);

		$user_groups = $user->getGroups();

	    $return = [
	    	"user" => $user,
	    	"groups" => $groups,
	    	"user_groups" => $user_groups
	    ];

		return response()->json($return);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{

		$user = Sentry::findUserByID($id);	
		
		$data = Request::json()->all();
	    $group = Sentry::findGroupById($data['group_id']);		

	    if($data['action']){
	    	$user->addGroup($group);
	    }else{
	    	$user->removeGroup($group);
	    }

		return response($user);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		return response()->json(["success" => true]);
	}
}
