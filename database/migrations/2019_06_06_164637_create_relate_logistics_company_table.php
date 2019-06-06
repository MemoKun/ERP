<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRelateLogisticsCompanyTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('relate_logistics_company', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('relate_logistics_id')->unsigned()->index('ref1')->comment('关联物流用户id');
			$table->string('code')->default('')->comment('物流代码');
			$table->string('logistics_name')->default('')->comment('物流名称');
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
		Schema::drop('relate_logistics_company');
	}

}
