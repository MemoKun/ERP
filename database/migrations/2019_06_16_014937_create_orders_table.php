<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('orders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('system_order_no')->comment('系统单号');
			$table->integer('order_status')->unsigned()->comment('订单状态');
			$table->string('order_source')->comment('订单来源');
			$table->decimal('order_amount', 10)->default(0.00)->comment('订单金额');
			$table->integer('shops_id')->unsigned()->comment('店铺id');
			$table->string('shop_name')->default('')->comment('店铺名称');
			$table->integer('logistics_id')->unsigned()->comment('物流id');
			$table->string('logistics_sn')->default('')->comment('物流单号');
			$table->string('billing_way')->comment('计费方式(按重量计算：weight ，按体积计算 volume)');
			$table->date('promise_ship_time')->nullable()->comment('承诺发货时间（订单生成）');
			$table->integer('freight_types_id')->unsigned()->comment('运费类型id');
			$table->decimal('expected_freight', 10)->default(0.00)->comment('预计运费');
			$table->decimal('actual_freight', 10)->default(0.00)->comment('实际运费');
			$table->string('logistics_remark')->default('')->comment('物流备注');
			$table->boolean('is_logistics_checked')->default(0)->comment('物流是否结算');
			$table->string('logistics_check_remark')->default('')->comment('物流结算备注');
			$table->dateTime('logistics_checked_at')->nullable()->comment('物流结算时间');
			$table->integer('distributions_id')->unsigned()->default(0)->comment('配送id');
			$table->integer('distribution_methods_id')->unsigned()->comment('配送方式id');
			$table->decimal('deliver_goods_fee', 10)->default(0.00)->comment('送货费用');
			$table->decimal('move_upstairs_fee', 10)->default(0.00)->comment('搬楼费用');
			$table->decimal('installation_fee', 10)->default(0.00)->comment('安装费');
			$table->decimal('total_distribution_fee', 10)->default(0.00)->comment('配送总计(送货费用 + 搬楼费用 + 安装费)');
			$table->string('distribution_phone')->default('')->comment('配送电话');
			$table->string('distribution_no')->default('')->comment('配送单号');
			$table->integer('distribution_types_id')->unsigned()->comment('配送类型id');
			$table->boolean('is_distribution_checked')->default(0)->comment('配送费用是否结算');
			$table->string('distribution_check_remark')->default('')->comment('配送结算备注');
			$table->dateTime('distribution_checked_at')->nullable()->comment('配送结算时间');
			$table->decimal('service_car_fee', 10)->default(0.00)->comment('服务车金额（家装服务）');
			$table->string('service_car_info')->default('')->comment('服务车信息（配送信息）');
			$table->decimal('take_delivery_goods_fee', 10)->default(0.00)->comment('提货费用');
			$table->integer('take_delivery_goods_ways_id')->unsigned()->default(0)->comment('提货方式');
			$table->decimal('express_fee', 10)->default(0.00)->comment('快递费用');
			$table->string('cancel_after_verification_code')->default('')->comment('核销码');
			$table->decimal('wooden_frame_costs', 10)->default(0.00)->comment('木架费');
			$table->decimal('preferential_cashback', 10)->default(0.00)->comment('优惠返现');
			$table->decimal('favorable_cashback', 10)->default(0.00)->comment('好评返现');
			$table->integer('customer_types_id')->unsigned()->default(0)->comment('客户类型');
			$table->boolean('is_invoice')->default(0)->comment('是否要发票');
			$table->decimal('invoice_express_fee', 10)->default(0.00)->comment('发票快递费');
			$table->string('express_invoice_title')->default('')->comment('快递发票抬头');
			$table->string('contract_no')->default('')->comment('合同单号');
			$table->integer('payment_methods_id')->unsigned()->comment('付款方式');
			$table->decimal('deposit', 10)->default(0.00)->comment('订金');
			$table->string('document_title')->comment('单据头');
			$table->integer('warehouses_id')->unsigned()->comment('发货仓库id');
			$table->date('payment_date')->nullable()->comment('支付日期');
			$table->decimal('interest_concessions')->default(0.00)->comment('让利');
			$table->boolean('is_notice')->default(0)->comment('等通知发货 0 否 1 是');
			$table->boolean('is_cancel_after_verification')->default(0)->comment('是否核销 0 否 1 是');
			$table->string('accept_order_user')->default('')->comment('接单用户');
			$table->string('tax_number')->default('')->comment('税号');
			$table->string('receipt')->default('')->comment('收据');
			$table->string('buyer_message')->default('')->comment('买家备注');
			$table->string('seller_remark')->default('')->comment('卖家备注');
			$table->string('customer_service_remark')->default('')->comment('客服备注');
			$table->string('stockout_remark')->nullable()->comment('发货备注');
			$table->bigInteger('taobao_oid')->unsigned()->default(0)->comment('淘宝单号');
			$table->bigInteger('taobao_tid')->unsigned()->default(0)->comment('交易号（获取淘宝的交易编号）');
			$table->string('member_nick')->comment('会员昵称（对应淘宝买家昵称一类）');
			$table->string('seller_name')->default('')->comment('卖家昵称');
			$table->boolean('seller_flag')->default(0)->comment('卖家备注旗帜（与淘宝网上订单的卖家备注旗帜对应，只有卖家才能查看该字段）红、黄、绿、蓝、紫 分别对应 1、2、3、4、5');
			$table->dateTime('created')->nullable()->comment('(下单时间)交易创建时间');
			$table->dateTime('est_con_time')->nullable()->comment('(商家的预计发货时间)');
			$table->string('receiver_name')->default('')->comment('收货人');
			$table->string('receiver_phone')->default('')->comment('收货人固定电话');
			$table->string('receiver_mobile')->default('')->comment('收货人手机');
			$table->string('receiver_state')->default('')->comment('收货人的所在省份');
			$table->string('receiver_city')->default('')->comment('收货人的所在城市');
			$table->string('receiver_district')->default('')->comment('收货人的所在地区');
			$table->string('receiver_address')->default('')->comment('收货人的详细地址');
			$table->string('receiver_zip')->default('')->comment('收货邮编');
			$table->string('refund_info')->default('无退款')->comment('退款信息');
			$table->boolean('is_goods_checked')->default(0)->comment('货款是否结算');
			$table->string('goods_check_remark')->default('')->comment('发货备注');
			$table->dateTime('goods_checked_at')->nullable()->comment('货款结算时间');
			$table->integer('business_personnel_id')->unsigned()->default(0)->comment('业务员id (解锁后这里要清除)');
			$table->integer('locker_id')->unsigned()->default(0)->comment('锁定人id (解锁后这里要清除)');
			$table->dateTime('locked_at')->nullable()->comment('锁定时间');
			$table->integer('auditor_id')->default(0)->comment('审计员');
			$table->dateTime('audit_at')->nullable()->comment('审计时间');
			$table->string('cs_auditor_id')->default('')->comment('客审人');
			$table->dateTime('cs_audited_at')->nullable()->comment('客审时间');
			$table->integer('fd_auditor_id')->default(0)->comment('财审人');
			$table->dateTime('fd_audited_at')->nullable()->comment('财审时间');
			$table->integer('ca_auditor_id')->default(0)->comment('货审人id');
			$table->dateTime('ca_audited_at')->nullable()->comment('货审时间');
			$table->integer('stockout_op_id')->default(0)->comment('发货人id');
			$table->dateTime('stockout_at')->nullable()->comment('发货时间');
			$table->string('association_taobao_oid')->default('')->comment('单号关联');
			$table->boolean('is_merge')->default(0)->comment('是否合并');
			$table->boolean('is_split')->default(0)->comment('是否拆分');
			$table->boolean('is_association')->default(0)->comment('是否关联订单');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('orders');
	}

}
