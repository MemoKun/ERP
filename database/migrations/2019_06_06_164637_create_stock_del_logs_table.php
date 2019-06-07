<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStockDelLogsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('stock_del_logs', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('stock_id')->unsigned()->comment('库存id');
			$table->integer('user_id')->unsigned()->comment('用户id');
			$table->string('commodity_code')->comment('商品编码');
			$table->string('specs_code')->comment('规格编码');
			$table->string('warehouse_name')->comment('所属仓库');
			$table->integer('stock_quantity')->comment('库存数');
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
		Schema::drop('stock_del_logs');
	}

}
