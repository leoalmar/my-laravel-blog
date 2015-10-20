<?php

use Illuminate\Database\Seeder;

use Cartalyst\Sentinel\Native\Facades\Sentinel as Sentinel;

class UserTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		$user = Sentinel::registerAndActivate([
		    'email'    => 'admin@my-laravel-blog.com',
		    'password' => 'password',
		    'first_name' => 'Softzar',
		    'last_name' => 'Administrator',
		]);

		$role = Sentinel::getRoleRepository()->createModel()->create([
			'name' => 'Administrator',
			'slug' => 'administrator',
		]);
		
		$role->permissions = [
		    "admin.home" => true,
			
			"admin.users.create" => true,
			"admin.users.destroy" => true,
			"admin.users.edit" => true,
			"admin.users.index" => true,
			"admin.users.show" => true,
			"admin.users.store" => true,
			"admin.users.update" => true,
			"admin.users.is_unique" => true,

			"admin.roles.create" => true,
			"admin.roles.destroy" => true,
			"admin.roles.edit" => true,
			"admin.roles.index" => true,
			"admin.roles.show" => true,
			"admin.roles.store" => true,
			"admin.roles.update" => true,

		];

		$role->save();

		$role->users()->attach($user);

    }
}










