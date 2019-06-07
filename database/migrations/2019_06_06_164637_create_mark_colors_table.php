<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMarkColorsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('mark_colors', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('markcode')->default('')->comment('标记代码');
			$table->string('markname')->default('')->comment('标记名称');
			$table->string('color')->default('')->comment('颜色');
			$table->string('description')->default('')->comment('描述');
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
		Schema::drop('mark_colors');
	}

}
