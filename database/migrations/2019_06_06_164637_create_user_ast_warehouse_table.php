<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserAstWarehouseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_ast_warehouse', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('user')->comment('用户账号');
			$table->string('warehouse')->comment('仓库');
			$table->boolean('status')->default(0)->comment('状态');
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
		Schema::drop('user_ast_warehouse');
	}

}
