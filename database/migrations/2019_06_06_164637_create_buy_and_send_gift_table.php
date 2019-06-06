<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBuyAndSendGiftTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('buy_and_send_gift', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('buy_and_send_pro_id')->unsigned()->comment('买就送商品id');
			$table->string('commodity_code')->default('')->comment('商品编码');
			$table->string('spec_code')->default('')->comment('规格编码');
			$table->string('short_name')->default('')->comment('商品简称');
			$table->string('spec_name')->default('')->comment('规格名称');
			$table->integer('quantity')->comment('数量');
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
		Schema::drop('buy_and_send_gift');
	}

}
