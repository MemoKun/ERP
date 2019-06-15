<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSuppliersReportsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('suppliers_reports', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('stock_id')->unsigned()->comment('库存id');
			$table->integer('supplier_id')->unsigned()->comment('供应商id');
			$table->integer('purchase_quantity')->comment('采购数');
			$table->integer('warehousing_quantity')->comment('入库数');
			$table->integer('consignor')->comment('代发数');
			$table->dateTime('delivery_time')->nullable()->comment('到货时间');
			$table->integer('fifo')->comment('先进先出发货数');
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
		Schema::drop('suppliers_reports');
	}

}
