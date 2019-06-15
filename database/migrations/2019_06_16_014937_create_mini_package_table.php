<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMiniPackageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('mini_package', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('supplier_id')->default('')->comment('供应商');
			$table->string('order_id')->default('')->comment('商品编码');
			$table->string('specification_id')->default('')->comment('规格编码');
			$table->string('order_name')->default('')->comment('商品简称');
			$table->string('specification_name')->default('')->comment('规格名称');
			$table->string('def_order_id')->default('')->comment('缺失商品编码');
			$table->string('def_specification_id')->default('')->comment('缺失规格编码');
			$table->string('def_order_name')->default('')->comment('缺失商品简称');
			$table->string('def_specification_name')->default('')->comment('缺失规格名称');
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
		Schema::drop('mini_package');
	}

}
