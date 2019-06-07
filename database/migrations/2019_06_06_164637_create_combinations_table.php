<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCombinationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('combinations', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('pid')->unsigned()->comment('产品id');
			$table->string('name')->comment('组合名称');
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
		Schema::drop('combinations');
	}

}
