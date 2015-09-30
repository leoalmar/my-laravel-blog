<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    /**
	 * Upload a base64 file (need to be improved).
	 *
	 * @param  $base_64_string [The string of file in base 64 format]
	 * @return string [The name.extension of file]
	 */
    protected function uploadFile($base_64_string, $location = "img", $file_name = false)
	{

		if( is_array($base_64_string) ){
			$file_name = $base_64_string[0];
			$base_64_string = $base_64_string[1];
		}

		list($meta_data, $data) = explode(',', $base_64_string);

		if(!$file_name){
			
			list($mine, )			= explode(';', $meta_data);
			list(, $type) 			= explode(':', $mine);
			list(, $extension) 		= explode('/', $type);
			
			$full_file_name = md5(microtime()).".".$extension;

		}else{
			$full_file_name = $file_name;
		}

		file_put_contents( public_path( $location."/".$full_file_name ) , base64_decode($data));

		return $full_file_name;
		
	}

	protected function removeFile($fileName, $location){

		File::delete( public_path( $location.'/'.$fileName ) );

	}
}
