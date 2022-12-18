<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScreenButton extends Model
{
    use SoftDeletes;

    protected $table = 'screens_buttons';

    protected $guarded = ["id"] ;



}
