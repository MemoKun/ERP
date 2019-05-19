<?php

namespace App\Models;

class EvalCategoryMag extends Model
{
    protected $table = 'eval_category_mag';

    protected $fillable = [
        'eval_category' , 'eval_description' , 'creator' , 'status', 'created_at' , 'updated_at'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];
}
?>