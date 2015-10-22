<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Request;

use Cartalyst\Sentinel\Native\Facades\Sentinel as Sentinel;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Sentinel::getRoleRepository()->orderBy('name')->get();
        
        return response()->json($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $data = Request::json()->all();

        $data['slug'] = str_slug($data['name']);

        $role = Sentinel::getRoleRepository()->createModel()->create($data);
        
        $role->permissions = [
            "admin.home" => true,
        ];

        $role->save();
        
        return response()->json(["success" => true, "role" => $role ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Sentinel::findRoleById($id);
        
        return response()->json($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $role = Sentinel::findRoleByID($id);
        
        $data = Request::json()->all();

        // Update the role details
        $role->name   = $data["name"];

        // Update the role
        if ($role->save())
        {
            // role information was updated
        }
        else
        {
            // role information was not updated
        }

        return response()->json($role,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        Sentinel::findRoleById($id)->delete();

        return response(["success" => true]);
    }
}
