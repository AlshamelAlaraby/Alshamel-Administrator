<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkflowTree extends Model
{
    use SoftDeletes;

    public Const ACTIVE = 'active';
    public Const INACTIVE = 'inactive';

    protected $table = 'workflow_trees';
    protected $fillable = [
        'name',
        'name_e',
        'is_active',
        'parent_id',
        'partner_id',
        'company_id',
        'module_id',
        'screen_id',
        'icon_url',
        'id_sort',
    ];

    protected $appends = ['icon'];

    public function getIconAttribute()
    {
        return asset($this->icon_url);
    }

    /**
     * return child of this parent
     */
    public function child(){
        return $this->belongsTo(WorkflowTree::class , 'parent_id' , 'id');
    }

    /**
     * return relation  with  partner
     */
    public function partner(){
        return $this->belongsTo(Partner::class , 'partner_id' , 'id');
    }

    /**
     * return relation with  company
     */
    public function company(){
        return $this->belongsTo(Company::class,'company_id' , 'id');
    }

    /**
     * return relation with  module
     */
    public function moduleName(){
        return $this->belongsTo(Module::class);
    }

    /**
     * return relation with  screen
     */
    public function screen(){
        return $this->belongsTo(Screen::class);
    }

}
