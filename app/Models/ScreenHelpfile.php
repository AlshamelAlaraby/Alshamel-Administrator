<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScreenHelpfile extends Model
{
    use SoftDeletes;

    protected $table = 'screens_helpfiles';

    protected $guarded = ["id"] ;

}
