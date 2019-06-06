<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOfflineAccountConfTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offline_account_conf', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('account_information')->default('')->comment('账号信息');
			$table->integer('user_id')->unsigned()->comment('创建人id');
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
		Schema::drop('offline_account_conf');
	}

}
