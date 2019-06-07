<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePurchasesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('purchases', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('purchase_order_no')->default('')->comment('采购单号(系统生成)');
			$table->string('purchase_status')->default('new')->comment('采购状态:新建、部分完成、已完成');
			$table->string('order_no')->default('')->comment('订单编号（订单生成）');
			$table->integer('user_id')->unsigned()->comment('用户id(创建人)');
			$table->dateTime('print_at')->nullable()->comment('打印时间');
			$table->string('receiver')->default('')->comment('收货人');
			$table->string('receiver_address')->default('')->comment('收货地址');
			$table->date('promise_ship_time')->nullable()->comment('承诺发货时间（订单生成）');
			$table->string('business_personnel')->default('')->comment('原订单业务员（订单生成）');
			$table->string('source')->default('')->comment('采购单来源（订单生成）');
			$table->string('client_name')->default('')->comment('客户名（订单生成）');
			$table->string('buyer_nick')->default('')->comment('卖家昵称（订单生成）');
			$table->string('order_address')->default('')->comment('订单地址（订单生成）');
			$table->boolean('is_submit')->default(0)->comment('是否提交');
			$table->boolean('is_print')->default(0)->comment('是否打印');
			$table->boolean('is_audit')->default(0)->comment('是否审核');
			$table->boolean('is_change')->default(0)->comment('是否修改');
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
		Schema::drop('purchases');
	}

}
