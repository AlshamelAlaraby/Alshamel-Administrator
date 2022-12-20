<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScreenButton extends Model
{
    use SoftDeletes, LogTrait;

    protected $table = 'sys_screens_buttons';

    protected $guarded = ["id"];
}
