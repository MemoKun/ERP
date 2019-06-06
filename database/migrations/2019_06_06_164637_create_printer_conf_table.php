<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePrinterConfTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('printer_conf', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('model')->nullable()->comment('模块');
			$table->string('printer')->nullable()->comment('打印机');
			$table->string('user')->nullable()->comment('使用者');
			$table->boolean('status')->nullable()->default(1);
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
		Schema::drop('printer_conf');
	}

}
