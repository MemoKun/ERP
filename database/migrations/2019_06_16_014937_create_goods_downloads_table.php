<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateGoodsDownloadsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('goods_downloads', function(Blueprint $table)
		{
			$table->increments('goods_downloads_id')->comment('下载商品ID');
			$table->integer('shops_id')->unsigned()->comment('店铺id');
			$table->string('dl_type')->comment('下载类型 seller在售商品，inventory库存商品');
			$table->bigInteger('num_iid')->unsigned()->comment('商品数字id');
			$table->bigInteger('cid')->unsigned()->comment('商品所属的叶子类目 id');
			$table->string('seller_cids')->comment('商品所属的店铺内卖家自定义类目列表');
			$table->string('props')->comment('商品属性 格式：pid:vid;pid:vid');
			$table->string('title')->comment('商品标题,不能超过60字节');
			$table->decimal('price', 10)->comment('商品价格，格式：5.00；单位：元；精确到：分');
			$table->integer('num')->comment('商品数量');
			$table->string('nick')->comment('卖家昵称');
			$table->string('pic_url')->comment('商品主图片地址');
			$table->string('approve_status')->comment('商品上传后的状态。onsale出售中，instock库中');
			$table->integer('valid_thru')->comment('7 有效期,7或者14（默认是7天）');
			$table->string('type')->comment('商品类型(fixed:一口价;auction:拍卖)注：取消团购');
			$table->dateTime('list_time')->nullable();
			$table->dateTime('delist_time')->nullable();
			$table->dateTime('modified')->nullable();
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
		Schema::drop('goods_downloads');
	}

}
