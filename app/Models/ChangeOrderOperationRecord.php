<?php

namespace App\Models;

class ChangeOrderOperationRecord extends Model
{
    protected $table = 'change_order_operation_records';

    protected $fillable = [
        'change_orders_id','user_id','user_name','operation','description','status'
    ];

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

    //观察者
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        //static::deleting(function($model) {
        //    $model->cityInfos()->delete();
        //});
    }

    public function changeOrder()
    {
        return $this->belongsTo(ChangeOrder::class, 'change_orders_id');
    }

}
