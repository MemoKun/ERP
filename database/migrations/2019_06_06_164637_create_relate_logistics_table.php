<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRelateLogisticsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('relate_logistics', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('username')->default('')->comment('用户账号');
			$table->string('name')->default('')->comment('名字');
			$table->string('phone')->default('')->comment('手机');
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
		Schema::drop('relate_logistics');
	}

}
