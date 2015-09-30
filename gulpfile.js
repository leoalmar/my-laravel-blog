
var elixir = require('laravel-elixir');

require('laravel-elixir-livereload');
require('laravel-elixir-sass-compass');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    
	mix.compass('app.scss','public/site/css/',{ style: "compressed", sass: "./resources/assets/sass/site" });
	//mix.compass('app.scss','public/admin/css/',{style: "compressed",sass: "./resources/assets/sass/admin"});

	mix.scripts([
	    	'admin/lib/*/*.min.js',
	    	'admin/app.js',
	    	'admin/global.js',
	    	'admin/controllers/*.js',
	    	'admin/services/*.js',
	    	'admin/factories/*.js',
	    	'admin/directives/*.js',
	    	'admin/filters/*.js'
	    ], 'public/admin/js/app.js');
   
	mix.scripts([
			'site/jquery.form.js',
			'site/jquery.mobile.1.3.2.min.js',
			'site/jquery.noty.packaged.min.js',
			'site/global.js'
		], 'public/site/js/app.js');

    mix.livereload();

});