<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HotField extends Model
{
    use SoftDeletes;

    protected $guarded = [] ;
    protected $table = "hotfields" ;

}
