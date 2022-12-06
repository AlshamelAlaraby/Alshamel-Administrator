<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Screen extends Model
{
    use SoftDeletes;

    protected $table = 'screens';
    protected $fillable = [
        'name',
        'name_e',
        'title',
        'title_e',
        'serial_id',
    ];

    public function helpfile()
    {
        return $this->belongsToMany(Helpfile::class, 'screens_helpfiles', 'screen_id', 'helpfile_id');
    }

    public function serial(){
        return $this->belongsTo(Serial::class);

    }
}
