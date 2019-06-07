<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSuppliePurchaseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_purchase', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('re_supplie_orders_id')->unsigned()->default(0)->comment('补件单id');
			$table->integer('products_id')->unsigned()->comment('产品id');
			$table->integer('product_components_id')->unsigned()->default(0)->comment('子件id');
			$table->integer('purchase_quantity')->unsigned()->comment('采购数');
			$table->integer('stock_in_count')->unsigned()->default(0)->comment('已入库数');
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
		Schema::drop('re_supplie_purchase');
	}

}
