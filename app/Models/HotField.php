<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HotField extends Model
{
    use SoftDeletes,LogTrait;

    protected $guarded = [] ;
    protected $table = "hotfields" ;

}
