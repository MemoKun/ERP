<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCityInfosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('city_infos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('logistics_id')->unsigned()->comment('物流id');
			$table->string('province')->default('')->comment('省');
			$table->string('city')->default('')->comment('市');
			$table->string('district')->default('')->comment('区');
			$table->string('address')->default('')->comment('提货地址');
			$table->string('phone')->default('')->comment('提货电话');
			$table->decimal('price', 10)->default(0.00)->comment('物流费用');
			$table->decimal('weight_univalent', 10)->default(0.00)->comment('重量单价');
			$table->boolean('expected_days')->default(1)->comment('城市到达天数');
			$table->boolean('route')->default(1)->comment('中转或直达：0=中转，1=直达');
			$table->boolean('is_free_shipping')->default(0)->comment('是否包邮');
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
		Schema::drop('city_infos');
	}

}
