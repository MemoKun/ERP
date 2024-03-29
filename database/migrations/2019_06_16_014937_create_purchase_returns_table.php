<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePurchaseReturnsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_returns', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('purchase_return_no')->comment('采购退货单号');
			$table->integer('purchase_return_status')->unsigned()->default(10)->comment('采购退货状态');
			$table->integer('creator_id')->unsigned()->default(0)->comment('创建人');
			$table->boolean('is_submit')->default(0)->comment('是否提交');
			$table->integer('submitter_id')->unsigned()->default(0)->comment('提交人');
			$table->dateTime('submit_at')->nullable()->comment('提交时间');
			$table->boolean('is_audit')->default(0)->comment('是否审核');
			$table->integer('auditor_id')->unsigned()->default(0)->comment('审核人');
			$table->dateTime('audit_at')->nullable()->comment('审核时间');
			$table->boolean('is_print')->default(0)->comment('是否打印');
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
		Schema::drop('purchase_returns');
	}

}
