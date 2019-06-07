<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAfterSaleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('after_sale', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('after_sale_order_no')->default('')->comment('系统id');
			$table->integer('order_status')->default(10)->comment('售后状态:新建、提交');
			$table->string('shop_name')->default('')->comment('店铺名称');
			$table->string('shop_group')->default('')->comment('店铺分组');
			$table->string('order_no')->default('')->comment('订单号');
			$table->string('previous_order_staff')->default('')->comment('原订单业务员');
			$table->string('vip_name')->default('')->comment('会员昵称');
			$table->string('client_name')->default('')->comment('客户姓名');
			$table->string('parts_duty')->default('')->comment('补件责任方');
			$table->string('after_responsible_party')->default('')->comment('退货责任方');
			$table->string('suppliers_id')->default('')->comment('供应商');
			$table->string('logistic_name')->default('')->comment('物流公司');
			$table->string('logistics_id')->default('')->comment('物流单号');
			$table->dateTime('deliver_date')->nullable()->comment('发货时间');
			$table->integer('user_id')->unsigned()->comment('业务员');
			$table->string('after_sale_person')->default('')->comment('售后处理人');
			$table->float('order_amount', 10)->default(0.00)->comment('订单金额');
			$table->string('after_sale_type')->default('')->comment('售后类型');
			$table->string('after_sale_group')->default('')->comment('售后分类');
			$table->string('after_sale_status')->default('0')->comment('售后状态');
			$table->string('order_phone')->default('0')->comment('联系方式');
			$table->string('problem_description')->default('')->comment('问题描述');
			$table->string('customer_service_requirements')->default('')->comment('客服要求');
			$table->string('receiver_state')->default('')->comment('省');
			$table->string('receiver_city')->default('')->comment('市');
			$table->string('receiver_district')->default('')->comment('区');
			$table->string('receiver_address')->default('')->comment('地址');
			$table->string('order_remark')->default('')->comment('备注');
			$table->string('taobao_oid')->default('')->comment('淘宝订单号');
			$table->string('rfe_information')->default('')->comment('补件信息');
			$table->dateTime('rfe_order_at')->nullable()->comment('补件下单时间');
			$table->boolean('is_locked')->default(0)->comment('是否锁定');
			$table->string('locking_people')->default('')->comment('锁定人');
			$table->dateTime('locking_at')->nullable()->comment('锁定时间');
			$table->string('tag_people')->default('')->comment('标记人');
			$table->string('tag_name')->default('')->comment('标记名称');
			$table->dateTime('tag_at')->nullable()->comment('标记时间');
			$table->dateTime('predict_at')->nullable()->comment('预计交期');
			$table->string('custom_oid')->default('')->comment('自定义单号');
			$table->boolean('is_finish')->default(0)->comment('是否完结');
			$table->boolean('is_reject')->default(0)->comment('是否驳回');
			$table->string('refund_status')->default('')->comment('退款处理状态');
			$table->string('return_status')->default('')->comment('退货处理状态');
			$table->string('patch_status')->default('')->comment('补件处理状态');
			$table->string('patch_split')->default('')->comment('补件拆分');
			$table->boolean('is_refund')->default(0)->comment('需要退款');
			$table->boolean('is_return')->default(0)->comment('需要退货');
			$table->boolean('is_patch')->default(0)->comment('需发补件');
			$table->boolean('is_solve')->default(0)->comment('已解决');
			$table->string('after_sale_order_type')->default('')->comment('售后单类型');
			$table->boolean('is_service_submit')->default(0)->comment('客服提交');
			$table->string('service_submit_person')->default('')->comment('客服提交人');
			$table->dateTime('service_submit_date')->nullable()->comment('客服提交时间');
			$table->boolean('is_after_sale_check')->default(0)->comment('售后审核');
			$table->string('after_sale_check_person')->default('')->comment('售后审核人');
			$table->dateTime('after_sale_check_date')->nullable()->comment('售后审核时间');
			$table->boolean('is_director_check')->default(0)->comment('主管审核');
			$table->string('director_check_person')->default('')->comment('主管审核人');
			$table->dateTime('director_check_date')->nullable()->comment('主管审核时间');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->boolean('is_close')->default(1)->comment('结算');
			$table->dateTime('close_date')->nullable()->comment('结算时间');
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
		Schema::drop('after_sale');
	}

}
