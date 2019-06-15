<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCancelPurchaseDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cancel_purchase_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('cancel_purchases_id')->unsigned()->comment('取消采购id');
			$table->integer('purchase_details_id')->unsigned()->comment('采购详细id');
			$table->integer('cancel_purchase_quantity')->comment('取消采购数');
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
		Schema::drop('cancel_purchase_details');
	}

}
