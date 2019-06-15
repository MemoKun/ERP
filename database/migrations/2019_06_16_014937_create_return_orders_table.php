<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReturnOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('return_orders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('return_sn')->comment('退货单号');
			$table->integer('orders_id')->unsigned()->comment('订单id');
			$table->integer('return_order_status')->unsigned()->comment('订单状态');
			$table->integer('shops_id')->unsigned()->comment('店铺id');
			$table->string('member_nick')->default('')->comment('会员昵称');
			$table->string('customer_name')->default('')->comment('客户姓名');
			$table->string('customer_phone')->default('')->comment('客户电话');
			$table->integer('customer_service_id')->unsigned()->comment('客服id');
			$table->decimal('deposit')->default(0.00)->comment('押金');
			$table->integer('return_reasons_id')->unsigned()->comment('退货原因id');
			$table->string('customer_address')->default('')->comment('客户地址');
			$table->boolean('is_scour')->default(0)->comment('是否冲款');
			$table->date('expected_arrival_time')->nullable()->comment('预计到货时间');
			$table->string('payee')->default('')->comment('收款人');
			$table->string('refund_account')->default('')->comment('退款账号');
			$table->integer('refund_payment_methods_id')->unsigned()->comment('退款支付方式id(支付方式id)');
			$table->decimal('refund_amount', 10)->default(0.00)->comment('退款金额');
			$table->integer('logistics_id')->unsigned()->default(0)->comment('物流id');
			$table->integer('freight_types_id')->unsigned()->default(0)->comment('运费类型id');
			$table->decimal('freight')->default(0.00)->comment('运费');
			$table->string('logistics_sn')->default('')->comment('物流单号');
			$table->string('take_delivery_goods_address')->default('')->comment('提货地址');
			$table->string('logistics_remark')->default('')->comment('物流备注');
			$table->string('follow_up')->default('')->comment('跟进记录');
			$table->integer('distributions_id')->unsigned()->default(0)->comment('配送公司');
			$table->decimal('pulling_cost', 10)->default(0.00)->comment('拉货费用');
			$table->integer('person_liable_id')->unsigned()->default(0)->comment('责任人(用户id)');
			$table->decimal('liable_fee', 10)->default(0.00)->comment('责任金额');
			$table->string('as_remark')->default('')->comment('售后备注');
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
		Schema::drop('return_orders');
	}

}
