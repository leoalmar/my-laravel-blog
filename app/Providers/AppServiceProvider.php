<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        //\Blade::setRawTags("[[", "]]");
        //\Blade::setContentTags('<%', '%>'); // for variables and all things Blade
        //\Blade::setEscapedContentTags('<%%', '%%>'); // for escaped data
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() == 'local') {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }
    }
}
