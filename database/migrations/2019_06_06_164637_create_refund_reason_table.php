<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRefundReasonTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('refund_reason', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('refund_order_id')->unsigned()->default(0)->comment('退款id');
			$table->string('refund_reason')->default('')->comment('退款原因');
			$table->string('refund_description')->default('')->comment('描述');
			$table->decimal('refund_amount')->default(0.00)->comment('金额');
			$table->string('img_url')->default('')->comment('退款原因');
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
		Schema::drop('refund_reason');
	}

}
