<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSupplieOrderItemsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_order_items', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('re_supplie_orders_id')->unsigned()->default(0)->comment('补件单id');
			$table->integer('products_id')->unsigned()->comment('产品id');
			$table->integer('product_components_id')->unsigned()->default(0)->comment('子件id');
			$table->integer('quantity')->default(0)->comment('数量');
			$table->decimal('actual_price')->default(0.00)->comment('实际售价');
			$table->string('remark')->comment('备注');
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
		Schema::drop('re_supplie_order_items');
	}

}
