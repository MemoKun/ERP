<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Illuminate\Support\Facades\Auth;

class Order extends Model
{
    protected $table = 'orders';

    const ORDER_STATUS_UNAUDIT = 5;
    const ORDER_STATUS_NEW = 10;
    const ORDER_STATUS_LOCK = 20;
    const ORDER_STATUS_CS_AUDIT = 30;
    const ORDER_STATUS_ONE_AUDIT = 40;
    const ORDER_STATUS_FD_AUDIT = 50;
    const ORDER_STATUS_CARGO_AUDIT = 60;
    const ORDER_STATUS_READY_STOCK_OUT = 70;
    const ORDER_STATUS_STOCK_OUT = 80; //已发货
    const ORDER_STATUS_BRUSH_ORDER = 110;

    //退回
    const ORDER_RETURN_LOCK = 21;
    const ORDER_RETURN_CS_AUDIT = 31;
    const ORDER_RETURN_ONE_AUDIT = 41;
    const ORDER_RETURN_FD_TO_ONE_AUDIT = 51; //财务驳回跟单一审
    const ORDER_RETURN_FD_AUDIT = 52; //退回财审
    const ORDER_RETURN_CARGO_AUDIT = 61;
    const ORDER_RETURN_STOCK_OUT_AUDIT = 81; //发货退审
    const ORDER_RETURN_STOCK_OUT_TO_CS = 82; //打印退回客审

    //订单来源
    const ORDER_SOURCE_SYSTEM = 'system';
    const ORDER_SOURCE_TAOBAO = 'taobao';

    //计费方式
    const ORDER_BILLING_WAY_WEIGHT = 'weight';
    const ORDER_BILLING_WAY_VOLUME = 'volume';

    //订单状态
    public static $orderStatusMap = [
        self::ORDER_STATUS_UNAUDIT => '待审计',
        self::ORDER_STATUS_NEW => '未处理',
        self::ORDER_STATUS_LOCK => '订单锁定',
        self::ORDER_STATUS_CS_AUDIT => '已客审',
        self::ORDER_STATUS_ONE_AUDIT => '已跟单一审',
        self::ORDER_STATUS_FD_AUDIT => '已财审',
        self::ORDER_STATUS_CARGO_AUDIT => '已货审',
        self::ORDER_STATUS_READY_STOCK_OUT=> '准备出库',
        self::ORDER_STATUS_STOCK_OUT => '已出库'
    ];

    //订单操作
    public static $orderOperationMap = [
        self::ORDER_STATUS_UNAUDIT => '待审计',
        self::ORDER_STATUS_NEW => '创建',
        self::ORDER_STATUS_LOCK => '锁定',
        self::ORDER_STATUS_CS_AUDIT => '客审',
        self::ORDER_STATUS_ONE_AUDIT => '跟单一审',
        self::ORDER_STATUS_FD_AUDIT => '财审',
        self::ORDER_STATUS_CARGO_AUDIT => '货审',
        self::ORDER_STATUS_READY_STOCK_OUT => '可以发货',
        self::ORDER_STATUS_STOCK_OUT => '发货',

        self::ORDER_RETURN_LOCK => '解锁',
        self::ORDER_RETURN_CS_AUDIT => '退回客审',
        self::ORDER_RETURN_ONE_AUDIT => '退回跟单一审',
        self::ORDER_RETURN_FD_TO_ONE_AUDIT => '驳回跟单一审',
        self::ORDER_RETURN_FD_AUDIT => '退回财审',
        self::ORDER_RETURN_CARGO_AUDIT => '退回货审',
        self::ORDER_RETURN_STOCK_OUT_AUDIT => '发货退审',
        self::ORDER_RETURN_STOCK_OUT_TO_CS => '打印退回客审',
    ];

