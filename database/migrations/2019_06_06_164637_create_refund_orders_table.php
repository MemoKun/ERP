<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRefundOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('refund_orders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('refund_sn')->comment('退款单号');
			$table->string('order_sn')->comment('系统单号');
			$table->integer('refund_order_status')->unsigned()->comment('订单状态');
			$table->string('order_source')->comment('订单来源');
			$table->decimal('order_price', 10)->nullable()->comment('淘宝售价');
			$table->string('order_time', 225)->default('')->comment('拍单时间');
			$table->dateTime('time_out_at')->nullable()->comment('超时时间');
			$table->integer('shops_id')->unsigned()->comment('店铺id');
			$table->string('refund_account')->default('')->comment('还款账号');
			$table->integer('refund_payment_methods_id')->unsigned()->comment('还款支付方式id(支付方式id)');
			$table->string('bank')->default('')->comment('开户银行');
			$table->string('bank_address')->default('')->comment('开户地址');
			$table->decimal('refund_amount', 10)->default(0.00)->comment('退款金额');
			$table->string('transaction_sn')->default('')->comment('交易单号');
			$table->string('paipai_sn')->default('')->comment('拍拍单号');
			$table->integer('refund_reason_type_id')->unsigned()->comment('退款原因id');
			$table->string('buyer_nick')->default('')->comment('买家昵称');
			$table->string('buyer_name')->default('')->comment('买家名称');
			$table->decimal('payment_amount', 10)->default(0.00)->comment('支付金额');
			$table->string('person_liable')->default('')->comment('责任人');
			$table->decimal('liable_fee', 10)->default(0.00)->comment('责任金额');
			$table->boolean('is_delivered')->default(0)->comment('是否发货');
			$table->decimal('freight', 10)->default(0.00)->comment('运费');
			$table->string('responsible_party')->default('')->comment('责任方');
			$table->string('responsible_person')->default('')->comment('责任人');
			$table->decimal('responsible_amount', 10)->default(0.00)->comment('责任金额');
			$table->string('business_remark')->default('')->comment('业务备注');
			$table->string('as_remark')->default('')->comment('售后备注');
			$table->string('f_remark')->default('')->comment('财务备注');
			$table->string('refund_description')->default('')->comment('退款说明');
			$table->string('taobao_refund_status')->default('')->comment('淘宝退款状态');
			$table->integer('creator_id')->unsigned()->default(0)->comment('创建人id');
			$table->integer('business_personnel_id')->unsigned()->default(0)->comment('业务员id (解锁后这里要清除)');
			$table->dateTime('cs_audit_at')->nullable()->comment('客服审核时间');
			$table->integer('locker_id')->unsigned()->default(0)->comment('锁定人id (解锁后这里要清除)');
			$table->integer('after_sales_id')->unsigned()->default(0)->comment('售后审核人');
			$table->dateTime('as_audit_at')->nullable()->comment('售后审核时间');
			$table->integer('financial_id')->unsigned()->default(0)->comment('财务审核人');
			$table->dateTime('f_audit_at')->nullable()->comment('财务审核时间');
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
		Schema::drop('refund_orders');
	}

}
