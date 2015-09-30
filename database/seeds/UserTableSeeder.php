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
		    'user.view' => true,
		    'user.update' => true,
		    'user.delete' => true,
		    'user.create' => true,
		];

		$role->save();

		$role->users()->attach($user);

    }
}
