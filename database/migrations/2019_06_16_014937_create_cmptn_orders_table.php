<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCmptnOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cmptn_orders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('system_order_no')->nullable()->default('')->comment('系统单号');
			$table->string('order_number')->nullable()->default('')->comment('订单编号');
			$table->string('order_source')->nullable()->default('')->comment('订单来源');
			$table->integer('cmptn_status')->nullable()->comment('订单状态');
			$table->integer('cmptn_shop')->unsigned()->nullable()->default(1)->comment('发生赔偿的商店');
			$table->string('cmptn_direction')->nullable()->default('')->comment('赔偿方向');
			$table->string('responsible_party')->nullable()->default('')->comment('责任方');
			$table->string('responsible_person')->nullable()->default('')->comment('责任人');
			$table->string('customer_nickname')->nullable()->default('')->comment('买家昵称');
			$table->string('customer_name')->nullable()->default('')->comment('买家姓名');
			$table->string('customer_phone')->nullable()->default('')->comment('客户电话');
			$table->string('customer_city')->nullable()->default('')->comment('客户城市');
			$table->string('customer_address')->nullable()->default('')->comment('客户地址');
			$table->decimal('cmptn_fee', 10)->nullable()->comment('赔偿金额');
			$table->integer('fee_type_id')->nullable()->comment('费用类型');
			$table->string('logistics_company')->nullable()->default('')->comment('发货物流');
			$table->string('logistics_tracking_number')->nullable()->default('')->comment('物流单号');
			$table->string('payment_method')->nullable()->default('')->comment('结账方式');
			$table->integer('order_stuff')->unsigned()->nullable()->comment('业务员');
			$table->string('payee')->nullable()->default('')->comment('收款人');
			$table->string('payee_account')->nullable()->default('')->comment('收款账号');
			$table->string('problem_goods')->nullable()->default('')->comment('问题商品');
			$table->string('problem_description')->nullable()->default('')->comment('问题描述');
			$table->string('note')->nullable()->default('')->comment('备注');
			$table->string('refuse_reason')->nullable()->default('')->comment('驳回原因');
			$table->dateTime('negotiation_date')->nullable()->comment('协商日期');
			$table->timestamps();
			$table->dateTime('submited_at')->nullable()->comment('提交时间');
			$table->dateTime('audited_at')->nullable()->comment('审核时间');
			$table->boolean('status')->comment('状态');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('cmptn_orders');
	}

}
