<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStockInsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('stock_ins', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('stock_in_no')->comment('入库单号');
			$table->string('external_sn')->default('')->comment('外部单号');
			$table->integer('stock_in_status')->unsigned()->default(10)->comment('入库状态');
			$table->integer('warehouse_id')->unsigned()->default(0)->comment('仓库id');
			$table->integer('stock_in_types_id')->unsigned()->default(0)->comment('入库类型id');
			$table->integer('suppliers_id')->unsigned()->default(0)->comment('供应商id');
			$table->integer('creator_id')->unsigned()->default(0)->comment('创建人');
			$table->boolean('is_submit')->default(0)->comment('是否提交');
			$table->integer('submitter_id')->unsigned()->default(0)->comment('提交人');
			$table->dateTime('submit_at')->nullable()->comment('提交时间');
			$table->boolean('is_print')->default(0)->comment('是否打印');
			$table->dateTime('print_at')->nullable()->comment('打印时间');
			$table->boolean('is_audit')->default(0)->comment('是否审核');
			$table->integer('auditor_id')->unsigned()->default(0)->comment('审核人');
			$table->dateTime('audit_at')->nullable()->comment('审核时间');
			$table->boolean('is_stock_in')->default(0)->comment('是否入库');
			$table->integer('warehouer_id')->unsigned()->default(0)->comment('入库人');
			$table->dateTime('stock_in_at')->nullable()->comment('入库时间');
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
		Schema::drop('stock_ins');
	}

}
