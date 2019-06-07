<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSupplieRejectReasonsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_reject_reasons', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('re_supplie_orders_id')->unsigned()->default(0)->comment('补件单id');
			$table->string('rejecter')->default('')->comment('驳回人');
			$table->string('reason')->default('')->comment('驳回原因');
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
		Schema::drop('re_supplie_reject_reasons');
	}

}
