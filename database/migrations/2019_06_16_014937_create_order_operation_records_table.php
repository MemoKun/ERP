<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderOperationRecordsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('order_operation_records', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('orders_id')->nullable();
			$table->integer('user_id')->unsigned()->comment('用户id');
			$table->string('user_name');
			$table->string('operation')->comment('操作');
			$table->string('description')->comment('操作描述');
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
		Schema::drop('order_operation_records');
	}

}
