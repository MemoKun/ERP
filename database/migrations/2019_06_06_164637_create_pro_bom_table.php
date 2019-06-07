<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProBomTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pro_bom', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('commodity_code')->default('')->comment('商品编码');
			$table->string('spec_code')->default('')->comment('规格编码');
			$table->string('short_name')->default('')->comment('商品简称');
			$table->string('spec')->default('')->comment('规格');
			$table->string('color')->default('')->comment('颜色');
			$table->string('material_quality')->default('')->comment('材质');
			$table->string('special')->default('')->comment('特殊');
			$table->string('other')->default('')->comment('其他');
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
		Schema::drop('pro_bom');
	}

}
