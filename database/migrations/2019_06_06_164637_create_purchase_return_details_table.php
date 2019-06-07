<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePurchaseReturnDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_return_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('purchase_returns_id')->unsigned()->comment('采购退货id');
			$table->integer('stocks_id')->unsigned()->comment('库存id');
			$table->integer('purchase_return_quantity')->comment('采购退货数');
			$table->integer('suppliers_id')->unsigned()->comment('供应商id');
			$table->decimal('price_differences', 10)->comment('差价');
			$table->integer('purchase_return_types_id')->unsigned()->comment('采购退货类型id');
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
		Schema::drop('purchase_return_details');
	}

}
