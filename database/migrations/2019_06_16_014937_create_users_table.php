<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('username')->comment('账号');
			$table->string('password')->comment('密码');
			$table->string('work_id')->default('0')->unique('users_email_unique')->comment('工号');
			$table->string('real_name')->nullable()->comment('真实姓名');
			$table->string('id_no')->nullable()->comment('身份证号');
			$table->string('phone')->nullable()->comment('手机号');
			$table->string('email')->nullable()->comment('电子邮箱');
			$table->string('home_address')->default('')->comment('家庭地址');
			$table->string('remark')->default('')->comment('备注');
			$table->dateTime('hiredate')->nullable()->comment('入职日期');
			$table->dateTime('departure_date')->nullable()->comment('离职日期');
			$table->string('remember_token', 100)->nullable();
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
		Schema::drop('users');
	}

}
