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

		DB::table('activations')->truncate();
		DB::table('persistences')->truncate();
		DB::table('reminders')->truncate();
		DB::table('throttle')->truncate();
		DB::table('role_users')->truncate();
		DB::table('roles')->truncate();
		DB::table('users')->truncate();

		$user = Sentinel::registerAndActivate([
		    'email'    => 'admin@my-laravel-blog.com',
		    'password' => 'password',
		    'first_name' => 'Administrator',
		    'last_name' => 'Blog',
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
			"admin.users.unique" => true,

			"admin.roles.create" => true,
			"admin.roles.destroy" => true,
			"admin.roles.edit" => true,
			"admin.roles.index" => true,
			"admin.roles.show" => true,
			"admin.roles.store" => true,
			"admin.roles.update" => true,
			"admin.roles.unique" => true,

		];

		$role->save();

		$role->users()->attach($user);

    }
}










