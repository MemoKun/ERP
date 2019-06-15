<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePaymentDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('payment_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('orders_id')->unsigned()->default(0)->comment('订单id');
			$table->integer('change_orders_id')->default(0)->comment('变更订单id');
			$table->integer('payment_methods_id')->unsigned()->comment('支付方式');
			$table->decimal('payment', 10)->default(0.00)->comment('支付金额');
			$table->string('taobao_tid')->default('')->comment('交易号（获取淘宝的交易编号）');
			$table->string('taobao_oid')->default('')->comment('子订单编号（获取淘宝的子订订单号）');
			$table->dateTime('pay_time')->nullable()->comment('付款时间');
			$table->string('remark')->default('')->comment('备注');
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
		Schema::drop('payment_details');
	}

}
