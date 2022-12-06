<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Button extends Model
{
    use SoftDeletes;

    protected $guarded = [] ;


    protected $appends = ['icon'];


    public function screens()
    {
        return $this->belongsToMany(Screen::class, 'screens_buttons', 'button_id' , 'screen_id');
    }


    public function getIconUrlAttribute()
    {
        return asset($this->icon);
    }

}
