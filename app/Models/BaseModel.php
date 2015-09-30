<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \Carbon\Carbon;

class BaseModel extends Model{


    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format('d/m/Y H:i:s'); 
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::parse($date)->format('d/m/Y H:i:s'); 
    }

    public function getStartAttribute($date)
    {
        if($date){
            return Carbon::parse($date)->format('d/m/Y'); 
        }else{
            return null;
        }
    }

    public function getEndAttribute($date)
    {
        if($date){
            return Carbon::parse($date)->format('d/m/Y'); 
        }else{
            return null;
        }
    }

    public function setStartAttribute($date)
    {
        if($date != ""){
            $this->attributes['start'] = Carbon::createFromFormat('d/m/Y', $date)->format('Y-m-d');            
        }else{
            $this->attributes['start'] = NULL;
        }
    }

    public function setEndAttribute($date)
    {
        if($date != ""){
            $this->attributes['end'] = Carbon::createFromFormat('d/m/Y', $date)->format('Y-m-d');
        }else{
            $this->attributes['end'] = NULL;
        }
    }


    /**
     * Convert the data to pt_BR format.
     *
     * @param  Field $field
     * @return string
     */
    public function date($field)
    {

        $original   = $this->getOriginal($field);

        setlocale(LC_TIME, 'pt_BR.utf-8');
        $year   = date('Y', strtotime($original));
        $month  = date('m', strtotime($original));
        $day    = date('d', strtotime($original));
        $hour   = date('H', strtotime($original));
        $minute = date('i', strtotime($original));
        $second = date('s', strtotime($original));

        $dt     = Carbon::create($year, $month, $day, $hour, $minute, $second);
        
        return $dt->formatLocalized('%A, %d de %B de %Y');
    }

}