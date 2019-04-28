<?php

namespace App\Models;

use Carbon\Carbon;

class AfterSale extends Model
{
    const AFTERSALE_STATUS_NEW = 'new';
    const AFTERSALE_STATUS_SUBMIT = 'submit';

    public static $orderStatusMap = [
        self::AFTERSALE_STATUS_NEW => '未提交',
        self::AFTERSALE_STATUS_SUBMIT => '已提交',
    ];

    public static $orderStatusCodeMap = [
        self::AFTERSALE_STATUS_NEW => 0,
        self::AFTERSALE_STATUS_SUBMIT => 1
    ];

    protected $table = 'after_sale';

    //不可为空
    protected $fillable = [
        'after_sale_order_no', 'order_status', 'order_no','deliver_date',
        'client_name', 'suppliers_id', 'logistics_id','shop_name','vip_name',
        'order_staff', 'order_amount', 'after_sale_type','shop_group',
        'after_sale_group', 'after_sale_status', 'order_phone',
        'receiver_state', 'receiver_city', 'receiver_district',
        'receiver_address', 'rfe_order_at', 'tag_name','logistic_name',
        'tag_at', 'tag_people','parts_duty','after_responsible_party','locking_people',
        'locking_at','after_sale_person','is_reject','customer_service_requirements',
        'refund_status','return_status','patch_status','patch_split',
        'is_refund','is_return','is_patch','is_solve','problem_description',
        'is_service_submit','after_sale_check_person','director_check_person'
    ];

    protected $dates = [
        'deliver_date',
        'created_at',
        'rfe_order_at',
        'locking_at',
        'tag_at',
        'predict_at',
        'service_submit_date',
        'after_sale_check_date',
        'director_check_date',
        'close_date',
    ];

    //设置类型
    protected $casts = [
        'is_finish' => 'boolean',
        'is_reject' => 'boolean',
        'is_refund' => 'boolean',
        'is_return' => 'boolean',
        'is_patch' => 'boolean',
        'is_solve' => 'boolean',
        'is_service_submit' => 'boolean',
        'is_after_sale_check' => 'boolean',
        'is_director_check' => 'boolean',
        'status' => 'boolean',
        'is_close' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function($model) {
            // 如果模型的 no 字段为空
            if (!$model->after_sale_order_no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->after_sale_order_no = static::findAvailableNo();
                // 如果生成失败，则终止创建订单
                if (!$model->after_sale_order_no) {
                    return false;
                }
            }
        });

        static::deleting(function($model) {
            $model->afterSaleSchedule()->delete();
        });
    }

    public static function findAvailableNo()
    {
        // 订单流水号前缀
        //AR:Aftersale Request Form 采购申请单,公司内部使用;
        //AO:Aftersale Order Form 采购订单,公司对外使用。
        $prefix = 'AO';

        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $no = $prefix . date('YmdHis') . str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::query()->where('after_sale_order_no', $no)->exists()) {
                return $no;
            }
        }
        return false;
    }

    /**
     * 客审提交
     * @return bool
     */
    public function audit()
    {
        $this->service_submit_person = 1;
        $this->order_status = self::AFTERSALE_STATUS_SUBMIT;
        $this->service_submit_date = date('YmdHis');
        $this->save();
    }

    /**
     * 退审提交
     * @return bool
     */
    public function unAudit()
    {
        $this->service_submit_person = 0;
        $this->order_status = self::AFTERSALE_STATUS_NEW;
        $this->save();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function afterSaleState()
    {
        return $this->belongsTo(AfterSaleState::class,'after_sale_status');
    }

    public function afterSaleType()
    {
        return $this->belongsTo(AfterSaleType::class,'after_sale_type');
    }

    public function afterSaleSchedules()
    {
        return $this->hasMany(AfterSaleSchedule::class, 'after_sale_id');
    }
}