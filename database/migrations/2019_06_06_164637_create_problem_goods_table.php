<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProblemGoodsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('problem_goods', function(Blueprint $table)
		{
			$table->integer('id')->primary();
			$table->integer('order_number')->nullable();
			$table->string('problem_goods')->nullable();
			$table->string('order_source')->nullable();
			$table->integer('shop_id')->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('problem_goods');
	}

}
