<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePrintReportsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('print_reports', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('file')->default('')->comment('报表文件');
			$table->string('name')->default('')->comment('报表名称');
			$table->string('paper_format')->default('')->comment('报表格式');
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
		Schema::drop('print_reports');
	}

}
