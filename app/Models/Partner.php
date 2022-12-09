<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Partner extends Model
{
    use HasFactory;
    use SoftDeletes;


    public Const ACTIVE = 'active';
    public Const INACTIVE = 'inactive';

    protected $table = 'partners';
    protected $fillable = [
        'name',
        'name_e',
        'is_active',
        'email',
        'password',
        'mobile_no',
    ];


}
