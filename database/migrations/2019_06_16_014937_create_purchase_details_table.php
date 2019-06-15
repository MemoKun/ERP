<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePurchaseDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchase_details', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('purchase_lists_id')->unsigned()->comment('采购列表id');
			$table->string('purchase_item_status')->default('new')->comment('采购子单状态:新建、部分完成、已完成');
			$table->integer('product_components_id')->unsigned()->comment('产品子件id');
			$table->integer('purchase_quantity')->unsigned()->comment('采购数');
			$table->integer('stock_in_count')->unsigned()->default(0)->comment('已入库数');
			$table->integer('shops_id')->unsigned()->default(0)->comment('采购店铺id');
			$table->integer('suppliers_id')->unsigned()->default(0)->comment('供应商id');
			$table->decimal('purchase_cost', 10)->default(0.00)->comment('采购成本');
			$table->decimal('purchase_freight', 10)->default(0.00)->comment('采购运费');
			$table->decimal('warehouse_cost', 10)->default(0.00)->comment('仓库成本');
			$table->decimal('commission', 10)->default(0.00)->comment('佣金点');
			$table->decimal('discount', 10)->default(0.00)->comment('折扣');
			$table->decimal('wooden_frame_costs', 10)->default(0.00)->comment('木架费');
			$table->dateTime('arrival_time')->nullable()->comment('到货时间');
			$table->string('remark')->default('')->comment('备注');
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
		Schema::drop('purchase_details');
	}

}
