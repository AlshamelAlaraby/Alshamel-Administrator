<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'name_e',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];
}
