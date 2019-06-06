<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFreightTypesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('freight_types', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('')->comment('运费名称');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->boolean('is_default')->default(1)->comment('是否默认');
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
		Schema::drop('freight_types');
	}

}
