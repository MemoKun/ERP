<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNegativeInvConfTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('negative_inv_conf', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('negative_inv')->comment('负库存上限');
			$table->string('user')->comment('所属账号');
			$table->string('creator')->comment('创建人');
			$table->boolean('status')->default(1);
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
		Schema::drop('negative_inv_conf');
	}

}
