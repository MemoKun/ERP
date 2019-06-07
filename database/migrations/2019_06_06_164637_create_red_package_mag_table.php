<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRedPackageMagTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('red_package_mag', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('commodity_code')->default('');
			$table->string('short_name')->default('');
			$table->string('remark')->default('');
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
		Schema::drop('red_package_mag');
	}

}
