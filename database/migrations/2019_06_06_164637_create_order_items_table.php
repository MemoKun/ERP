<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderItemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('order_items', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('orders_id')->unsigned()->default(0)->comment('订单id');
			$table->integer('change_orders_id')->unsigned()->default(0)->comment('变更订单id');
			$table->integer('products_id')->unsigned()->comment('产品id');
			$table->integer('combinations_id')->unsigned()->comment('组合id');
			$table->integer('quantity')->default(0)->comment('数量');
			$table->float('total_volume')->default(0.00)->comment('总体积');
			$table->string('paint')->default('')->comment('油漆');
			$table->boolean('is_printing')->default(0)->comment('是否需要印刷');
			$table->decimal('printing_fee')->default(0.00)->comment('印刷费用');
			$table->boolean('is_spot_goods')->default(0)->comment('是否现货');
			$table->decimal('under_line_univalent')->default(0.00)->comment('线下单价');
			$table->decimal('under_line_total_amount')->default(0.00)->comment('线下金额（数量+单价）');
			$table->decimal('under_line_preferential')->default(0.00)->comment('优惠（线下）');
			$table->decimal('under_line_payment')->default(0.00)->comment('实际支付金额（线下）（线下金额 - 优惠）');
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
		Schema::drop('order_items');
	}

}
