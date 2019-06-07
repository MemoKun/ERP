<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReturnOrderItemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('return_order_items', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('return_orders_id')->unsigned()->comment('退货订单id');
			$table->integer('order_items_id')->unsigned()->comment('子订单id');
			$table->integer('suppliers_id')->unsigned()->comment('供应商id');
			$table->boolean('is_damage')->default(0)->comment('是否损坏');
			$table->integer('receipt_types_id')->unsigned()->default(0)->comment('收货类型id');
			$table->decimal('repair_price', 10)->default(0.00)->comment('返修价格');
			$table->date('factory_return_time')->nullable()->comment('退厂时间');
			$table->date('expected_return_time')->nullable()->comment('预计返还时间');
			$table->integer('warehouse_id')->unsigned()->default(0)->comment('收货仓库');
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
		Schema::drop('return_order_items');
	}

}
