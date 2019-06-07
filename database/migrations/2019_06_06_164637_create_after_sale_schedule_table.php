<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAfterSaleScheduleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('after_sale_schedule', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('after_sale_id')->unsigned()->comment('售后id');
			$table->string('schedule_description')->default('')->comment('进度描述');
			$table->integer('user_id')->unsigned()->comment('创建人id');
			$table->string('subscribed_at')->nullable()->comment('预约时间');
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
		Schema::drop('after_sale_schedule');
	}

}
