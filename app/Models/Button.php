<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Button extends Model
{
    use SoftDeletes;

    protected $guarded = [] ;


    protected $appends = ['icon'];

    public function getIconUrlAttribute()
    {
        return asset($this->icon);
    }

}
