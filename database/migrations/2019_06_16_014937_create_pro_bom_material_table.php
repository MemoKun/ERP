<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProBomMaterialTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pro_bom_material', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('pro_bom_id')->unsigned();
			$table->string('material_code')->default('')->comment('材料编码');
			$table->string('spec_code')->default('')->comment('规格编码');
			$table->string('material_name')->default('')->comment('材料名称');
			$table->string('spec')->default('')->comment('规格');
			$table->string('color')->default('')->comment('颜色');
			$table->string('material_quality')->default('')->comment('材质');
			$table->string('special')->default('')->comment('特殊');
			$table->string('other')->default('')->comment('其他');
			$table->string('volume')->default('')->comment('体积');
			$table->string('weight')->default('')->comment('重量');
			$table->string('unit')->default('')->comment('单位');
			$table->boolean('semi_finished')->default(1)->comment('半成品');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->string('need')->default('')->comment('所需数量');
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
		Schema::drop('pro_bom_material');
	}

}
