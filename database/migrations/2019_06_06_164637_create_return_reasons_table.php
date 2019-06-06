<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReturnReasonsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('return_reasons', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->comment('退货原因名称');
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
		Schema::drop('return_reasons');
	}

}
