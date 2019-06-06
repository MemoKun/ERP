<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDamagedGoodsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('damaged_goods', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('order_no')->default('')->comment('订单号');
			$table->string('good_sn')->default('')->comment('商品编码');
			$table->string('standard_code')->default('')->comment('规格编码');
			$table->integer('quantity')->default(0)->comment('损坏数量');
			$table->decimal('money', 10)->default(0.00)->comment('损坏金额');
			$table->string('remark')->default('')->comment('备注');
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
		Schema::drop('damaged_goods');
	}

}
