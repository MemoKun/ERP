<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('products', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('commodity_code')->default('')->comment('产品编码');
			$table->string('jd_sn')->default('')->comment('京东编码');
			$table->string('vips_sn')->default('')->comment('唯品会编码');
			$table->string('factory_model')->default('')->comment('工厂型号');
			$table->string('short_name')->default('')->comment('产品简称');
			$table->string('shops_id')->default('')->comment('店铺id');
			$table->string('shop_nick')->default('')->comment('卖家昵称（店铺昵称）');
			$table->integer('supplier_id')->unsigned()->comment('供应商id');
			$table->integer('category_id')->unsigned()->comment('产品类别id');
			$table->string('remark')->default('')->comment('备注');
			$table->string('title')->default('')->comment('产品标题');
			$table->string('img')->default('')->comment('产品图片');
			$table->string('url')->default('')->comment('产品网址');
			$table->boolean('status')->default(1)->comment('状态：0=停用，1=启用');
			$table->boolean('is_stop_pro')->default(0)->comment('是否停产 默认 0 = 不停产  1 = 停产');
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
		Schema::drop('products');
	}

}
