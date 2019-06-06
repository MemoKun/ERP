<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSupplieProblemProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_problem_products', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('re_supplie_orders_id')->unsigned()->default(0)->comment('补件单id');
			$table->string('commodity_code')->nullable()->comment('商品编码');
			$table->string('spec_code')->nullable()->comment('子件编码');
			$table->string('short_name')->nullable()->comment('商品简称');
			$table->string('spec')->nullable()->comment('规格');
			$table->integer('suppliers_id')->unsigned()->comment('供应商id');
			$table->string('problem_description')->default('')->comment('问题描述');
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
		Schema::drop('re_supplie_problem_products');
	}

}
