<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Partner extends Model
{
    use HasFactory;
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