    //订单操作详情
    public static $orderOperationDescriptionMap = [
        self::ORDER_STATUS_UNAUDIT => '已下载待审计',
        self::ORDER_STATUS_NEW => '创建订单',
        self::ORDER_STATUS_LOCK => '锁定订单',
        self::ORDER_STATUS_CS_AUDIT => '客服审核',
        self::ORDER_STATUS_ONE_AUDIT => '跟单一次审核',
        self::ORDER_STATUS_FD_AUDIT => '财务审核',
        self::ORDER_STATUS_CARGO_AUDIT => '货物审核',
        self::ORDER_STATUS_READY_STOCK_OUT => '打印发货单',
        self::ORDER_STATUS_STOCK_OUT => '通知发货',

        self::ORDER_RETURN_LOCK => '解锁订单',
        self::ORDER_RETURN_CS_AUDIT => '客服退回客审',
        self::ORDER_RETURN_ONE_AUDIT => '跟单退回跟单一审',
        self::ORDER_RETURN_FD_TO_ONE_AUDIT => '财务驳回跟单一审',
        self::ORDER_RETURN_FD_AUDIT => '财务退回财审',
        self::ORDER_RETURN_CARGO_AUDIT => '退回货审',
        self::ORDER_RETURN_STOCK_OUT_AUDIT => '发货退审',
        self::ORDER_RETURN_STOCK_OUT_TO_CS => '出货打印退回客审',
    ];

    //建单类型
    public static $orderSourceMap = [
        self::ORDER_SOURCE_SYSTEM => '系统建单',
        self::ORDER_SOURCE_TAOBAO => '淘宝商城',
    ];

    //计费方式
    public static $orderBillingWayMap = [
        self::ORDER_BILLING_WAY_WEIGHT => '按重量计算',
        self::ORDER_BILLING_WAY_VOLUME => '按体积计算',
    ];

    protected $fillable = [
        'system_order_no',
        'order_status',
        'order_source',
        'order_amount',
        'shops_id',
        'shop_name',
        'logistics_id',
        'logistics_sn', 
        'billing_way', 
        'promise_ship_time',
        'freight_types_id', 
        'expected_freight', 
        'actual_freight',
        'logistics_remark',
        'is_logistics_checked',
        'logistics_check_remark',
        'logistics_checked_at',
        'distributions_id',
        'distribution_methods_id',
        'deliver_goods_fee',
        'move_upstairs_fee',
        'installation_fee',
        'total_distribution_fee',
        'distribution_phone',
        'distribution_no',
        'distribution_types_id',
        'is_distribution_checked',
        'distribution_check_remark',
        'distribution_checked_at',
        'service_car_fee',
        'service_car_info',
        'take_delivery_goods_fee',
        'take_delivery_goods_ways_id',
        'express_fee',
        'cancel_after_verification_code',
        'wooden_frame_costs',
        'preferential_cashback',
        'favorable_cashback',
        'customer_types_id',
        'is_invoice',
        'invoice_express_fee',
        'express_invoice_title',
        'contract_no',
        'payment_methods_id',
        'deposit',
        'document_title',
        'warehouses_id',
        'payment_date',
        'interest_concessions',
        'is_notice',
        'is_cancel_after_verification',
        'accept_order_user',
        'tax_number',
        'receipt',
        'buyer_message',
        'seller_remark',
        'customer_service_remark',
        'stockout_remark', 
        'taobao_oid',
        'taobao_tid',
        'member_nick',
        'seller_name',
        'seller_flag',
        'created',
        'est_con_time',
        'receiver_name',
        'receiver_phone',
        'receiver_mobile',
        'receiver_state',
        'receiver_city',
        'receiver_district',
        'receiver_address',
        'receiver_zip',
        'refund_info',
        'business_personnel_id',
        'locker_id',
        'locked_at', 
        'auditor_id', 
        'audit_at',
        'cs_auditor_id',
        'cs_audited_at',
        'fd_auditor_id',
        'fd_audited_at',
        'ca_auditor_id', 
        'ca_audited_at', 
        'stockout_op_id', 
        'stockout_at',
        'association_taobao_oid',
        'is_merge',
        'is_split',
        'is_association',
        'status',
        'created_at',
        'updated_at',

    ];

    protected $dates = [
        'created',
        'audit_at',
        'est_con_time',
        'payment_date',
        'promise_ship_time',
        'distribution_checked_at',
        'logistics_checked_at',
        'stockout_at',
        'cs_audited_at',
        'fd_audited_at',
        'ca_audited_at',

    ];

    //设置类型
    protected $casts = [
        'is_invoice' => 'boolean',
        'is_notice' => 'boolean',
        'is_cancel_after_verification' => 'boolean',
        'is_merge' => 'boolean',
        'is_split' => 'boolean',
        'is_association' => 'boolean',
        'business_personnel_id' => 'integer',
        'locker_id' => 'integer',
    ];

