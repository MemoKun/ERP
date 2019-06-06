<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSuppliersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('suppliers', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name')->default('')->comment('供应商名称');
			$table->string('company')->default('')->comment('供应商公司');
			$table->string('code')->default('')->comment('公司代码');
			$table->string('province')->default('')->comment('省');
			$table->string('city')->default('')->comment('市');
			$table->string('district')->default('')->comment('区');
			$table->string('address')->default('')->comment('地址');
			$table->string('zipcode')->default('')->comment('邮编');
			$table->string('contacts')->default('')->comment('联系人');
			$table->string('phone')->default('')->comment('电话');
			$table->string('mobile')->default('')->comment('手机');
			$table->string('fax')->default('')->comment('传真');
			$table->string('email')->default('')->comment('邮箱');
			$table->string('remark')->default('')->comment('备注');
			$table->boolean('is_scan')->default(1)->comment('是否启用扫描');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->boolean('auto_valuation')->default(1)->comment('是否采购自动计价');
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
		Schema::drop('suppliers');
	}

}
