<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStockInDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('stock_in_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('stock_ins_id')->unsigned()->default(0)->comment('入库单id');
			$table->integer('purchase_details_id')->unsigned()->default(0)->comment('采购详情id');
			$table->integer('product_components_id')->unsigned()->comment('子件id');
			$table->decimal('total_fee', 10)->comment('总额');
			$table->integer('stock_in_quantity');
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
		Schema::drop('stock_in_details');
	}

}
