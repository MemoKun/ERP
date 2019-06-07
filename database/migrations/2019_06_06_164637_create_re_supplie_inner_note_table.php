<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSupplieInnerNoteTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_inner_note', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('re_supplie_orders_id')->unsigned()->default(0)->comment('补件单id');
			$table->string('theme')->default('')->comment('主题');
			$table->string('user_name')->default('')->comment('用户');
			$table->string('content')->default('')->comment('内容');
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
		Schema::drop('re_supplie_inner_note');
	}

}
