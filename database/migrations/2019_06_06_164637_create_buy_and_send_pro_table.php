<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBuyAndSendProTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('buy_and_send_pro', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title')->default('')->comment('标题');
			$table->string('commodity_code')->default('')->comment('商品编码');
			$table->string('spec_code')->default('')->comment('规格编码');
			$table->string('short_name')->default('')->comment('商品简称');
			$table->string('spec_name')->default('')->comment('规格名称');
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
		Schema::drop('buy_and_send_pro');
	}

}
