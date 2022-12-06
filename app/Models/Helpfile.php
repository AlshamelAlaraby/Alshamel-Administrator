<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Helpfile extends Model
{
    use SoftDeletes;


    protected $guarded = [] ;



    public function screen()
    {
        return $this->belongsToMany(ScreenHelpfile::class, 'screens_helpfiles' , 'helpfile_id' , 'screen_id');
    }


}
