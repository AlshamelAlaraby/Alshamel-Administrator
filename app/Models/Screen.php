<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
class Screen extends Model
{
    use SoftDeletes,LogsActivity, CausesActivity;

    protected $table = 'screens';
    protected $fillable = [
        'name',
        'name_e',
        'title',
        'title_e',
        'serial_id',
    ];

    public function helpfiles()
    {
        return $this->belongsToMany(Helpfile::class, 'screens_helpfiles', 'screen_id', 'helpfile_id');
    }

    public function buttons()
    {
        return $this->belongsToMany(Button::class, 'screens_buttons', 'screen_id', 'button_id');
    }

    public function serial()
    {
        return $this->belongsTo(Serial::class);

    }

    public function documentTypes()
    {
        return $this->belongsToMany(DocumentType::class, 'screen_document_types');

    }


    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?? 0;
        $activity->causer_type = auth()->user()->role ?? "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Store')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
