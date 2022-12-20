<?php

namespace App\Models;

use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Button extends Model implements \Spatie\MediaLibrary\HasMedia
{
    use SoftDeletes, MediaTrait;

    protected $guarded = [];
    protected $table = 'buttons';

    public function screens()
    {
        return $this->belongsToMany(Screen::class, 'screens_buttons', 'button_id', 'screen_id');
    }

    public function getIconUrlAttribute()
    {
        return asset($this->icon);
    }
}
