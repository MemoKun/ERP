<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDlOrderListsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('dl_order_lists', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('order_downloads_id')->unsigned()->comment('订单下载id');
			$table->bigInteger('oid')->unsigned()->comment('子订单编号');
			$table->bigInteger('cid')->unsigned()->comment('交易商品对应的类目ID');
			$table->bigInteger('item_oid')->unsigned()->comment('服务所属的交易订单号。如果服务为一年包换，则item_oid这笔订单享受改服务的保护');
			$table->bigInteger('num_iid')->unsigned()->comment('商品数字id');
			$table->string('title')->comment('商品标题');
			$table->string('type')->comment('交易类型');
			$table->bigInteger('sku_id')->unsigned()->comment('商品的最小库存单位Sku的id.可以通过taobao.item.sku.get获取详细的Sku信息');
			$table->integer('num')->comment('购买数量。取值范围:大于零的整数');
			$table->string('order_from')->comment('子订单来源,如jhs(聚划算)、taobao(淘宝)、wap(无线)');
			$table->string('sku_properties_name')->comment('SKU的值。如：机身颜色:黑色;手机套餐:官方标配');
			$table->decimal('total_fee', 10)->comment('应付金额（商品价格 * 商品数量 + 手工调整金额 - 子订单级订单优惠金额）。精确到2位小数;单位:元。如:200.07，表示:200元7分');
			$table->decimal('payment', 10)->comment('子订单实付金额。精确到2位小数，单位:元。如:200.07，表示:200元7分。对于多子订单的交易，计算公式如下：payment = price * num + adjust_fee - discount_fee ；单子订单交易，payment与主订单的payment一致，对于退款成功的子订单，由于主订单的优惠分摊金额，会造成该字段可能不为0.00元。建议使用退款前的实付金额减去退款单中的实际退款金额计算。');
			$table->decimal('discount_fee', 10)->comment('子订单级订单优惠金额。精确到2位小数;单位:元。如:200.07，表示:200元7分');
			$table->decimal('adjust_fee', 10)->comment('手工调整金额.格式为:1.01;单位:元;精确到小数点后两位.');
			$table->decimal('price', 10)->comment('商品价格。精确到2位小数;单位:元。如:200.07，表示:200元7分');
			$table->string('item_meal_name')->comment('套餐的值。如：M8原装电池:便携支架:M8专用座充:莫凡保护袋');
			$table->string('pic_path')->comment('商品图片的绝对路径');
			$table->string('seller_nick')->comment('卖家昵称');
			$table->string('buyer_nick')->comment('买家昵称');
			$table->string('shipper')->comment('仓储信息');
			$table->string('status')->comment('订单状态（请关注此状态，如果为TRADE_CLOSED_BY_TAOBAO状态，则不要对此订单进行发货，切记啊！）。可选值:TRADE_NO_CREATE_PAY(没有创建支付宝交易)WAIT_BUYER_PAY(等待买家付款)WAIT_SELLER_SEND_GOODS(等待卖家发货,即:买家已付款)WAIT_BUYER_CONFIRM_GOODS(等待买家确认收货,即:卖家已发货)TRADE_BUYER_SIGNED(买家已签收,货到付款专用)TRADE_FINISHED(交易成功)TRADE_CLOSED(付款以后用户退款成功，交易自动关闭)TRADE_CLOSED_BY_TAOBAO(付款以前，卖家或买家主动关闭交易)PAY_PENDING(国际信用卡支付付款确认中)');
			$table->string('refund_status')->comment('退款状态。退款状态。可选值 WAIT_SELLER_AGREE(买家已经申请退款，等待卖家同意) WAIT_BUYER_RETURN_GOODS(卖家已经同意退款，等待买家退货) WAIT_SELLER_CONFIRM_GOODS(买家已经退货，等待卖家确认收货) SELLER_REFUSE_BUYER(卖家拒绝退款) CLOSED(退款关闭) SUCCESS(退款成功)');
			$table->bigInteger('refund_id')->unsigned()->comment('最近退款ID');
			$table->string('outer_iid')->comment('商家外部编码(可与商家外部系统对接)。外部商家自己定义的商品Item的id，可以通过taobao.items.custom.get获取商品的Item的信息');
			$table->dateTime('timeout_action_time')->nullable();
			$table->dateTime('modified')->nullable();
			$table->dateTime('end_time')->nullable();
			$table->dateTime('consign_time')->nullable();
			$table->boolean('is_sh_ship')->comment('是否发货');
			$table->boolean('buyer_rate')->comment('买家是否已评价。可选值：true(已评价)，false(未评价)');
			$table->boolean('is_oversold')->comment('是否超卖');
			$table->boolean('seller_rate')->comment('卖家是否已评价。可选值：true(已评价)，false(未评价)');
			$table->string('estimate_con_time')->comment('子订单预计发货时间');
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
		Schema::drop('dl_order_lists');
	}

}
