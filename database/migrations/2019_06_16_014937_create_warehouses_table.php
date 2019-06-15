<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateWarehousesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('warehouses', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('')->comment('仓库名称');
			$table->string('province')->default('')->comment('仓库地（省）');
			$table->string('city')->default('')->comment('仓库地（市）');
			$table->string('district')->default('')->comment('仓库地（区）');
			$table->string('address')->default('')->comment('仓库地（地址）');
			$table->boolean('is_default')->default(0)->comment('是否默认');
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
		Schema::drop('warehouses');
	}

}
