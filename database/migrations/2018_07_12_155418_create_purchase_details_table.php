<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_details', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('purchases_id')->comment('采购id');
            $table->unsignedInteger('product_specs_id')->comment("产品规格id");
            $table->integer('purchase_quantity')->comment("采购数");
            $table->unsignedInteger('shops_id')->comment("采购店铺id");
            $table->unsignedInteger('suppliers_id')->comment("供应商id");
            $table->decimal('purchase_cost',10,2)->comment("采购成本");
            $table->decimal('purchase_freight',10,2)->comment("采购成本");
            $table->decimal('warehouse_cost',10,2)->comment("仓库成本");
            $table->decimal('commission',10,2)->default(0.00)->comment('金佣点');
            $table->decimal('discount',10,2)->default(0.00)->comment('折扣');
            $table->string('colour_num')->comment('色号');
            $table->string('paint')->comment('油漆');
            $table->dateTime('arrival_time')->comment('到货时间');
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
        Schema::dropIfExists('purchase_details');
    }
}