    //观察者
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function ($model) {
            // 如果模型的 no 字段为空
            if (!$model->system_order_no) {
                // 调用 findAvailableNo 生成订单流水号
                $model->system_order_no = static::findAvailableNo('DD', 'system_order_no');
                // 如果生成失败，则终止创建订单
                if (!$model->system_order_no) {
                    return false;
                }
            }

            // 如果模型的 order_source 字段为空
            if (!$model->order_source) {
                $model->order_source = self::ORDER_SOURCE_SYSTEM;
                // 如果生成失败，则终止创建订单
                if (!$model->order_source) {
                    return false;
                }
            }

            // 如果模型的 order_status 字段为空
            if (!$model->order_status) {
                $model->order_status = self::ORDER_STATUS_NEW;
                // 如果生成失败，则终止创建订单
                if (!$model->order_status) {
                    return false;
                }
            }

            // 如果模型的 user_id 字段为空
            if (!$model->business_personnel_id) {
                $model->business_personnel_id = Auth::guard('api')->id();
                // 如果生成失败，则终止创建订单
                if (!$model->business_personnel_id) {
                    return false;
                }
            }
        });
    }

    public function getOrderStatusAttribute($value)
    {
        return self::$orderStatusMap[$value] ?? $value;
    }

    /**
     * 生成订单流水号.
     *
     * @param $prefix       订单流水号前缀
     * @param $index        字段名
     *
     * @return string
     */
    public static function findAvailableNo(String $prefix, String $index): String
    {
        do {
            // 随机生成订单号
            $no = $prefix.date('YmdHis').str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
        } while (static::query()->where($index, $no)->exists());

        return $no;
    }

    /**
     * 订单未锁定.
     *
     * @return bool
     */
    public function unlock()
    {
        return ($this->getOriginal('order_status') != self::ORDER_STATUS_LOCK);
    }

    public function unReadyStockOut()
    {
        return ($this->getOriginal('order_status') != self::ORDER_STATUS_READY_STOCK_OUT);
    }
    
    /**
     * 订单锁定或释放.
     *
     * @return bool
     */
    public function lockOrUnlock()
    {
        if ($this->unlock()) {
            $this->locker_id = Auth::guard('api')->id();
            $this->locked_at = date('Y-m-d h:i:s');
            $this->order_status = self::ORDER_STATUS_LOCK;
        } else {
            $this->locker_id = 0;
            $this->order_status = self::ORDER_STATUS_NEW;
            $this->locked_at = null;
        }

        $this->save();
    }

    /**
     * 客审
     *
     * @return bool
     */
    public function audit()
    {
        $this->cs_auditor_id = Auth::guard('api')->id();
        $this->order_status = self::ORDER_STATUS_CS_AUDIT;
        $this->cs_audited_at = date('Y-m-d h:i:s');
        $this->save();
    }

    /**
     * 打印发货单.
     *
     * @return bool
     */
    public function printDispatchBill()
    {
        $this->order_status = self::ORDER_STATUS_READY_STOCK_OUT;
        $this->save();
    }

    /**
     * 退审
     *
     * @return bool
     */
    public function unAudit()
    {
        $this->cs_auditor_id = 0;
        $this->order_status = self::ORDER_STATUS_NEW;
        $this->cs_audited_at = "2000-01-01 00:00:01";
        $this->save();
    }

    /**
     * 跟单一审
     *
     * @return bool
     */
    public function oneAudit()
    {
        $this->order_status = self::ORDER_STATUS_ONE_AUDIT;
        $this->save();
    }

    /**
     * 退回跟单一审
     *
     * @return bool
     */
    public function unOneAudit()
    {
        $this->order_status = self::ORDER_STATUS_CS_AUDIT;
        $this->save();
    }

    /**
     * 财审
     *
     * @return bool
     */
    public function financialAudit()
    {
        $this->order_status = self::ORDER_STATUS_FD_AUDIT;
        $this->save();
    }

    /**
     * 退回财审
     *
     * @return bool
     */
    public function unFinancialAudit()
    {
        $this->order_status = self::ORDER_STATUS_ONE_AUDIT;
        $this->save();
    }

    /**
     * 跟单货审
     *
     * @return bool
     */
    public function cargoAudit()
    {
        $this->order_status = self::ORDER_STATUS_CARGO_AUDIT;
        $this->save();
    }

    /**
     * 仓储退回客审
     *
     * @return bool
     */
    public function stockOutToCS()
    {
        $this->order_status = self::ORDER_STATUS_NEW;
        $this->save();
    }

    /**
     * 仓储发货退审
     *
     * @return bool
     */
    public function stockOutUnAudit()
    {
        $this->order_status = self::ORDER_STATUS_CARGO_AUDIT;
        $this->save();
    }

    /**
     *运费结算
     *
     * @return bool
     */
    public function logCheck()
    {
        $this->is_logistics_checked = 1;
        $this->logistics_checked_at = date('Y-m-d h:i:s');
        $this->save();
    }

    /**
     *运费结算退审
     *
     * @return bool
     */
    public function logUncheck()
    {
        $this->is_logistics_checked = 0;
        $this->logistics_checked_at =null;
        $this->save();
    }

    /**
     *货款结算
     *
     * @return bool
     */
    public function goodsCheck()
    {
        $this->is_goods_checked = 1;
        $this->goods_checked_at = date('Y-m-d h:i:s');
        $this->save();
    }

    /**
     *货款结算退审
     *
     * @return bool
     */
    public function goodsUncheck()
    {
        $this->is_goods_checked = 0;
        $this->goods_checked_at = null;
        $this->save();
    }

    /**
     *配送结算
     *
     * @return bool
     */
    public function disCheck()
    {
        $this->is_distribution_checked = 1;
        $this->distribution_checked_at = date('Y-m-d h:i:s');
        $this->save();
    }

    /**
     *配送结算退审
     *
     * @return bool
     */
    public function disUncheck()
    {
        $this->is_distribution_checked = 0;
        $this->distribution_checked_at =null;
        $this->save();
    }

    public function notice()
    {
        $this->is_notice = false;
        $this->save();
    }

    /**
     *审计部-审核驳回
     *
     * @return bool
     */
    public function rejectDeptsAudit()
    {
        $this->auditor_id = 0;
        $this->audit_at =null;
        $this->order_status = 5;//填入驳回后的订单状态
        $this->save();
    }

    /**
     *审计部-审核
     *
     * @return bool
     */
    public function auditDeptsAudit()
    {
        $this->auditor_id = Auth::guard('api')->id();
        $this->audit_at = date('Y-m-d h:i:s');
        $this->order_status = 10;//填入审核后的订单状态
        $this->save();
    }

    /**
     * 是否缺货.
     *
     * @return bool
     */
    public function isOOS()
    {
        $warehouseId = $this->warehouses_id;

        //遍历子单商品
        $this->orderItems->map(function ($item) use ($warehouseId) {
            $num = $item->combination->productComponents->map(function ($item) use ($warehouseId) {
                return optional($item->stocks->where('warehouse_id', $warehouseId)->first())->quantity ?? 0;
            })->min();

            if ($num < $item->quantity) {
                throw new UpdateResourceFailedException('缺货、请及时补充');
            }
        });

        return false;
    }

    /**
     * 仓储发货.
     *
     * @return bool
     */
    public function stockOut()
    {
        $this->order_status = self::ORDER_STATUS_STOCK_OUT;

        //获取出库数据
        $order = $this->load('orderItems.combination.productComponents');
        //发货---减少库存---新增出库单
        DB::transaction(function () use ($order) {
            $warehouseId = $order->warehouses_id;
            $orderNo = $order->system_order_no;
            $order->orderItems->map(function ($item) use ($warehouseId, $orderNo) {
                $amount = $item->quantity;
                $item->combination->productComponents->map(function ($item) use ($warehouseId, $amount, $orderNo) {
                    $item->stockOutByWarehouseId($warehouseId, $amount);
                    StockOut::create([
                        'warehouse_id' => $warehouseId,
                        'product_components_id' => $item->id,
                        'stock_out_quantity' => $amount,
                        'remark' => '订单号:'.$orderNo,
                    ]);
                });
            });
        });

        $this->save();
    }

    /**
     * 拆单.
     *
     * @param $data       数据
     *
     * @return bool
     */
    public function splitOrder($data)
    {
        //获取出库数据
        $order = $this->load('orderItems');
        $order["order_status"] = intval($order["order_status"]);

        $orderItemOne = $order->orderItems->map(function ($item) use ($data) {
            $orderItem = collect($data)->where('id', $item->id);
            if ($orderItem->count()) {
                $orderItem = $orderItem->first();
                if ($orderItem['quantity'] > 0 && $item->quantity - $orderItem['quantity'] > 0) {
                    $item->quantity = $item->quantity - $orderItem['quantity'];
                } elseif ($orderItem['quantity'] > 0 && $item->quantity - $orderItem['quantity'] == 0) {
                    $item = null;
                } else {
                    throw new UpdateResourceFailedException('拆分出错');
                }
            }

            return $item;
        })->toArray();

        $orderItemTwo = $order->orderItems->map(function ($item) use ($data) {
            $orderItem = collect($data)->where('id', $item->id);
            if ($orderItem->count()) {
                $item->quantity = $orderItem->first()['quantity'];
            } else {
                $item = null;
            }

            return $item;
        })->toArray();

        DB::transaction(function () use ($orderItemOne, $orderItemTwo) {
            //新建订单
            $newOrderOne = $this->newQuery()->create($this->toArray());
            $newOrderTwo = $this->newQuery()->create($this->toArray());

            //新增子单
            collect($orderItemOne)->map(function ($item) use ($newOrderOne) {
                if (is_null($item)) {
                    return;
                }
                $newOrderOne->orderItems()->create($item);
            });

            collect($orderItemTwo)->map(function ($item) use ($newOrderTwo) {
                if (is_null($item)) {
                    return;
                }
                $newOrderTwo->orderItems()->create($item);
            });

            //删除旧单
            $this->paymentDetails()->delete();
            $this->orderItems()->delete();
            $this->delete();

            //记录拆分操作
        });

        return true;
    }

    /**
     * 仓储部拆单.
     *
     * @param $data       数据
     *
     * @return bool
     */
     public function cargoSplitOrder($data)
     {
         //获取出库数据
         $order = $this->load('orderItems');
         $order["order_status"] = intval($order["order_status"]);
 
         $orderItemOne = $order->orderItems->map(function ($item) use ($data) {
             $orderItem = collect($data)->where('id', $item->id);
             if ($orderItem->count()) {
                 $orderItem = $orderItem->first();
                 if ($orderItem['quantity'] > 0 && $item->quantity - $orderItem['quantity'] > 0) {
                     $item->quantity = $item->quantity - $orderItem['quantity'];
                 } elseif ($orderItem['quantity'] > 0 && $item->quantity - $orderItem['quantity'] == 0) {
                     $item = null;
                 } else {
                     throw new UpdateResourceFailedException('拆分出错');
                 }
             }
             return $item;
         })->toArray();
 
         $orderItemTwo = $order->orderItems->map(function ($item) use ($data) {
             $orderItem = collect($data)->where('id', $item->id);
             if ($orderItem->count()) {
                 $item->quantity = $orderItem->first()['quantity'];
             } else {
                 $item = null;
             }
             return $item;
         })->toArray();
         
         $newOrderOne['order_status']=60;
         $newOrderTwo['order_status']=60;
 
         DB::transaction(function () use ($orderItemOne, $orderItemTwo) {
             //新建订单
             $newOrderOne = $this->newQuery()->create($this->toArray());
             $newOrderTwo = $this->newQuery()->create($this->toArray());

             //新增子单
             collect($orderItemOne)->map(function ($item) use ($newOrderOne) {
                 if (is_null($item)) {
                     return;
                 }
                 $newOrderOne->orderItems()->create($item);
             });
 
             collect($orderItemTwo)->map(function ($item) use ($newOrderTwo) {
                 if (is_null($item)) {
                     return;
                 }
                 $newOrderTwo->orderItems()->create($item);
             });
 
             //删除旧单
             $this->paymentDetails()->delete();
             $this->orderItems()->delete();
             $this->delete();
 
             //记录拆分操作
         });
 
         return true;
     }

    /**
     * 合并订单.
     *
     * @param $data       数据
     *
     * @return bool
     */
    public function mergerOrder($data)
    {
        $orderOneId = $data['order_id_one'];
        $orderTwoId = $data['order_id_two'];

        $orderOne = $this->newQuery()->findOrFail($orderOneId);
        $orderTwo = $this->newQuery()->findOrFail($orderTwoId);

        //判断主订单数据是否匹配
        if (collect($orderOne->toArray())->except(['id', 'system_order_no', 'locked_at','created_at', 'updated_at'])->diffAssoc($orderTwo->toArray())->count()) {
            throw new UpdateResourceFailedException('主订单数据不匹配，无法合并');
        }

        //提取数据
        $order = $orderOne->toArray();
        $order["order_status"] = intval($order["order_status"]);
        $orderItem = $orderOne->orderItems->merge($orderTwo->orderItems)->toArray();

        DB::transaction(function () use ($order, $orderItem, $orderOneId, $orderTwoId) {
            //新建订单
            $newOrder = $this->newQuery()->create($order);

            //新增子单
            collect($orderItem)->map(function ($item) use ($newOrder) {
                $newOrder->orderItems()->create($item);
            });

            //删除旧单
            PaymentDetail::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            OrderItem::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            Order::destroy($orderOneId, $orderTwoId);

            //记录拆分操作
        });
    }

    //转补单
    public function additionOrder($data)
    {
        $orderOneId = $data['order_id_one'];
        $orderTwoId = $data['order_id_two'];

        $orderOne = $this->newQuery()->findOrFail($orderOneId);
        $orderTwo = $this->newQuery()->findOrFail($orderTwoId);

        //提取数据
        $order = $orderOne->toArray();
        $order["order_status"] = intval($order["order_status"]);
        $orderItem = $orderOne->orderItems->merge($orderTwo->orderItems)->toArray();

        DB::transaction(function () use ($order, $orderItem, $orderOneId, $orderTwoId) {
            //新建订单
            $newOrder = $this->newQuery()->create($order);

            //新增子单
            collect($orderItem)->map(function ($item) use ($newOrder) {
                $newOrder->orderItems()->create($item);
            });

            //删除旧单
            PaymentDetail::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            OrderItem::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            Order::destroy($orderOneId, $orderTwoId);
        });
    }

    public function additionMoney($data)
    {
        $orderOneId = $data['order_id_one'];
        $orderTwoId = $data['order_id_two'];

        $orderOne = $this->newQuery()->findOrFail($orderOneId);
        $orderTwo = $this->newQuery()->findOrFail($orderTwoId);

        //提取数据
        $order = $orderOne->toArray();
        $order["order_status"] = intval($order["order_status"]);
        $orderItem = $orderOne->orderItems->merge($orderTwo->orderItems)->toArray();

        DB::transaction(function () use ($order, $orderItem, $orderOneId, $orderTwoId) {
            //新建订单
            $newOrder = $this->newQuery()->create($order);

            //新增子单
            collect($orderItem)->map(function ($item) use ($newOrder) {
                $newOrder->orderItems()->create($item);
            });

            //删除旧单
            PaymentDetail::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            OrderItem::query()->whereIn('orders_id', [$orderOneId, $orderTwoId])->delete();
            Order::destroy($orderOneId, $orderTwoId);
        });
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class, 'shops_id');
    }

    public function logistic()
    {
        return $this->belongsTo(Logistics::class, 'logistics_id');
    }

    public function freightType()
    {
        return $this->belongsTo(FreightType::class, 'freight_types_id');
    }

    public function distribution()
    {
        return $this->belongsTo(Distribution::class, 'distributions_id');
    }

    public function distributionMethod()
    {
        return $this->belongsTo(DistributionMethod::class, 'distribution_methods_id');
    }

    public function distributionType()
    {
        return $this->belongsTo(DistributionType::class, 'distribution_types_id');
    }

    public function takeDeliveryGoodsWay()
    {
        return $this->belongsTo(TakeDeliveryGoodsWay::class, 'take_delivery_goods_ways_id');
    }

    public function customerType()
    {
        return $this->belongsTo(CustomerType::class, 'customer_types_id');
    }

    public function paymentMethod()
    {
        return $this->belongsTo(PaymentMethod::class, 'payment_methods_id');
    }

    public function warehouses()
    {
        return $this->belongsTo(Warehouse::class, 'warehouses_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'orders_id');
    }

    public function businessPersonnel()
    {
        return $this->belongsTo(User::class, 'business_personnel_id');
    }

    public function locker()
    {
        return $this->belongsTo(User::class, 'locker_id');
    }

    public function csAudit()
    {
        return $this->belongsTo(User::class, 'cs_audit_id');
    }

    public function paymentDetails()
    {
        return $this->hasMany(PaymentDetail::class, 'orders_id');
    }

    public function resupplieOrder()
    {
        return $this->hasMany(ResupplieOrder::class, 'orders_id');
    }

    public function orderOperationRecord()
    {
        return $this->hasMany(orderOperationRecord::class, 'orders_id');
    }
}
