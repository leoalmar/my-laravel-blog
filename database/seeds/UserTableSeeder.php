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
		]);

		$role = Sentinel::getRoleRepository()->createModel()->create([
			'name' => 'Administrator',
			'slug' => 'administrator',
		]);
		
		$role->permissions = [
		    'admin.home' => true,
		    'admin.user.view' => true,
		    'admin.user.update' => true,
		    'admin.user.delete' => true,
		    'admin.user.create' => true,
		];

		$role->save();

		$role->users()->attach($user);

    }
}
