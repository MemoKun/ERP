<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRefundOperationRecordsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('refund_operation_records', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('refund_orders_id')->default(0);
			$table->integer('user_id')->default(0);
			$table->string('user_name')->default('');
			$table->string('operation');
			$table->string('description')->default('');
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
		Schema::drop('refund_operation_records');
	}

}
