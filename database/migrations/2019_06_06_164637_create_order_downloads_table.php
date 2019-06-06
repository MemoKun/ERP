<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderDownloadsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('order_downloads', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('shops_id')->unsigned()->comment('店铺id');
			$table->bigInteger('tid')->unsigned()->comment('交易编号 (父订单的交易编号)');
			$table->bigInteger('num_iid')->unsigned()->comment('商品数字id');
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
		Schema::drop('order_downloads');
	}

}
