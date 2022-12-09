<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScreenDocumentType extends Model
{
    use HasFactory;

    protected $fillable = [
        'screen_id',
        'documentType_id',
    ];

}
