<?php

namespace App\Models;

class ProBomMaterial extends Model
{
    protected $table = 'pro_bom_material';

    protected $fillable = [
        'pro_bom_id', 'material_code', 'spec_code', 'material_name',
        'spec', 'color', 'material_quality', 'special', 'other',
        'volume', 'weight', 'unit', 'semi_finished', 'status',
        'need',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
    }

    public function proBom()
    {
        return $this->belongsTo(ProBom::class, 'pro_bom_id');
    }
}
