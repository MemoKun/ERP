<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserAstSupplierTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user_ast_supplier', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('user')->comment('用户');
			$table->string('supplier')->comment('供应商');
			$table->boolean('status')->default(1)->comment('状态');
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
		Schema::drop('user_ast_supplier');
	}

}
