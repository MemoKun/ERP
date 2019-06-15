<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class AfterSale extends Model
{
    // 售后状态
    const AFTERSALE_STATUS_NEW = 10;
    const AFTERSALE_STATUS_SUBMIT = 20;
    const AFTERSALE_STATUS_LOCK = 20;
    const AFTERSALE_STATUS_ONE_AUDIT = 30; //客服审核
    const AFTERSALE_STATUS_TWO_AUDIT = 40; //主管审核
    const AFTERSALE_STATUS_FINISH = 50; //完成

    const AFTERSALE_RETURN_SUBMIT = 10;
    const AFTERSALE_RETURN_LOCK = 20;
    const AFTERSALE_RETURN_ONE_AUDIT = 20; //驳回客服审核
    const AFTERSALE_RETURN_TWO_AUDIT = 30; //驳回主管审核
    const AFTERSALE_REJECT = 10; //驳回主管审核


    // 售后状态
    public static $orderStatusMap = [
        self::AFTERSALE_STATUS_NEW => '未提交',
        self::AFTERSALE_STATUS_SUBMIT => '已提交',
        self::AFTERSALE_STATUS_LOCK => '已锁定',
        self::AFTERSALE_STATUS_ONE_AUDIT => '已客服审核',
        self::AFTERSALE_STATUS_TWO_AUDIT => '已主管审核',
        self::AFTERSALE_STATUS_FINISH => '已完成',
    ];

    // 售后操作
    public static $afterSaleOperationMap = [
        self::AFTERSALE_STATUS_NEW => '创建',
        self::AFTERSALE_STATUS_LOCK => '锁定',
        self::AFTERSALE_STATUS_SUBMIT => '客服提交',
        self::AFTERSALE_STATUS_ONE_AUDIT => '客服审核',
        self::AFTERSALE_STATUS_TWO_AUDIT => '主管审核',
        self::AFTERSALE_STATUS_FINISH => '完成',

        self::AFTERSALE_RETURN_LOCK => '解锁',
        self::AFTERSALE_RETURN_SUBMIT => '驳回提交',
        self::AFTERSALE_RETURN_ONE_AUDIT => '驳回客服审核',
        self::AFTERSALE_RETURN_TWO_AUDIT => '驳回主管审核',
        self::AFTERSALE_REJECT => '驳回',
    ];

    // 售后操作详情
    public static $afterSaleOperationDescriptionMap = [
        self::AFTERSALE_STATUS_NEW => '创建售后',
        self::AFTERSALE_STATUS_LOCK => '锁定售后',
        self::AFTERSALE_STATUS_SUBMIT => '客服提交',
        self::AFTERSALE_STATUS_ONE_AUDIT => '客服审核',
        self::AFTERSALE_STATUS_TWO_AUDIT => '主管审核',

        self::AFTERSALE_RETURN_LOCK => '解锁售后',
        self::AFTERSALE_RETURN_SUBMIT => '驳回提交',
        self::AFTERSALE_RETURN_ONE_AUDIT => '驳回客服一审',
        self::AFTERSALE_RETURN_TWO_AUDIT => '驳回主管二审',
        self::AFTERSALE_REJECT => '驳回',
    ];

    protected $table = 'after_sale';

    //不可为空
    protected $fillable = [
        'after_sale_order_no', 'order_status', 'order_no','deliver_date',
        'client_name', 'suppliers_id', 'logistics_id','shop_name','vip_name',
        'user_id', 'order_amount', 'after_sale_type','shop_group',
        'after_sale_group', 'after_sale_status', 'order_phone','rfe_information',
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
        'is_locked' => 'boolean',
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

            // 如果模型的 user_id 字段为空
            if (!$model->user_id) {

                $model->user_id = Auth::guard('api')->id();
                // 如果生成失败，则终止创建订单
                if (!$model->user_id) {
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
        $prefix = 'CS';

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

    public function getAfterSaleStatusAttribute($value)
    {
        return self::$afterSaleStatusMap[$value] ?? $value;
    }

    /**
     * 订单未锁定
     * @return bool
     */
    public function unlock()
    {
        return $this->getOriginal('is_locked') != 1;
    }

    /**
     * 订单锁定或释放
     * @return bool
     */
    public function lockOrUnlock()
    {
        if($this->unlock()){
            $this->locking_at = date('Y-m-d h:i:s', time());
            $this->locking_people = Auth::guard('api')->id();
            $this->is_locked = 1;
            $this->after_sale_status = self::AFTERSALE_STATUS_LOCK;

            $userId = Auth::guard('api')->id();
            $userName = User::find($userId)->real_name;
            $operationData = new AfterSaleOperationRecord;
            $operationData->after_sale_id = $this->id;
            $operationData->user_id = Auth::guard('api')->id();
            $operationData->user_name = $userName;
            $operationData->operation = "锁定";
            $operationData->description = "锁定";
            $operationData->save();
        }else{
            $this->locking_at = date('Y-m-d h:i:s', time());
            $this->locking_people = 0;
            $this->is_locked = 0;
            $this->after_sale_status = self::AFTERSALE_RETURN_LOCK;

            $userId = Auth::guard('api')->id();
            $userName = User::find($userId)->real_name;
            $operationData = new AfterSaleOperationRecord;
            $operationData->after_sale_id = $this->id;
            $operationData->user_id = Auth::guard('api')->id();
            $operationData->user_name = $userName;
            $operationData->operation = "解锁";
            $operationData->description = "解锁";
            $operationData->save();
        } 

        $this->save();
    }

    /**
     * 客审提交
     * @return bool
     */
    public function audit()
    {
        $this->order_status = self::AFTERSALE_STATUS_SUBMIT;
        $this->service_submit_date = date('Y-m-d h:i:s', time());
        $this->service_submit_person = Auth::guard('api')->id();
        $this->is_service_submit = 1;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "客服审核";
        $operationData->description = "客服审核";
        $operationData->save();
    }

    /**
     * 退审提交
     * @return bool
     */
    public function unAudit()
    {
        $this->order_status = self::AFTERSALE_RETURN_SUBMIT;
        $this->service_submit_date = date('Y-m-d h:i:s', time());
        $this->service_submit_person = 0;
        $this->is_service_submit = 0;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "客服退审";
        $operationData->description = "客服退审";
        $operationData->save();
    }

    /**
     * 客服一审提交
     * @return bool
     */
    public function oneAudit()
    {
        $this->order_status = self::AFTERSALE_STATUS_ONE_AUDIT;
        $this->after_sale_check_date = date('Y-m-d h:i:s', time());
        $this->after_sale_check_person = Auth::guard('api')->id();
        $this->is_after_sale_check = 1;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "售后一审提交";
        $operationData->description = "售后一审提交";
        $operationData->save();
    }

    /**
     * 客服一审退审
     * @return bool
     */
    public function unOneAudit()
    {
        $this->order_status = self::AFTERSALE_RETURN_ONE_AUDIT;
        $this->after_sale_check_date = date('Y-m-d h:i:s', time());
        $this->after_sale_check_person = 0;
        $this->is_after_sale_check = 0;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "退回客服一审";
        $operationData->description = "退回客服一审";
        $operationData->save();
    }

    /**
     * 主管二审提交
     * @return bool
     */
    public function twoAudit()
    {
        $this->order_status = self::AFTERSALE_STATUS_TWO_AUDIT;
        $this->director_check_date = date('Y-m-d h:i:s', time());
        $this->director_check_person = Auth::guard('api')->id();
        $this->is_director_check = 1;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "售后二审";
        $operationData->description = "售后二审";
        $operationData->save();
    }

    /**
     * 主管二审退审
     * @return bool
     */
    public function unTwoAudit()
    {
        $this->order_status = self::AFTERSALE_RETURN_TWO_AUDIT;
        $this->director_check_date = date('Y-m-d h:i:s', time());
        $this->director_check_person = 0;
        $this->is_director_check = 0;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "退回售后二审";
        $operationData->description = "退回售后二审";
        $operationData->save();
    }

    
    /**
     * 驳回
     * @return bool
     */
    public function reject()
    {
        $this->order_status = self::AFTERSALE_REJECT;
        $this->is_reject = 1;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "驳回";
        $operationData->description = "驳回";
        $operationData->save();
    }

    /**
     * 结算
     * @return bool
     */
    public function finish()
    {
        $this->order_status = self::AFTERSALE_STATUS_FINISH;
        $this->is_finish = 1;
        $this->save();

        $userId = Auth::guard('api')->id();
        $userName = User::find($userId)->real_name;
        $operationData = new AfterSaleOperationRecord;
        $operationData->after_sale_id = $this->id;
        $operationData->user_id = Auth::guard('api')->id();
        $operationData->user_name = $userName;
        $operationData->operation = "结算";
        $operationData->description = "结算";
        $operationData->save();
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

    public function afterSaleDefPros()
    {
        return $this->hasMany(AfterSaleDefPro::class, 'after_sale_id');
    }

    public function afterSaleRefunds()
    {
        return $this->hasMany(AfterSaleRefund::class, 'after_sale_id');
    }

    public function afterSaleReturns()
    {
        return $this->hasMany(AfterSaleReturn::class, 'after_sale_id');
    }

    public function afterSalePatchs()
    {
        return $this->hasMany(AfterSalePatch::class, 'after_sale_id');
    }

    public function afterSaleOperationRecord()
    {
        return $this->hasMany(AfterSaleOperationRecord::class, 'after_sale_id');
    }
}
