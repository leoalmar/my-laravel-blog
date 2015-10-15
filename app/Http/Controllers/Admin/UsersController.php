<?php 

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Request;

use Cartalyst\Sentinel\Native\Facades\Sentinel as Sentinel;


class UsersController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = Sentinel::setModel('App\Models\User')->orderBy('first_name')->get();
		
		return response()->json($users);
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		
		$data = Request::json()->all();

		unset($data["password_confirmation"]);

		$user = Sentinel::registerAndActivate($data);
		
		unset($user->password);

		return response()->json(["success" => true, "user" => $user ], 201);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$user = Sentinel::setModel('App\Models\User')->find($id);
		
		return response()->json($user);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{

		$user = Sentinel::findUserByID($id);
		
		$data = Request::json()->all();

		// Update the user details
		$user->first_name 	= $data["first_name"];
		$user->last_name 	= $data["last_name"];
		$user->email 		= $data["email"];

		if( isset( $data["password"] ) && $data["password"] != "" ){
			$user->password = $data["password"];
		}

		// Update the user
		if ($user->save())
		{
			// User information was updated
		}
		else
		{
			// User information was not updated
		}

		return response()->json($user,200);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		// Find the user using the user id
	    $user = Sentinel::findUserById($id);
	    
		if($user->image) parent::removeFile($user->image, "img/users");
	    
	    // Delete the user
	    $user->delete();

		return response()->json(["success" => true]);
	}

	public function login()
	{

		$creadentials = Request::json()->all();

		$user = Sentinel::authenticate($creadentials, true);

		if ( $user ) {
			return response([ "success" => true, "user" => $user ], 200);
		} 
		else
		{
			$error = [
				['field' => 'password', 'message' => 'Invalid login'],
		    ];
			return response(["success" => false, "select" => "password", "error" => $error ], 203);
		}		
	}

	public function logout()
	{
		Sentinel::logout();
		return response(["success" => true],200);		
	}

	public function isUnique()
	{

		$data = Request::json()->all();

		$user = Sentinel::findByCredentials(["email" => $data["email"]]);

		if( $user ){
			
			$owner = (isset($data['id']) && $data['id'] == $user->id);

			return response()->json(["success" => $owner]);
		}
		else
		{			
			return response()->json(["success" => true]);
		}
	}

}
