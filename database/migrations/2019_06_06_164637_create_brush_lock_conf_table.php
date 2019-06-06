<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateBrushLockConfTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('brush_lock_conf', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('perform_type')->default('')->comment('执行类型');
			$table->string('include_string')->default('')->comment('包含字符');
			$table->integer('user_id')->unsigned()->comment('创建人');
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
		Schema::drop('brush_lock_conf');
	}

}
