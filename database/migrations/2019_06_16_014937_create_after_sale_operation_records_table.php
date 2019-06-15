<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAfterSaleOperationRecordsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('after_sale_operation_records', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('after_sale_id')->default(0);
			$table->integer('user_id')->default(0);
			$table->string('user_name')->default('');
			$table->string('operation')->default('');
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
		Schema::drop('after_sale_operation_records');
	}

}
