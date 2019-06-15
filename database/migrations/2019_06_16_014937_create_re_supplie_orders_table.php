<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReSupplieOrdersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('re_supplie_orders', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('resupply_order_no')->default('')->comment('补件单号');
			$table->integer('orders_id')->unsigned()->default(1)->comment('订单id');
			$table->string('system_order_no')->default('')->comment('系统单号');
			$table->integer('package_types_id')->unsigned()->default(1)->comment('包件类型id');
			$table->integer('re_supplie_categories_id')->unsigned()->default(1)->comment('补件类别id');
			$table->decimal('resupply_cost', 10, 0)->unsigned()->default(0)->comment('补件成本');
			$table->decimal('resupply_money', 10, 0)->unsigned()->default(0)->comment('补件金额');
			$table->string('resupply_reason')->default('')->comment('补件原因');
			$table->string('resupply_remark')->default('')->comment('补件备注');
			$table->integer('re_supplie_responsibles_id')->unsigned()->default(1)->comment('补件责任方id');
			$table->string('salesman')->default('')->comment('原订单业务员');
			$table->string('shop_nick')->default('')->comment('店铺昵称');
			$table->string('member_nick')->default('')->comment('买家昵称');
			$table->string('shop_group')->default('')->comment('店铺分组');
			$table->string('member_name')->default('')->comment('买家姓名');
			$table->string('member_phone')->default('')->comment('买家电话');
			$table->integer('suppliers_id')->unsigned()->default(1)->comment('供应商id');
			$table->integer('logistics_id')->unsigned()->default(1)->comment('物流id');
			$table->string('express_no')->default('')->comment('快递单号');
			$table->integer('distribution_methods_id')->unsigned()->default(3)->comment('配送方式id');
			$table->integer('freight_types_id')->unsigned()->default(1)->comment('运费类型id');
			$table->decimal('estimated_fee', 10, 0)->unsigned()->default(0)->comment('预计运费');
			$table->decimal('compensate_fee', 10, 0)->unsigned()->default(0)->comment('物流赔偿费用');
			$table->decimal('wooden_frame_fee', 10, 0)->unsigned()->default(0)->comment('木架费用');
			$table->decimal('load_fee', 10, 0)->unsigned()->default(0)->comment('送装费用');
			$table->date('promise_time')->nullable()->comment('承诺时间');
			$table->integer('refund_methods_id')->unsigned()->default(1)->comment('补款方式id');
			$table->string('refund_account')->default('')->comment('补款账号');
			$table->string('bank')->default('')->comment('开户银行');
			$table->string('receiver_state')->default('')->comment('收货人的所在省份');
			$table->string('receiver_city')->default('')->comment('收货人的所在城市');
			$table->string('receiver_district')->default('')->comment('收货人的所在地区');
			$table->string('address')->default('')->comment('收货地址');
			$table->string('mark_name')->default('')->comment('标记名称');
			$table->string('marker')->default('')->comment('标记人');
			$table->date('mark_time')->nullable()->comment('标记时间');
			$table->string('creator')->default('')->comment('创建人');
			$table->string('submitter')->default('')->comment('提交人');
			$table->string('reviewer')->default('')->comment('审核人');
			$table->string('consigner')->default('')->comment('发货人');
			$table->string('consign_warehouse')->default('')->comment('发货仓库');
			$table->string('consign_remark')->default('')->comment('发货备注');
			$table->timestamps();
			$table->date('submit_time')->nullable()->comment('提交时间');
			$table->date('review_time')->nullable()->comment('审核时间');
			$table->date('settle_time')->nullable()->comment('结算时间');
			$table->date('print_time')->nullable()->comment('打印时间');
			$table->date('system_consign_time')->nullable()->comment('系统发货时间');
			$table->date('real_consign_time')->nullable()->comment('实际发货时间');
			$table->boolean('is_submit')->default(0)->comment('提交');
			$table->boolean('is_review')->default(0)->comment('审核');
			$table->boolean('is_settle')->default(0)->comment('结算');
			$table->boolean('is_print')->default(0)->comment('打印');
			$table->boolean('is_consign')->default(0)->comment('发货');
			$table->boolean('is_invalid')->default(0)->comment('作废');
			$table->decimal('square_number', 10, 0)->unsigned()->default(0)->comment('方数');
			$table->decimal('number', 10, 0)->unsigned()->default(0)->comment('件数');
			$table->string('application_mark_name')->nullable()->default('')->comment('补件申请标记名称');
			$table->string('review_mark_name')->nullable()->default('')->comment('补件审核标记名称');
			$table->date('real_consign_time_1')->nullable()->comment('实际发货时间(跟单货审)');
			$table->string('warehousing_status')->default('')->comment('入库状态');
			$table->boolean('is_purchase')->default(0)->comment('采购');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->string('remark')->default('')->comment('备注');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('re_supplie_orders');
	}

}
