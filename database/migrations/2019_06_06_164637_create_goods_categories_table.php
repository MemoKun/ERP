<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGoodsCategoriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('goods_categories', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('code')->default('')->comment('商品类别代码');
			$table->string('name')->default('')->comment('商品类别名称');
			$table->string('description')->default('')->comment('描述');
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
		Schema::drop('goods_categories');
	}

}
