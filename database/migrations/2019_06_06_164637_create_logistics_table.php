<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateLogisticsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('logistics', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('code')->default('')->comment('物流代码');
			$table->string('name')->default('')->comment('物流名称');
			$table->integer('report_id')->unsigned()->comment('报表格式id');
			$table->boolean('expected_days')->default(0)->comment('预计天数');
			$table->string('phone')->default('')->comment('物流电话');
			$table->string('address')->default('')->comment('物流地址');
			$table->integer('freight_type_id')->unsigned()->comment('运费类型id');
			$table->string('remark')->default('')->comment('备注');
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
		Schema::drop('logistics');
	}

}
