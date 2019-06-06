<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEvalCategoryMagTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('eval_category_mag', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->string('eval_category')->comment('评价类型');
			$table->string('eval_description')->comment('评价描述');
			$table->string('creator')->comment('创建人');
			$table->boolean('status')->default(1)->comment('是否启用');
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
		Schema::drop('eval_category_mag');
	}

}
