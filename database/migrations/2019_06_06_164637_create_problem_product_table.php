<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProblemProductTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('problem_product', function(Blueprint $table)
		{
			$table->integer('id', true);
			$table->integer('after_sale_id')->nullable();
			$table->integer('after_compensation_order_id')->nullable();
			$table->string('commodity_code')->nullable();
			$table->string('spec_code')->nullable();
			$table->string('short_name')->nullable();
			$table->string('spec')->nullable();
			$table->string('color')->nullable();
			$table->string('materials')->nullable();
			$table->string('function')->nullable();
			$table->string('special')->nullable();
			$table->string('other')->nullable();
			$table->integer('buy_number')->nullable();
			$table->string('img_url')->nullable()->default('');
			$table->string('supplier_id')->nullable()->comment('供应商');
			$table->boolean('status')->nullable()->default(1);
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
		Schema::drop('problem_product');
	}

}
