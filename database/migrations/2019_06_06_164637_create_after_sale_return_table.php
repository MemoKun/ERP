<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAfterSaleReturnTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('after_sale_return', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('after_sale_id')->unsigned()->default(0)->comment('售后id');
			$table->string('return_party')->default('')->comment('责任方(退货)');
			$table->string('return_party_name')->default('')->comment('责任方姓名');
			$table->decimal('return_amount')->default(0.00)->comment('责任金额');
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
		Schema::drop('after_sale_return');
	}

}
