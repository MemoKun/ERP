<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProMapTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pro_map', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('order_id')->default('')->comment('商品编码');
			$table->string('specification_id')->default('')->comment('规格编码');
			$table->string('order_name')->default('')->comment('商品简称');
			$table->string('specification_name')->default('')->comment('规格名称');
			$table->string('map_order_id')->default('')->comment('映射商品编码');
			$table->string('map_specification_id')->default('')->comment('映射规格编码');
			$table->string('map_order_name')->default('')->comment('映射商品简称');
			$table->string('map_specification_name')->default('')->comment('映射规格名称');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
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
		Schema::drop('pro_map');
	}

}
