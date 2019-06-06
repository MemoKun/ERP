<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePurchaseListsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_lists', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('purchases_id')->unsigned()->comment('采购id');
			$table->integer('combinations_id')->unsigned()->comment('组合id');
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
		Schema::drop('purchase_lists');
	}

}
