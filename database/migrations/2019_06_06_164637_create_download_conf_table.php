<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDownloadConfTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('download_conf', function(Blueprint $table)
		{
			$table->increments('id');
			$table->boolean('is_covered')->default(1)->comment('启用覆盖，状态：0=停用，1=启用');
			$table->boolean('is_merged')->comment('启用合并，状态：0=停用，1=启用');
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
		Schema::drop('download_conf');
	}

}
