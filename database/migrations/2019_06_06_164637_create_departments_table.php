<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDepartmentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('departments', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('dept_no')->comment('部门代码');
			$table->string('name')->comment('部门名称');
			$table->integer('p_dept')->unsigned()->default(0)->comment('所属主部门');
			$table->string('remark')->default('')->comment('备注');
			$table->boolean('is_verify')->default(0)->comment('是否验证');
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
		Schema::drop('departments');
	}

}
