<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStockOutsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('stock_outs', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('warehouse_id')->unsigned()->default(0)->comment('仓库id');
			$table->integer('product_components_id')->unsigned()->comment('子件id');
			$table->integer('stock_out_quantity');
			$table->integer('creator')->unsigned()->comment('创建人');
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
		Schema::drop('stock_outs');
	}

}
