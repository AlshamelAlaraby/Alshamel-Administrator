<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Helpfile extends Model
{
    use SoftDeletes;


    protected $guarded = ["id"] ;



    public function screens()
    {
        return $this->belongsToMany(Screen::class, 'screens_helpfiles' , 'helpfile_id' , 'screen_id');
    }


}
