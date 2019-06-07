<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRoleGroupsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('role_groups', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('')->unique()->comment('分组名');
			$table->string('description')->default('')->comment('分组描述');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->string('remark')->default('')->comment('备注');
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
		Schema::drop('role_groups');
	}

}
