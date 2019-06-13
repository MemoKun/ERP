<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

$api = app('Dingo\Api\Routing\Router');

//$api = new Dingo\Api\Routing\Router();

$api->version('v1', ['namespace' => 'App\Http\Controllers\Api', 'middleware' => ['serializer:array', 'bindings']], function (Dingo\Api\Routing\Router $api) {
    // 图片验证码
    $api->post('captchas', 'CaptchasController@store')
        ->name('api.captchas.store');
    //页面请求
    $api->group([
        'middleware' => [
            'api.throttle', //请求频率限制中间件 ，每分钟不超过60次
            'token.canrefresh',
            'stringtoboolean', //将字符串的“true”或“false”转为布尔类型
        ],
        'limit' => config('api.rate_limits.access.limit'),
        'expires' => config('api.rate_limits.access.expires'),
    ], function (Dingo\Api\Routing\Router $api) {
        //标记颜色
        $api->get('markcolors', 'MarkColorsController@index')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.index');
        $api->get('markcolors/{markcolor}', 'MarkColorsController@show')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.show');
        $api->post('markcolors', 'MarkColorsController@store')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.store');
        $api->patch('markcolors/{markcolor}', 'MarkColorsController@update')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.update');
        $api->delete('markcolors/{markcolor}', 'MarkColorsController@destroy')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.destroy');
        $api->delete('markcolors', 'MarkColorsController@destroybyids')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.destroybyids');
        $api->put('markcolors/editstatus', 'MarkColorsController@editStatusByIds')->middleware('permission:标记颜色管理')
            ->name('api.markcolors.editstatusbyids');

        //记账类型
        $api->get('acctypes', 'AccountingTypesController@index')->middleware('permission:记账类型')
            ->name('api.acctypes.index');
        $api->get('acctypes/{acctype}', 'AccountingTypesController@show')->middleware('permission:记账类型')
            ->name('api.acctypes.show');
        $api->post('acctypes', 'AccountingTypesController@store')->middleware('permission:记账类型')
            ->name('api.acctypes.store');
        $api->patch('acctypes/{acctype}', 'AccountingTypesController@update')->middleware('permission:记账类型')
            ->name('api.acctypes.update');
        $api->delete('acctypes/{acctype}', 'AccountingTypesController@destroy')->middleware('permission:记账类型')
            ->name('api.acctypes.destroy');
        $api->delete('acctypes', 'AccountingTypesController@destroybyids')->middleware('permission:记账类型')
            ->name('api.acctypes.destroybyids');
        $api->put('acctypes/editstatus', 'AccountingTypesController@editStatusByIds')->middleware('permission:记账类型')
            ->name('api.acctypes.editstatusbyids');

        //费用类型
        $api->get('feetypes', 'FeeTypesController@index')->middleware('permission:费用类型管理')
            ->name('api.feetypes.index');
        $api->get('feetypes/{feetype}', 'FeeTypesController@show')->middleware('permission:费用类型管理')
            ->name('api.feetypes.show');
        $api->post('feetypes', 'FeeTypesController@store')->middleware('permission:费用类型管理')
            ->name('api.feetypes.store');
        $api->patch('feetypes/{feetype}', 'FeeTypesController@update')->middleware('permission:费用类型管理')
            ->name('api.feetypes.update');
        $api->delete('feetypes/{feetype}', 'FeeTypesController@destroy')->middleware('permission:费用类型管理')
            ->name('api.feetypes.destroy');
        $api->delete('feetypes', 'FeeTypesController@destroybyids')->middleware('permission:费用类型管理')
            ->name('api.feetypes.destroybyids');
        $api->put('feetypes/editstatus', 'FeeTypesController@editStatusByIds')->middleware('permission:费用类型管理')
            ->name('api.feetypes.editstatusbyids');

        //配送方式
        $api->get('distmets', 'DistributionMethodsController@index')->middleware('permission:配送方式管理')
            ->name('api.distmets.index');
        $api->get('distmets/{distmet}', 'DistributionMethodsController@show')->middleware('permission:配送方式管理')
            ->name('api.distmets.show');
        $api->post('distmets', 'DistributionMethodsController@store')->middleware('permission:配送方式管理')
            ->name('api.distmets.store');
        $api->patch('distmets/{distmet}', 'DistributionMethodsController@update')->middleware('permission:配送方式管理')
            ->name('api.distmets.update');
        $api->delete('distmets/{distmet}', 'DistributionMethodsController@destroy')->middleware('permission:配送方式管理')
            ->name('api.distmets.destroy');
        $api->delete('distmets', 'DistributionMethodsController@destroybyids')->middleware('permission:配送方式管理')
            ->name('api.distmets.destroybyids');
        $api->put('distmets/editstatus', 'DistributionMethodsController@editStatusByIds')->middleware('permission:配送方式管理')
            ->name('api.distmets.editstatusbyids');

        //费用类别
        $api->get('feecates', 'FeeCategoriesController@index')->middleware('permission:费用类型管理')
            ->name('api.feecates.index');
        $api->get('feecates/{feecate}', 'FeeCategoriesController@show')->middleware('permission:费用类型管理')
            ->name('api.feecates.show');
        $api->post('feecates', 'FeeCategoriesController@store')->middleware('permission:费用类型管理')
            ->name('api.feecates.store');
        $api->patch('feecates/{feecate}', 'FeeCategoriesController@update')->middleware('permission:费用类型管理')
            ->name('api.feecates.update');
        $api->delete('feecates/{feecate}', 'FeeCategoriesController@destroy')->middleware('permission:费用类型管理')
            ->name('api.feecates.destroy');
        $api->delete('feecates', 'FeeCategoriesController@destroybyids')->middleware('permission:费用类型管理')
            ->name('api.feecates.destroybyids');
        $api->put('feecates/editstatus', 'FeeCategoriesController@editStatusByIds')->middleware('permission:费用类型管理')
            ->name('api.feecates.editstatusbyids');

        //运费类型
        $api->get('freighttypes', 'FreightTypesController@index')->middleware('permission:运费类型')
            ->name('api.freighttypes.index');
        $api->get('freighttypes/{freighttype}', 'FreightTypesController@show')->middleware('permission:运费类型')
            ->name('api.freighttypes.show');
        $api->post('freighttypes', 'FreightTypesController@store')->middleware('permission:运费类型')
            ->name('api.freighttypes.store');
        $api->patch('freighttypes/{freighttype}', 'FreightTypesController@update')->middleware('permission:运费类型')
            ->name('api.freighttypes.update');
        $api->delete('freighttypes/{freighttype}', 'FreightTypesController@destroy')->middleware('permission:运费类型')
            ->name('api.freighttypes.destroy');
        $api->delete('freighttypes', 'FreightTypesController@destroybyids')->middleware('permission:运费类型')
            ->name('api.freighttypes.destroybyids');
        $api->put('freighttypes/editstatus', 'FreightTypesController@editStatusByIds')->middleware('permission:运费类型')
            ->name('api.freighttypes.editstatusbyids');

        //商品类别
        $api->get('goodscates', 'GoodsCategoriesController@index')->middleware('permission:商品类别配置')
            ->name('api.goodscates.index');
        $api->get('goodscates/{goodscate}', 'GoodsCategoriesController@show')->middleware('permission:商品类别配置')
            ->name('api.goodscates.show');
        $api->post('goodscates', 'GoodsCategoriesController@store')->middleware('permission:商品类别配置')
            ->name('api.goodscates.store');
        $api->patch('goodscates/{goodscate}', 'GoodsCategoriesController@update')->middleware('permission:商品类别配置')
            ->name('api.goodscates.update');
        $api->delete('goodscates/{goodscate}', 'GoodsCategoriesController@destroy')->middleware('permission:商品类别配置')
            ->name('api.goodscates.destroy');
        $api->delete('goodscates', 'GoodsCategoriesController@destroybyids')->middleware('permission:商品类别配置')
            ->name('api.goodscates.destroybyids');
        $api->put('goodscates/editstatus', 'GoodsCategoriesController@editStatusByIds')->middleware('permission:商品类别配置')
            ->name('api.goodscates.editstatusbyids');

//        //入库类型
//        $api->get('storagetypes', 'StorageTypesController@index')
//            ->name('api.storagetypes.index');
//        $api->get('storagetypes/{storagetype}', 'StorageTypesController@show')
//            ->name('api.storagetypes.show');
//        $api->post('storagetypes', 'StorageTypesController@store')
//            ->name('api.storagetypes.store');
//        $api->patch('storagetypes/{storagetype}', 'StorageTypesController@update')
//            ->name('api.storagetypes.update');
//        $api->delete('storagetypes/{storagetype}', 'StorageTypesController@destroy')
//            ->name('api.storagetypes.destroy');
//        $api->delete('storagetypes', 'StorageTypesController@destroybyids')
//            ->name('api.storagetypes.destroybyids');
//        $api->put('storagetypes', 'StorageTypesController@editStatusByIds')
//            ->name('api.storagetypes.editstatusbyids');

        //城市信息
        $api->get('cityinfos', 'CityInfosController@index')->middleware('permission:城市配置')
            ->name('api.cityinfos.index');
        $api->get('cityinfos/{cityinfo}', 'CityInfosController@show')->middleware('permission:城市配置')
            ->name('api.cityinfos.show');
        $api->delete('cityinfos/{cityinfo}', 'CityInfosController@destroy')->middleware('permission:城市配置')
            ->name('api.cityinfos.destroy');
        $api->delete('cityinfos', 'CityInfosController@destroybyids')->middleware('permission:城市配置')
            ->name('api.cityinfos.destroybyids');
        $api->put('cityinfos/editstatus', 'CityInfosController@editStatusByIds')->middleware('permission:城市配置')
            ->name('api.cityinfos.editstatusbyids');

        //损坏商品
        $api->get('damagedgoods', 'DamagedGoodsController@index')
            ->name('api.damagedgoods.index');
        $api->get('damagedgoods/{damagedgoods}', 'DamagedGoodsController@show')
            ->name('api.damagedgoods.show');
        $api->post('damagedgoods', 'DamagedGoodsController@store')
            ->name('api.damagedgoods.store');
        $api->patch('damagedgoods/{damagedgoods}', 'DamagedGoodsController@update')
            ->name('api.damagedgoods.update');
        $api->delete('damagedgoods/{damagedgoods}', 'DamagedGoodsController@destroy')
            ->name('api.damagedgoods.destroy');
        $api->delete('damagedgoods', 'DamagedGoodsController@destroybyids')
            ->name('api.damagedgoods.destroybyids');
        $api->put('damagedgoods/editstatus', 'DamagedGoodsController@editStatusByIds')
            ->name('api.damagedgoods.editstatusbyids');

        //物流区域资源
        $api->get('logisticsareas', 'LogisticsAreasController@index')->middleware('permission:物流区域')
            ->name('api.logisticsareas.index');
        $api->get('logisticsareas/{logisticsarea}', 'LogisticsAreasController@show')->middleware('permission:物流区域')
            ->name('api.logisticsareas.show');
        $api->post('logisticsareas', 'LogisticsAreasController@store')->middleware('permission:物流区域')
            ->name('api.logisticsareas.store');
        $api->patch('logisticsareas/{logisticsarea}', 'LogisticsAreasController@update')->middleware('permission:物流区域')
            ->name('api.logisticsareas.update');
        $api->delete('logisticsareas/{logisticsarea}', 'LogisticsAreasController@destroy')->middleware('permission:物流区域')
            ->name('api.logisticsareas.destroy');
        $api->delete('logisticsareas', 'LogisticsAreasController@destroybyids')->middleware('permission:物流区域')
            ->name('api.logisticsareas.destroybyids');
        $api->put('logisticsareas/editstatus', 'LogisticsAreasController@editStatusByIds')->middleware('permission:物流区域')
            ->name('api.logisticsareas.editstatusbyids');

        //物流资源
        $api->get('logistics', 'LogisticsController@index')->middleware('permission:物流管理')
            ->name('api.logistics.index');
        $api->get('logistics/{logistics}', 'LogisticsController@show')->middleware('permission:物流管理')
            ->name('api.logistics.show');
        $api->post('logistics', 'LogisticsController@store')->middleware('permission:物流管理')
            ->name('api.logistics.store');
        $api->patch('logistics/{logistics}', 'LogisticsController@update')->middleware('permission:物流管理')
            ->name('api.logistics.update');
        $api->delete('logistics/{logistics}', 'LogisticsController@destroy')->middleware('permission:物流管理')
            ->name('api.logistics.destroy');
        $api->delete('logistics', 'LogisticsController@destroybyids')->middleware('permission:物流管理')
            ->name('api.logistics.destroybyids');
        $api->put('logistics/editstatus', 'LogisticsController@editStatusByIds')->middleware('permission:物流管理')
            ->name('api.logistics.editstatusbyids');

        //仓库资源
        $api->get('warehouses', 'WarehousesController@index')->middleware('permission:仓库管理')
            ->name('api.warehouses.index');
        $api->get('warehouses/{warehouse}', 'WarehousesController@show')->middleware('permission:仓库管理')
            ->name('api.warehouses.show');
        $api->post('warehouses', 'WarehousesController@store')->middleware('permission:仓库管理')
            ->name('api.warehouses.store');
        $api->patch('warehouses/{warehouse}', 'WarehousesController@update')->middleware('permission:仓库管理')
            ->name('api.warehouses.update');
        $api->delete('warehouses/{warehouse}', 'WarehousesController@destroy')->middleware('permission:仓库管理')
            ->name('api.warehouses.destroy');
        $api->delete('warehouses', 'WarehousesController@destroybyids')->middleware('permission:仓库管理')
            ->name('api.warehouses.destroybyids');
        $api->put('warehouses/editstatus', 'WarehousesController@editStatusByIds')->middleware('permission:仓库管理')
            ->name('api.warehouses.editstatusbyids');

        //配送资源
        $api->get('distributions', 'DistributionsController@index')->middleware('permission:配送管理')
            ->name('api.distributions.index');
        $api->get('distributions/{distribution}', 'DistributionsController@show')->middleware('permission:配送管理')
            ->name('api.distributions.show');
        $api->post('distributions', 'DistributionsController@store')->middleware('permission:配送管理')
            ->name('api.distributions.store');
        $api->patch('distributions/{distribution}', 'DistributionsController@update')->middleware('permission:配送管理')
            ->name('api.distributions.update');
        $api->delete('distributions/{distribution}', 'DistributionsController@destroy')->middleware('permission:配送管理')
            ->name('api.distributions.destroy');
        $api->delete('distributions', 'DistributionsController@destroybyids')->middleware('permission:配送管理')
            ->name('api.distributions.destroybyids');
        $api->put('distributions/editstatus', 'DistributionsController@editStatusByIds')->middleware('permission:配送管理')
            ->name('api.distributions.editstatusbyids');

        //配送类型资源
        $api->get('distributiontypes', 'DistributionTypesController@index')->middleware('permission:配送管理')
            ->name('api.distributiontypes.index');
        $api->get('distributiontypes/{distributiontype}', 'DistributionTypesController@show')->middleware('permission:配送管理')
            ->name('api.distributiontypes.show');
        $api->post('distributiontypes', 'DistributionTypesController@store')->middleware('permission:配送管理')
            ->name('api.distributiontypes.store');
        $api->patch('distributiontypes/{distributiontype}', 'DistributionTypesController@update')->middleware('permission:配送管理')
            ->name('api.distributiontypes.update');
        $api->delete('distributiontypes/{distributiontype}', 'DistributionTypesController@destroy')->middleware('permission:配送管理')
            ->name('api.distributiontypes.destroy');
        $api->delete('distributiontypes', 'DistributionTypesController@destroybyids')->middleware('permission:配送管理')
            ->name('api.distributiontypes.destroybyids');
        $api->put('distributiontypes/editstatus', 'DistributionTypesController@editStatusByIds')->middleware('permission:配送管理')
            ->name('api.distributiontypes.editstatusbyids');

        //供应商资源
        $api->get('suppliers', 'SuppliersController@index')->middleware('permission:供应商管理')
            ->name('api.suppliers.index');
        $api->get('suppliers/{supplier}', 'SuppliersController@show')->middleware('permission:供应商管理')
            ->name('api.suppliers.show');
        $api->post('suppliers', 'SuppliersController@store')->middleware('permission:供应商管理')
            ->name('api.suppliers.store');
        $api->patch('suppliers/{supplier}', 'SuppliersController@update')->middleware('permission:供应商管理')
            ->name('api.suppliers.update');
        $api->delete('suppliers/{supplier}', 'SuppliersController@destroy')->middleware('permission:供应商管理')
            ->name('api.suppliers.destroy');
        $api->delete('suppliers', 'SuppliersController@destroybyids')->middleware('permission:供应商管理')
            ->name('api.suppliers.destroybyids');
        $api->put('suppliers/editstatus', 'SuppliersController@editStatusByIds')->middleware('permission:供应商管理')
            ->name('api.suppliers.editstatusbyids');

        //店铺资源
        $api->get('shops', 'ShopsController@index')->middleware('permission:店铺管理')
            ->name('api.shops.index');
        $api->get('shops/{shop}', 'ShopsController@show')->middleware('permission:店铺管理')
            ->name('api.shops.show');
        $api->post('shops', 'ShopsController@store')->middleware('permission:店铺管理')
            ->name('api.shops.store');
        $api->patch('shops/{shop}', 'ShopsController@update')->middleware('permission:店铺管理')
            ->name('api.shops.update');
        $api->delete('shops/{shop}', 'ShopsController@destroy')->middleware('permission:店铺管理')
            ->name('api.shops.destroy');
        $api->delete('shops', 'ShopsController@destroybyids')->middleware('permission:店铺管理')
            ->name('api.shops.destroybyids');
        $api->put('shops/editstatus', 'ShopsController@editStatusByIds')->middleware('permission:店铺管理')
            ->name('api.shops.editstatusbyids');

        //系列资源
        $api->get('series', 'SeriesController@index')
            ->name('api.series.index');
        $api->get('series/{series}', 'SeriesController@show')
            ->name('api.series.show');
        $api->post('series', 'SeriesController@store')
            ->name('api.series.store');
        $api->patch('series/{series}', 'SeriesController@update')
            ->name('api.series.update');
        $api->delete('series/{series}', 'SeriesController@destroy')
            ->name('api.series.destroy');
        $api->delete('series', 'SeriesController@destroybyids')
            ->name('api.series.destroybyids');
        $api->put('series/editstatus', 'SeriesController@editStatusByIds')
            ->name('api.series.editstatusbyids');

        //打印报表资源
        $api->get('printreports', 'PrintReportsController@index')
            ->name('api.printreports.index');
        $api->get('printreports/{printreport}', 'PrintReportsController@show')
            ->name('api.printreports.show');
        $api->post('printreports', 'PrintReportsController@store')
            ->name('api.printreports.store');
        $api->patch('printreports/{printreport}', 'PrintReportsController@update')
            ->name('api.printreports.update');
        $api->delete('printreports/{printreport}', 'PrintReportsController@destroy')
            ->name('api.printreports.destroy');
        $api->delete('printreports', 'PrintReportsController@destroybyids')
            ->name('api.printreports.destroybyids');
        $api->put('printreports/editstatus', 'PrintReportsController@editStatusByIds')
            ->name('api.printreports.editstatusbyids');

        //平台资源
        $api->get('platforms', 'PlatformsController@index')
            ->name('api.platforms.index');
        $api->get('platforms/{platform}', 'PlatformsController@show')
            ->name('api.platforms.show');
        $api->post('platforms', 'PlatformsController@store')
            ->name('api.platforms.store');
        $api->patch('platforms/{platform}', 'PlatformsController@update')
            ->name('api.platforms.update');
        $api->delete('platforms/{platform}', 'PlatformsController@destroy')
            ->name('api.platforms.destroy');
        $api->delete('platforms', 'PlatformsController@destroybyids')
            ->name('api.platforms.destroybyids');
        $api->put('platforms/editstatus', 'PlatformsController@editStatusByIds')
            ->name('api.platforms.editstatusbyids');

        //部门资源
        $api->get('departments', 'DepartmentsController@index')->middleware('permission:部门管理')
            ->name('api.departments.index');
        $api->get('departments/{department}', 'DepartmentsController@show')->middleware('permission:部门管理')
            ->name('api.departments.show');
        $api->post('departments', 'DepartmentsController@store')->middleware('permission:部门管理')
            ->name('api.departments.store');
        $api->patch('departments/{department}', 'DepartmentsController@update')->middleware('permission:部门管理')
            ->name('api.departments.update');
        $api->delete('departments/{department}', 'DepartmentsController@destroy')->middleware('permission:部门管理')
            ->name('api.departments.destroy');
        $api->delete('departments', 'DepartmentsController@destroybyids')->middleware('permission:部门管理')
            ->name('api.departments.destroybyids');
        $api->put('departments/editstatus', 'DepartmentsController@editStatusByIds')->middleware('permission:部门管理')
            ->name('api.departments.editstatusbyids');

        //         //商品资源
        //        $api->get('goods', 'GoodsController@index')
        //            ->name('api.goods.index');
        //        $api->get('goods/search', 'GoodsController@searchGoods')
        //            ->name('api.goods.searchgoods');
        //        $api->get('goods/{goods}', 'GoodsController@show')
        //            ->name('api.goods.show');
        //        $api->post('goods', 'GoodsController@store')
        //            ->name('api.goods.store');
        //        $api->patch('goods/{goods}', 'GoodsController@update')
        //            ->name('api.goods.update');
        //        $api->delete('goods/{goods}', 'GoodsController@destroy')
        //            ->name('api.goods.destroy');
        //        $api->delete('goods', 'GoodsController@destroybyids')
        //            ->name('api.goods.destroybyids');
        //        $api->put('goods/editstatus', 'GoodsController@editStatusByIds')
        //            ->name('api.goods.editstatusbyids');

        //商品资源
        $api->get('products', 'ProductsController@index')->middleware('permission:商品管理')
            ->name('api.products.index');
        $api->get('products/search', 'ProductsController@searchProducts')->middleware('permission:商品管理')
            ->name('api.products.searchproducts');
        $api->get('products/{product}', 'ProductsController@show')->middleware('permission:商品管理')
            ->name('api.products.show');
        $api->post('products', 'ProductsController@store')->middleware('permission:商品管理')
            ->name('api.products.store');
        $api->patch('products/{product}', 'ProductsController@update')->middleware('permission:商品管理')
            ->name('api.products.update');
        $api->delete('products/{product}', 'ProductsController@destroy')->middleware('permission:商品管理')
            ->name('api.products.destroy');
        $api->delete('products', 'ProductsController@destroybyids')->middleware('permission:商品管理')
            ->name('api.products.destroybyids');
        $api->put('products/editstatus', 'ProductsController@editStatusByIds')->middleware('permission:商品管理')
            ->name('api.products.editstatusbyids');

        //产品子件资源
        $api->get('productcomponents', 'ProductComponentsController@index')->middleware('permission:商品管理')
            ->name('api.productcomponents.index');
        $api->get('productcomponents/{productcomponent}', 'ProductComponentsController@show')->middleware('permission:商品管理')
            ->name('api.productcomponents.show');
        $api->delete('productcomponents/{productcomponent}', 'ProductComponentsController@destroy')->middleware('permission:商品管理')
            ->name('api.productcomponents.destroy');
        $api->delete('productcomponents', 'ProductComponentsController@destroybyids')->middleware('permission:商品管理')
            ->name('api.goproductcomponentsods.destroybyids');

        //组合资源
        $api->get('combinations', 'CombinationsController@index')->middleware('permission:商品管理')
            ->name('api.combinations.index');
        $api->get('combinations/{combination}', 'CombinationsController@show')->middleware('permission:商品管理')
            ->name('api.combinations.show');
        $api->post('combinations', 'CombinationsController@store')->middleware('permission:商品管理')
            ->name('api.combinations.store');
        $api->patch('combinations/{combination}', 'CombinationsController@update')->middleware('permission:商品管理')
            ->name('api.combinations.update');
        $api->delete('combinations/{combination}', 'CombinationsController@destroy')->middleware('permission:商品管理')
            ->name('api.combinations.destroy');
        $api->delete('combinations', 'CombinationsController@destroybyids')->middleware('permission:商品管理')
            ->name('api.combinations.destroybyids');

        //下载商品资源 暂定
        $api->get('goodsdownloads', 'GoodsDownloadsController@index')->middleware('permission:商品下载')
            ->name('api.goodsdownloads.index');

        //下载订单资源 暂定
        $api->get('orderdownloads', 'OrderDownloadsController@index')->middleware('permission:订单下载')
            ->name('api.orderdownloads.index');

        //库存资源
        $api->get('stocks', 'StocksController@index')
            ->name('api.stocks.index');
        $api->get('stocks/saveableproduct', 'StocksController@saveableProduct')
            ->name('api.stocks.saveableproduct');
        $api->get('stocks/{stock}', 'StocksController@show')
            ->name('api.stocks.show');
        $api->post('stocks', 'StocksController@store')
            ->name('api.stocks.store');
        $api->delete('stocks/{stock}', 'StocksController@destroy')
            ->name('api.stocks.destroy');
        $api->delete('stocks', 'StocksController@destroybyids')
            ->name('api.stocks.destroybyids');
        $api->put('stocks/editstatus', 'StocksController@editStatusByIds')
            ->name('api.stocks.editstatusbyids');

        //采购单资源
        $api->get('purchases', 'PurchasesController@index')->middleware('permission:采购单管理')
            ->name('api.purchases.index');
        $api->get('purchases/{purchase}', 'PurchasesController@show')->middleware('permission:采购单管理')
            ->name('api.purchases.show');
        $api->post('purchases', 'PurchasesController@store')->middleware('permission:采购单管理')
            ->name('api.purchases.store');
        $api->delete('purchases/{purchase}', 'PurchasesController@destroy')->middleware('permission:采购单管理')
            ->name('api.purchases.destroy');
        $api->patch('purchases/{purchase}', 'PurchasesController@update')->middleware('permission:采购单管理')
            ->name('api.purchases.update');
        $api->delete('purchases', 'PurchasesController@destroybyids')->middleware('permission:采购单管理')
            ->name('api.purchases.destroybyids');
        $api->put('purchases/editstatus', 'PurchasesController@editStatusByIds')->middleware('permission:采购单管理')
            ->name('api.purchases.editstatusbyids');
        $api->put('purchases/{purchase}/submit', 'PurchasesController@isSubmit')->middleware('permission:采购单管理')
            ->name('api.purchases.issubmit');
        $api->put('purchases/{purchase}/print', 'PurchasesController@isPrint')->middleware('permission:采购单管理')
            ->name('api.purchases.isprint');
        $api->put('purchases/{purchase}/audit', 'PurchasesController@isAudit')->middleware('permission:采购单管理')
            ->name('api.purchases.isAudit');
        $api->put('purchases/{purchase}/unaudit', 'PurchasesController@isUnAudit')->middleware('permission:采购单管理')
            ->name('api.purchases.isUnAudit');

        //采购清单
        $api->get('purchaselists', 'PurchaseListsController@index')->middleware('permission:采购单管理')
            ->name('api.purchaselists.index');
        $api->delete('purchaselists/{purchaselist}', 'PurchaseListsController@destroy')->middleware('permission:采购单管理')
            ->name('api.purchaselists.destroy');
        $api->delete('purchaselists', 'PurchaseListsController@destroybyids')->middleware('permission:采购单管理')
            ->name('api.purchaselists.destroybyids');

        //采购单详情
        $api->delete('purchasedetails/{purchasedetail}', 'PurchaseDetailsController@destroy')->middleware('permission:采购单管理')
            ->name('api.purchasedetails.destroy');
        $api->delete('purchasedetails', 'PurchaseDetailsController@destroybyids')->middleware('permission:采购单管理')
            ->name('api.purchasedetails.destroybyids');

        //入库类型
        $api->get('stockintypes', 'StockInTypesController@index')->middleware('permission:入库单管理')
            ->name('api.stockintypes.index');
        $api->get('stockintypes/{stockintype}', 'StockInTypesController@show')->middleware('permission:入库单管理')
            ->name('api.stockintypes.show');
        $api->post('stockintypes', 'StockInTypesController@store')->middleware('permission:入库单管理')
            ->name('api.stockintypes.store');
        $api->patch('stockintypes/{stockintype}', 'StockInTypesController@update')->middleware('permission:入库单管理')
            ->name('api.stockintypes.update');
        $api->delete('stockintypes/{stockintype}', 'StockInTypesController@destroy')->middleware('permission:入库单管理')
            ->name('api.stockintypes.destroy');
        $api->delete('stockintypes', 'StockInTypesController@destroybyids')->middleware('permission:入库单管理')
            ->name('api.stockintypes.destroybyids');
        $api->put('stockintypes/editstatus', 'StockInTypesController@editStatusByIds')->middleware('permission:入库单管理')
            ->name('api.stockintypes.editstatusbyids');

        //入库单
        $api->get('stockins', 'StockInsContoller@index')->middleware('permission:入库单管理')
            ->name('api.stockins.index');
        $api->get('stockins/{stockin}', 'StockInsContoller@show')->middleware('permission:入库单管理')
            ->name('api.stockins.show');
        $api->post('stockins', 'StockInsContoller@store')->middleware('permission:入库单管理')
            ->name('api.stockins.store');
        $api->patch('stockins/{stockin}', 'StockInsContoller@update')->middleware('permission:入库单管理')
            ->name('api.stockins.update');
        $api->delete('stockins/{stockin}', 'StockInsContoller@destroy')->middleware('permission:入库单管理')
            ->name('api.stockins.destroy');
        $api->delete('stockins', 'StockInsContoller@destroybyids')->middleware('permission:入库单管理')
            ->name('api.stockins.destroybyids');
        $api->put('stockins/editstatus', 'StockInsContoller@editStatusByIds')->middleware('permission:入库单管理')
            ->name('api.stockins.editstatusbyids');
        $api->put('stockins/{stockin}/submit', 'StockInsContoller@isSubmit')->middleware('permission:入库单管理')
            ->name('api.stockins.issubmit');
        $api->put('stockins/{stockin}/print', 'StockInsContoller@isPrint')->middleware('permission:入库单管理')
            ->name('api.stockins.isprint');
        $api->put('stockins/{stockin}/audit', 'StockInsContoller@isAudit')->middleware('permission:入库单管理')
            ->name('api.stockins.isAudit');
        $api->put('stockins/{stockin}/unaudit', 'StockInsContoller@isUnAudit')->middleware('permission:入库单管理')
            ->name('api.stockins.isUnAudit');
        $api->put('stockins/{stockin}/stockin', 'StockInsContoller@stockIn')->middleware('permission:入库单管理')
            ->name('api.stockins.stockin');

        //入库单详情
        $api->get('stockindetails', 'StockInDetailsController@index')->middleware('permission:入库单管理')
            ->name('api.stockindetails.index');
        $api->delete('stockindetails/{stockindetail}', 'StockInDetailsController@destroy')->middleware('permission:入库单管理')
            ->name('api.stockindetails.destroy');
        $api->delete('stockindetails', 'StockInDetailsController@destroybyids')->middleware('permission:入库单管理')
            ->name('api.stockindetails.destroybyids');

        //取消采购
        $api->get('cancelpurchases', 'CancelPurchasesController@index')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.index');
        $api->get('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@show')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.show');
        $api->post('cancelpurchases', 'CancelPurchasesController@store')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.store');
        $api->patch('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@update')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.update');
        $api->delete('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@destroy')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.destroy');
        $api->delete('cancelpurchases', 'CancelPurchasesController@destroybyids')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.destroybyids');
        $api->put('cancelpurchases/editstatus', 'CancelPurchasesController@editStatusByIds')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.editstatusbyids');
        $api->put('cancelpurchases/{cancelpurchase}/submit', 'CancelPurchasesController@isSubmit')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchases.issubmit');

        //取消采购单详情
        $api->get('cancelpurchasedetails', 'CancelPurchaseDetailsController@index')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchasedetails.index');
        $api->delete('cancelpurchasedetails/{cancelpurchasedetail}', 'CancelPurchaseDetailsController@destroy')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchasedetails.destroy');
        $api->delete('cancelpurchasedetails', 'CancelPurchaseDetailsController@destroybyids')->middleware('permission:取消采购管理')
            ->name('api.cancelpurchasedetails.destroybyids');

        //采购退货
        $api->get('purchasereturns', 'PurchaseReturnsController@index')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.index');
        $api->get('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@show')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.show');
        $api->post('purchasereturns', 'PurchaseReturnsController@store')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.store');
        $api->patch('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@update')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.update');
        $api->delete('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@destroy')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.destroy');
        $api->delete('purchasereturns', 'PurchaseReturnsController@destroybyids')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.destroybyids');
        $api->put('purchasereturns/editstatus', 'PurchaseReturnsController@editStatusByIds')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.editstatusbyids');
        $api->put('purchasereturns/{purchasereturn}/submit', 'PurchaseReturnsController@isSubmit')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.issubmit');
        $api->put('purchasereturns/{purchasereturn}/reject', 'PurchaseReturnsController@isReject')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.isReject');
        $api->put('purchasereturns/{purchasereturn}/audit', 'PurchaseReturnsController@isAudit')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.isAudit');
        $api->put('purchasereturns/{purchasereturn}/unaudit', 'PurchaseReturnsController@isUnAudit')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.isUnAudit');
        $api->put('purchasereturns/{purchasereturn}/print', 'PurchaseReturnsController@isPrint')->middleware('permission:采购退货管理')
            ->name('api.purchasereturns.isprint');

        //采购退货类型
        $api->get('purchasereturntypes', 'PurchaseReturnTypesController@index')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.index');
        $api->get('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@show')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.show');
        $api->post('purchasereturntypes', 'PurchaseReturnTypesController@store')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.store');
        $api->patch('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@update')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.update');
        $api->delete('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@destroy')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.destroy');
        $api->delete('purchasereturntypes', 'PurchaseReturnTypesController@destroybyids')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.destroybyids');
        $api->put('purchasereturntypes/editstatus', 'PurchaseReturnTypesController@editStatusByIds')->middleware('permission:采购退货管理')
            ->name('api.purchasereturntypes.editstatusbyids');

        //采购退货详情
        $api->get('purchasereturndetails', 'PurchaseReturnDetailsController@index')->middleware('permission:采购退货管理')
            ->name('api.purchasereturndetails.index');
        $api->delete('purchasereturndetails/{purchasereturndetail}', 'PurchaseReturnDetailsController@destroy')->middleware('permission:采购退货管理')
            ->name('api.purchasereturndetails.destroy');
        $api->delete('purchasereturndetails', 'PurchaseReturnDetailsController@destroybyids')
            ->name('api.purchasereturndetails.destroybyids');

        //提货方式
        $api->get('takedeliverygoodsways', 'TakeDeliveryGoodsWaysController@index')
            ->name('api.takedeliverygoodsways.index');
        $api->get('takedeliverygoodsways/{takedeliverygoodsway}', 'TakeDeliveryGoodsWaysController@show')
            ->name('api.takedeliverygoodsways.show');
        $api->post('takedeliverygoodsways', 'TakeDeliveryGoodsWaysController@store')
            ->name('api.takedeliverygoodsways.store');
        $api->patch('takedeliverygoodsways/{takedeliverygoodsway}', 'TakeDeliveryGoodsWaysController@update')
            ->name('api.takedeliverygoodsways.update');
        $api->delete('takedeliverygoodsways/{takedeliverygoodsway}', 'TakeDeliveryGoodsWaysController@destroy')
            ->name('api.takedeliverygoodsways.destroy');
        $api->delete('takedeliverygoodsways', 'TakeDeliveryGoodsWaysController@destroybyids')
            ->name('api.takedeliverygoodsways.destroybyids');
        $api->put('takedeliverygoodsways/editstatus', 'TakeDeliveryGoodsWaysController@editStatusByIds')
            ->name('api.takedeliverygoodsways.editstatusbyids');

        //付款方式
        $api->get('paymentmethods', 'PaymentMethodsController@index')
            ->name('api.paymentmethods.index');
        $api->get('paymentmethods/{paymentmethod}', 'PaymentMethodsController@show')
            ->name('api.paymentmethods.show');
        $api->post('paymentmethods', 'PaymentMethodsController@store')
            ->name('api.paymentmethods.store');
        $api->patch('paymentmethods/{paymentmethod}', 'PaymentMethodsController@update')
            ->name('api.paymentmethods.update');
        $api->delete('paymentmethods/{paymentmethod}', 'PaymentMethodsController@destroy')
            ->name('api.paymentmethods.destroy');
        $api->delete('paymentmethods', 'PaymentMethodsController@destroybyids')
            ->name('api.paymentmethods.destroybyids');
        $api->put('paymentmethods/editstatus', 'PaymentMethodsController@editStatusByIds')
            ->name('api.paymentmethods.editstatusbyids');

        //客户类型
        $api->get('customertypes', 'CustomerTypesController@index')
            ->name('api.customertypes.index');
        $api->get('customertypes/{customertype}', 'CustomerTypesController@show')
            ->name('api.customertypes.show');
        $api->post('customertypes', 'CustomerTypesController@store')
            ->name('api.customertypes.store');
        $api->patch('customertypes/{customertype}', 'CustomerTypesController@update')
            ->name('api.customertypes.update');
        $api->delete('customertypes/{customertype}', 'CustomerTypesController@destroy')
            ->name('api.customertypes.destroy');
        $api->delete('customertypes', 'CustomerTypesController@destroybyids')
            ->name('api.customertypes.destroybyids');
        $api->put('customertypes/editstatus', 'CustomerTypesController@editStatusByIds')
            ->name('api.customertypes.editstatusbyids');

        //客服部
        $api->get('customerservicedepts/searchall', 'CustomerServiceDepartmentsController@searchAll')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.searchall');
        $api->get('customerservicedepts/searchuntreated', 'CustomerServiceDepartmentsController@searchUntreated')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.searchuntreated');
        $api->get('customerservicedepts/searchisnotice', 'CustomerServiceDepartmentsController@searchIsNotice')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.searchisnotice');
        $api->get('customerservicedepts', 'CustomerServiceDepartmentsController@index')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.index');
        $api->get('customerservicedepts/logisticsQuery', 'CustomerServiceDepartmentsController@logisticsQuery')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.logisticsQuery');
        $api->get('customerservicedepts/orderCenter', 'CustomerServiceDepartmentsController@orderCenter')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.orderCenter');
        $api->get('customerservicedepts/searchordersettlement', 'CustomerServiceDepartmentsController@searchOrderSettlement')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.searchordersettlement');
        $api->get('customerservicedepts/create', 'CustomerServiceDepartmentsController@create')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.create');
        $api->get('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@show')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.show');
        $api->post('customerservicedepts', 'CustomerServiceDepartmentsController@store')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.store');
        $api->patch('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@update')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.update');
        $api->delete('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@destroy')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.destroy');
        $api->delete('customerservicedepts', 'CustomerServiceDepartmentsController@destroybyids')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.destroybyids');
        $api->put('customerservicedepts/editstatus', 'CustomerServiceDepartmentsController@editStatusByIds')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.editstatusbyids');
        $api->put('customerservicedepts/{order}/lockorunlock', 'CustomerServiceDepartmentsController@isLockOrUnlock')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.islockorunlock');
        $api->put('customerservicedepts/{order}/audit', 'CustomerServiceDepartmentsController@isAudit')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.isaudit');
        $api->put('customerservicedepts/{order}/unaudit', 'CustomerServiceDepartmentsController@isUnAudit')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.isunaudit');
        $api->put('customerservicedepts/{order}/splitorder', 'CustomerServiceDepartmentsController@isSplitOrder')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.issplitorder');
        $api->put('customerservicedepts/mergerorder', 'CustomerServiceDepartmentsController@isMergerOrder')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.ismergerorder');
        $api->put('customerservicedepts/{order}/notice', 'CustomerServiceDepartmentsController@isNotice')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.isnotice');
        $api->put('customerservicedepts/additionorder', 'CustomerServiceDepartmentsController@isAdditionOrder')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.isadditionorder');
        $api->put('customerservicedepts/additionmoney', 'CustomerServiceDepartmentsController@isAdditionMoney')->middleware('permission:客服部|跟单部')
            ->name('api.customerservicedepts.isadditionmoney');

        //订单结算
        $api->put('customerservicedepts/{order}/logcheck', 'CustomerServiceDepartmentsController@isLogCheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.islogcheck');
        $api->put('customerservicedepts/{order}/loguncheck', 'CustomerServiceDepartmentsController@isLogUncheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.isloguncheck');
        $api->put('customerservicedepts/{order}/discheck', 'CustomerServiceDepartmentsController@isDisCheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.isdischeck');
        $api->put('customerservicedepts/{order}/disuncheck', 'CustomerServiceDepartmentsController@isDisUncheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.isdisuncheck');
        $api->put('customerservicedepts/{order}/goodscheck', 'CustomerServiceDepartmentsController@isGoodsCheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.isgoodscheck');
        $api->put('customerservicedepts/{order}/goodsuncheck', 'CustomerServiceDepartmentsController@isGoodsUncheck')->middleware('permission:订单结算')
            ->name('api.customerservicedepts.usgoodsuncheck');

        //审计部
        $api->get('customerservicedepts/searchunaudit', 'CustomerServiceDepartmentsController@searchAudit')->middleware('permission:审计部')
            ->name('api.customerservicedepts.searchunaudit');
        $api->put('customerservicedepts/{order}/auditdeptsrejectaudit', 'CustomerServiceDepartmentsController@isAuditDeptsRejectAudit')->middleware('permission:审计部')
            ->name('api.customerservicedepts.isauditdeptsrejectaudit');
        $api->put('customerservicedepts/{order}/auditdeptsaudit', 'CustomerServiceDepartmentsController@isAuditDeptsAudit')->middleware('permission:审计部')
            ->name('api.customerservicedepts.isauditdeptsaudit');

        //子订单
        $api->delete('orderitems/{orderitem}', 'OrderItemsController@destroy')
            ->name('api.orderitems.destroy');

        //订单变更
        $api->get('changeorders/searchorders', 'CustomerServiceChangeOrdersController@searchOrders')->middleware('permission:订单变更')
            ->name('api.changeorders.searchorders');
        $api->get('changeorders/searchnew', 'CustomerServiceChangeOrdersController@searchNew')->middleware('permission:订单变更')
            ->name('api.changeorders.searchnew');
        $api->get('changeorders/searchuntreated', 'CustomerServiceChangeOrdersController@searchUntreated')->middleware('permission:订单变更')
            ->name('api.changeorders.searchuntreated');
        $api->get('changeorders/searchtreated', 'CustomerServiceChangeOrdersController@searchTreated')->middleware('permission:订单变更')
            ->name('api.changeorders.searchtreated');
        $api->get('changeorders/searchcanceled', 'CustomerServiceChangeOrdersController@searchCanceled')->middleware('permission:订单变更')
            ->name('api.changeorders.searchcanceled');
        $api->patch('changeorders/{order}', 'CustomerServiceChangeOrdersController@update')->middleware('permission:订单变更')
            ->name('api.changeorders.update');
        $api->put('changeorders/{order}/auditchanges', 'CustomerServiceChangeOrdersController@isAuditChanges')->middleware('permission:订单变更')
            ->name('api.changeorders.isauditchanges');
        $api->put('changeorders/{order}/audit', 'CustomerServiceChangeOrdersController@isAudit')->middleware('permission:订单变更')
            ->name('api.changeorders.isaudit');
        $api->put('changeorders/{order}/unaudit', 'CustomerServiceChangeOrdersController@isUnAudit')->middleware('permission:订单变更')
            ->name('api.changeorders.isunaudit');
        $api->put('changeorders/{order}/cancel', 'CustomerServiceChangeOrdersController@isCanceled')->middleware('permission:订单变更')
            ->name('api.changeorders.iscanceled');
        $api->put('changeorders/{order}/submit', 'CustomerServiceChangeOrdersController@isSubmit')->middleware('permission:订单变更')
            ->name('api.changeorders.issubmit');
        $api->get('changeorders/create', 'CustomerServiceChangeOrdersController@create')->middleware('permission:订单变更')
            ->name('api.changeorders.create');
        $api->get('changeorders/{order}', 'CustomerServiceChangeOrdersController@show')->middleware('permission:订单变更')
            ->name('api.changeorders.show');
        $api->post('changeorders', 'CustomerServiceChangeOrdersController@store')->middleware('permission:订单变更')
            ->name('api.changeorders.store');
        $api->patch('changeorders/{order}', 'CustomerServiceChangeOrdersController@update')->middleware('permission:订单变更')
            ->name('api.changeorders.update');
        $api->delete('changeorders/{order}', 'CustomerServiceChangeOrdersController@destroy')->middleware('permission:订单变更')
            ->name('api.changeorders.destroy');
        $api->delete('changeorders', 'CustomerServiceChangeOrdersController@destroybyids')->middleware('permission:订单变更')
            ->name('api.changeorders.destroybyids');
        $api->put('changeorders/editstatus', 'CustomerServiceChangeOrdersController@editStatusByIds')->middleware('permission:订单变更')
            ->name('api.changeorders.editstatusbyids');
        $api->put('changeorders/{order}/lockorunlock', 'CustomerServiceChangeOrdersController@isLockOrUnlock')->middleware('permission:订单变更')
            ->name('api.changeorders.islockorunlock');
        $api->put('changeorders/{order}/audit', 'CustomerServiceChangeOrdersController@isAudit')->middleware('permission:订单变更')
            ->name('api.changeorders.isaudit');
        $api->put('changeorders/{order}/unaudit', 'CustomerServiceChangeOrdersController@isUnAudit')->middleware('permission:订单变更')
            ->name('api.changeorders.isunaudit');
        $api->put('changeorders/{order}/splitorder', 'CustomerServiceChangeOrdersController@isSplitOrder')->middleware('permission:订单变更')
            ->name('api.changeorders.issplitorder');
        $api->put('changeorders/mergerorder', 'CustomerServiceChangeOrdersController@isMergerOrder')->middleware('permission:订单变更')
            ->name('api.changeorders.ismergerorder');

        //红包商品配置
        $api->get('redpackagemag', 'RedPackageController@index')->middleware('permission:客服部')
            ->name('api.redpackagemag.index');
        $api->get('redpackagemag/create', 'RedPackageController@create')->middleware('permission:客服部')
            ->name('api.redpackagemag.create');
        $api->get('redpackagemag/{order}', 'RedPackageController@show')->middleware('permission:客服部')
            ->name('api.redpackagemag.show');
        $api->post('redpackagemag', 'RedPackageController@store')->middleware('permission:客服部')
            ->name('api.redpackagemag.store');
        $api->patch('redpackagemag/{order}', 'RedPackageController@update')->middleware('permission:客服部')
            ->name('api.redpackagemag.update');
        $api->delete('redpackagemag/{order}', 'RedPackageController@destroy')->middleware('permission:客服部')
            ->name('api.redpackagemag.destroy');
        $api->delete('redpackagemag', 'RedPackageController@destroybyids')->middleware('permission:客服部')
            ->name('api.redpackagemag.destroybyids');
        $api->put('redpackagemag/editstatus', 'RedPackageController@editStatusByIds')->middleware('permission:客服部')
            ->name('api.redpackagemag.editstatusbyids');
        $api->put('redpackagemag/{order}/lockorunlock', 'RedPackageController@isLockOrUnlock')->middleware('permission:客服部')
            ->name('api.redpackagemag.islockorunlock');
        $api->put('redpackagemag/{order}/audit', 'RedPackageController@isAudit')->middleware('permission:客服部')
            ->name('api.redpackagemag.isaudit');
        $api->put('redpackagemag/{order}/unaudit', 'RedPackageController@isUnAudit')->middleware('permission:客服部')
            ->name('api.redpackagemag.isunaudit');
        $api->put('redpackagemag/{order}/splitorder', 'RedPackageController@isSplitOrder')->middleware('permission:客服部')
            ->name('api.redpackagemag.issplitorder');
        $api->put('redpackagemag/mergerorder', 'RedPackageController@isMergerOrder')->middleware('permission:客服部')
            ->name('api.redpackagemag.ismergerorder');

        //跟单部
        $api->get('merchandiserdepts', 'MerchandiserDepartmentsController@index')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.index');
        $api->get('merchandiserdepts/searchstockout', 'MerchandiserDepartmentsController@searchStockOut')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.searchstockout');
        $api->get('merchandiserdepts/{order}', 'MerchandiserDepartmentsController@show')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.show');
        $api->get('merchandiserdepts/{order}/stock', 'MerchandiserDepartmentsController@getStockByWarehouses')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.stock');
        $api->put('merchandiserdepts/{order}/unaudit', 'MerchandiserDepartmentsController@isUnAudit')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.isunaudit');
        $api->put('merchandiserdepts/{order}/oneaudit', 'MerchandiserDepartmentsController@isOneAudit')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.isoneaudit');
        $api->put('merchandiserdepts/{order}/unoneaudit', 'MerchandiserDepartmentsController@isUnOneAudit')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.isunoneaudit');
        $api->put('merchandiserdepts/{order}/cargoaudit', 'MerchandiserDepartmentsController@isCargoAudit')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.iscargoaudit');
        $api->patch('merchandiserdepts/{order}', 'MerchandiserDepartmentsController@update')->middleware('permission:跟单部')
            ->name('api.merchandiserdepts.update');
        // $api->put('merchandiserdepts/{order}/splitorder', 'MerchandiserDepartmentsController@isSplitOrder')->middleware('permission:跟单部')
        //     ->name('api.merchandiserdepts.issplitorder');
        // $api->put('merchandiserdepts/mergerorder', 'MerchandiserDepartmentsController@isMergerOrder')->middleware('permission:跟单部')
        //     ->name('api.merchandiserdepts.ismergerorder');

        //财务部
        $api->get('financialdepts', 'FinancialDepartmentsController@index')->middleware('permission:财务部')
            ->name('api.financialdepts.index');
        $api->put('financialdepts/{order}/reject', 'FinancialDepartmentsController@isReject')->middleware('permission:财务部')
            ->name('api.financialdepts.isreject');
        $api->put('financialdepts/{order}/financialaudit', 'FinancialDepartmentsController@isFinancialAudit')->middleware('permission:财务部')
            ->name('api.financialdepts.isFinancialAudit');
        $api->put('financialdepts/{order}/unfinancialaudit', 'FinancialDepartmentsController@isUnFinancialAudit')->middleware('permission:财务部')
            ->name('api.financialdepts.isunfinancialaudit');

        //支付明细
        $api->post('paymentdetails', 'PaymentDetailsController@store')->middleware('permission:客服部')
            ->name('api.paymentdetails.store');
        $api->patch('paymentdetails/{paymentdetail}', 'PaymentDetailsController@update')->middleware('permission:客服部')
            ->name('api.paymentdetails.update');
        $api->delete('paymentdetails/{paymentdetail}', 'PaymentDetailsController@destroy')->middleware('permission:客服部')
            ->name('api.paymentdetails.destroy');

        //仓储部
        $api->get('warehousingdepts', 'WarehousingDepartmentsController@index')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.index');
        $api->get('warehousingdepts/searchuntreated', 'WarehousingDepartmentsController@searchUntreated')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.searchuntreated');
        $api->get('warehousingdepts/{order}', 'WarehousingDepartmentsController@show')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.show');
        $api->patch('warehousingdepts/{order}', 'WarehousingDepartmentsController@update')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.update');
        $api->put('warehousingdepts/{order}/stockout', 'WarehousingDepartmentsController@isStockOut')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.isstockout');
        $api->put('warehousingdepts/{order}/stockoutunaudit', 'WarehousingDepartmentsController@isStockOutUnAudit')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.isstockoutunaudit');
        $api->put('warehousingdepts/{order}/stockouttocs', 'WarehousingDepartmentsController@isStockOutToCS')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.isstockouttocs');
        $api->put('warehousingdepts/{order}/isprintdispatchbill', 'WarehousingDepartmentsController@isPrintDispatchBill')->middleware('permission:仓储部')
            ->name('api.warehousingdepts.isprintdispatchbill');

        //客服退款申请
        $api->get('customerservicerefunds', 'CustomerServiceRefundsController@index')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.index');
        $api->get('customerservicerefunds/searchuntreated', 'CustomerServiceRefundsController@searchUntreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchuntreated');
        $api->get('customerservicerefunds/searchtreated', 'CustomerServiceRefundsController@searchTreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchtreated');
        $api->get('customerservicerefunds/searchasuntreated', 'CustomerServiceRefundsController@searchAsUntreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchasuntreated');
        $api->get('customerservicerefunds/searchastreated', 'CustomerServiceRefundsController@searchAsTreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchastreated');
        $api->get('customerservicerefunds/searchfduntreated', 'CustomerServiceRefundsController@searchFdUntreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchfduntreated');
        $api->get('customerservicerefunds/searchfdtreated', 'CustomerServiceRefundsController@searchFdTreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchfdtreated');
        $api->get('customerservicerefunds/searchalltreated', 'CustomerServiceRefundsController@searchAllTreated')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.searchalltreated');
        $api->get('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@show')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.show');
        $api->post('customerservicerefunds', 'CustomerServiceRefundsController@store')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.store');
        $api->patch('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@update')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.update');
        $api->delete('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@destroy')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.destroy');
        $api->delete('customerservicerefunds', 'CustomerServiceRefundsController@destroybyids')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.destroybyids');
        $api->put('customerservicerefunds/{refundorder}/asrefuse', 'CustomerServiceRefundsController@asRefuse')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.asrefuse');
        $api->put('customerservicerefunds/{refundorder}/lockorunlock', 'CustomerServiceRefundsController@isLockOrUnlock')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.islockorunlock');
        $api->put('customerservicerefunds/{refundorder}/aslockorunlock', 'CustomerServiceRefundsController@isAsLockOrUnlock')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isaslockorunlock');
        $api->put('customerservicerefunds/{refundorder}/fdlockorunlock', 'CustomerServiceRefundsController@isFdLockOrUnlock')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isfdlockorunlock');
        $api->put('customerservicerefunds/{refundorder}/audit', 'CustomerServiceRefundsController@isAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isaudit');
        $api->put('customerservicerefunds/{refundorder}/unaudit', 'CustomerServiceRefundsController@isUnAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isunaudit');
        $api->put('customerservicerefunds/{refundorder}/asaudit', 'CustomerServiceRefundsController@isAsAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isasaudit');
        $api->put('customerservicerefunds/{refundorder}/asunaudit', 'CustomerServiceRefundsController@isAsUnAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isasunaudit');
        $api->put('customerservicerefunds/{refundorder}/fdaudit', 'CustomerServiceRefundsController@isFdAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isfdaudit');
        $api->put('customerservicerefunds/{refundorder}/fdunaudit', 'CustomerServiceRefundsController@isFdUnAudit')->middleware('permission:客服退款申请')
            ->name('api.customerservicerefunds.isfdunaudit');

        // 退款类型
        $api->get('refundreasontype', 'RefundReasonTypeController@index')->middleware('permission:退款管理')
            ->name('api.refundreasontype.index');
        $api->get('refundreasontype/{refundreasontype}', 'RefundReasonTypeController@show')->middleware('permission:退款管理')
            ->name('api.refundreasontype.show');
        $api->post('refundreasontype', 'RefundReasonTypeController@store')->middleware('permission:退款管理')
            ->name('api.refundreasontype.store');
        $api->patch('refundreasontype/{refundreasontype}', 'RefundReasonTypeController@update')->middleware('permission:退款管理')
            ->name('api.refundreasontype.update');
        $api->delete('refundreasontype/{refundreasontype}', 'RefundReasonTypeController@destroy')->middleware('permission:退款管理')
            ->name('api.refundreasontype.destroy');
        $api->delete('refundreasontype', 'RefundReasonTypeController@destroybyids')->middleware('permission:退款管理')
            ->name('api.refundreasontype.destroybyids');
        $api->put('refundreasontype/editstatus', 'RefundReasonTypeController@editStatusByIds')->middleware('permission:退款管理')
            ->name('api.refundreasontype.editstatusbyids');

        //退款原因
        $api->get('refundreasons', 'RefundReasonsController@index')->middleware('permission:退款管理')
            ->name('api.refundreasons.index');
        $api->get('refundreasons/{refunreason}', 'RefundReasonsController@show')->middleware('permission:退款管理')
            ->name('api.refundreasons.show');
        $api->post('refundreasons', 'RefundReasonsController@store')->middleware('permission:退款管理')
            ->name('api.refundreasons.store');
        $api->patch('refundreasons/{refunreason}', 'RefundReasonsController@update')->middleware('permission:退款管理')
            ->name('api.refundreasons.update');
        $api->delete('refundreasons/{refunreason}', 'RefundReasonsController@destroy')->middleware('permission:退款管理')
            ->name('api.refundreasons.destroy');
        $api->delete('refundreasons', 'RefundReasonsController@destroybyids')->middleware('permission:退款管理')
            ->name('api.refundreasons.destroybyids');
        $api->put('refundreasons/editstatus', 'RefundReasonsController@editStatusByIds')->middleware('permission:退款管理')
            ->name('api.refundreasons.editstatusbyids');

        //退货原因
        $api->get('returnreasons', 'ReturnReasonsController@index')->middleware('permission:退款管理')
            ->name('api.returnreasons.index');
        $api->get('returnreasons/{returnreason}', 'ReturnReasonsController@show')->middleware('permission:退款管理')
            ->name('api.returnreasons.show');
        $api->post('returnreasons', 'ReturnReasonsController@store')->middleware('permission:退款管理')
            ->name('api.returnreasons.store');
        $api->patch('returnreasons/{returnreason}', 'ReturnReasonsController@update')->middleware('permission:退款管理')
            ->name('api.returnreasons.update');
        $api->delete('returnreasons/{returnreason}', 'ReturnReasonsController@destroy')->middleware('permission:退款管理')
            ->name('api.returnreasons.destroy');
        $api->delete('returnreasons', 'ReturnReasonsController@destroybyids')->middleware('permission:退款管理')
            ->name('api.returnreasons.destroybyids');
        $api->put('returnreasons/editstatus', 'ReturnReasonsController@editStatusByIds')->middleware('permission:退款管理')
            ->name('api.returnreasons.editstatusbyids');

        //售后退款申请
        $api->get('aftersalerefunds', 'AfterSaleRefundsController@index')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.index');
        $api->get('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@show')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.show');
        $api->patch('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@update')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.update');
        $api->delete('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@destroy')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.destroy');
        $api->delete('aftersalerefunds', 'AfterSaleRefundsController@destroybyids')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.destroybyids');
        $api->put('aftersalerefunds/{refundorder}/lockorunlock', 'AfterSaleRefundsController@isLockOrUnlock')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.islockorunlock');
        $api->put('aftersalerefunds/{refundorder}/audit', 'AfterSaleRefundsController@isAudit')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.isaudit');
        $api->put('aftersalerefunds/{refundorder}/unaudit', 'AfterSaleRefundsController@isUnAudit')->middleware('permission:售后退款申请')
            ->name('api.aftersalerefunds.isunaudit');

        //财务退款审核
        $api->get('financialrefunds', 'FinancialRefundsController@index')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.index');
        $api->get('financialrefunds/{returnorder}', 'FinancialRefundsController@show')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.show');
        $api->patch('financialrefunds/{returnorder}', 'FinancialRefundsController@update')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.update');
        $api->delete('financialrefunds/{returnorder}', 'FinancialRefundsController@destroy')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.destroy');
        $api->delete('financialrefunds', 'FinancialRefundsController@destroybyids')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.destroybyids');
        $api->put('financialrefunds/{returnorder}/lockorunlock', 'FinancialRefundsController@isLockOrUnlock')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.islockorunlock');
        $api->put('financialrefunds/{returnorder}/audit', 'FinancialRefundsController@isAudit')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.isaudit');
        $api->put('financialrefunds/{returnorder}/unaudit', 'FinancialRefundsController@isUnAudit')->middleware('permission:财务退款审核')
            ->name('api.financialrefunds.isunaudit');

        //客服退货
        $api->get('customerservicereturns', 'CustomerServiceReturnsController@index')->middleware('permission:客服部')
            ->name('api.customerservicereturns.index');
        $api->get('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@show')->middleware('permission:客服部')
            ->name('api.customerservicereturns.show');
        $api->post('customerservicereturns', 'CustomerServiceReturnsController@store')->middleware('permission:客服部')
            ->name('api.customerservicereturns.store');
        $api->patch('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@update')->middleware('permission:客服部')
            ->name('api.customerservicereturns.update');
        $api->delete('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@destroy')->middleware('permission:客服部')
            ->name('api.customerservicereturns.destroy');
        $api->delete('customerservicereturns', 'CustomerServiceReturnsController@destroybyids')->middleware('permission:客服部')
            ->name('api.customerservicereturns.destroybyids');
        $api->put('customerservicereturns/{returnorder}/oneaudit', 'CustomerServiceReturnsController@isOneAudit')->middleware('permission:客服部')
            ->name('api.customerservicereturns.isoneaudit');
        $api->put('customerservicereturns/{returnorder}/unoneaudit', 'CustomerServiceReturnsController@isUnOneAudit')->middleware('permission:客服部')
            ->name('api.customerservicereturns.isunoneaudit');
        $api->put('customerservicereturns/{returnorder}/twoaudit', 'CustomerServiceReturnsController@isTwoAudit')->middleware('permission:客服部')
            ->name('api.customerservicereturns.istwoaudit');
        $api->put('customerservicereturns/{returnorder}/untwoaudit', 'CustomerServiceReturnsController@isUnTwoAudit')->middleware('permission:客服部')
            ->name('api.customerservicereturns.isuntwoaudit');

        //售后退货
        $api->delete('aftersalereturns/{returnorder}', 'AfterSaleReturnsController@destroy')->middleware('permission:客服部')
            ->name('api.aftersalereturns.destroy');
        $api->put('aftersalereturns/{returnorder}/oneaudit', 'AfterSaleReturnsController@isOneAudit')->middleware('permission:客服部')
            ->name('api.aftersalereturns.isoneaudit');
        $api->put('aftersalereturns/{returnorder}/unoneaudit', 'AfterSaleReturnsController@isUnOneAudit')->middleware('permission:客服部')
            ->name('api.aftersalereturns.isunoneaudit');
        $api->put('aftersalereturns/{returnorder}/twoaudit', 'AfterSaleReturnsController@isTwoAudit')->middleware('permission:客服部')
            ->name('api.aftersalereturns.istwoaudit');
        $api->put('aftersalereturns/{returnorder}/untwoaudit', 'AfterSaleReturnsController@isUnTwoAudit')->middleware('permission:客服部')
            ->name('api.aftersalereturns.isuntwoaudit');

        //仓储退货
        /*$api->get('warehousingreturns', 'WarehousingReturnsController@index')->middleware('permission:客服部')
            ->name('api.warehousingreturns.index');
        $api->get('warehousingreturns/{returnorder}', 'WarehousingReturnsController@show')->middleware('permission:客服部')
            ->name('api.warehousingreturns.show');
        $api->put('warehousingreturns/{returnorder}/whaudit', 'WarehousingReturnsController@isWhAudit')->middleware('permission:客服部')
            ->name('api.warehousingreturns.iswhaudit');
        $api->put('warehousingreturns/{returnorder}/whunaudit', 'WarehousingReturnsController@isWhUnAudit')->middleware('permission:客服部')
            ->name('api.warehousingreturns.iswhunaudit');*/

        //收货方式
        /*$api->get('receipttypes', 'ReceiptTypesController@index')->middleware('permission:客服部')
            ->name('api.receipttypes.index');
        $api->get('receipttypes/{receipttype}', 'ReceiptTypesController@show')->middleware('permission:客服部')
            ->name('api.receipttypes.show');
        $api->post('receipttypes', 'ReceiptTypesController@store')->middleware('permission:客服部')
            ->name('api.receipttypes.store');
        $api->patch('receipttypes/{receipttype}', 'ReceiptTypesController@update')->middleware('permission:客服部')
            ->name('api.receipttypes.update');
        $api->delete('receipttypes/{receipttype}', 'ReceiptTypesController@destroy')->middleware('permission:客服部')
            ->name('api.receipttypes.destroy');
        $api->delete('receipttypes', 'ReceiptTypesController@destroybyids')->middleware('permission:客服部')
            ->name('api.receipttypes.destroybyids');
        $api->put('receipttypes/editstatus', 'ReceiptTypesController@editStatusByIds')->middleware('permission:客服部')
            ->name('api.receipttypes.editstatusbyids');*/

        //库存同步
        /*$api->get('stocksyncreturn', 'StockSyncReturnsController@index')->middleware('permission:客服部')
            ->name('api.stocksyncreturn.index');
        $api->get('stocksyncreturn/{returnorder}', 'StockSyncReturnsController@show')->middleware('permission:客服部')
            ->name('api.stocksyncreturn.show');
        $api->put('stocksyncreturn/{returnorder}/stocksubmit', 'StockSyncReturnsController@isStockSubmit')->middleware('permission:客服部')
            ->name('api.stocksyncreturn.isstocksubmit');
        $api->put('stocksyncreturn/{returnorder}/stocksync', 'StockSyncReturnsController@isStockSync')->middleware('permission:客服部')
            ->name('api.stocksyncreturn.isstocksync');*/

        //退货子单
        /*$api->delete('returnorderitems/{returnorderitem}', 'ReturnOrderItemsController@destroy')->middleware('permission:客服部')
            ->name('api.returnorderitems.destroy');*/

        //售后赔偿
        $api->get('aftercompensation/searchall', 'AfterCompensationController@searchAll')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchall');
        $api->get('aftercompensation/searchuntreated', 'AfterCompensationController@searchUntreated')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchuntreated');
        $api->get('aftercompensation/searchalluntreated', 'AfterCompensationController@searchAllUntreated')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchalluntreated');
        $api->get('aftercompensation/searchtreated', 'AfterCompensationController@searchTreated')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchtreated');
        $api->get('aftercompensation/searchsectreated', 'AfterCompensationController@searchSecTreated')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchtreated');
        $api->get('aftercompensation/searchcanceled', 'AfterCompensationController@searchCanceled')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.searchcanceled');
        $api->get('aftercompensation', 'AfterCompensationController@index')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.index');
        $api->get('aftercompensation/create', 'AfterCompensationController@create')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.create');
        $api->get('aftercompensation/{order}', 'AfterCompensationController@show')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.show');
        $api->post('aftercompensation', 'AfterCompensationController@store')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.store');
        $api->patch('aftercompensation/{order}', 'AfterCompensationController@update')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.update');
        $api->delete('aftercompensation/{order}', 'AfterCompensationController@destroy')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.destroy');
        $api->delete('aftercompensation', 'AfterCompensationController@destroybyids')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.destroybyids');
        $api->put('aftercompensation/editstatus', 'AfterCompensationController@editStatusByIds')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.editstatusbyids');
        $api->put('aftercompensation/{order}/lockorunlock', 'AfterCompensationController@isLockOrUnlock')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.islockorunlock');
        $api->put('aftercompensation/{order}/audit', 'AfterCompensationController@isAudit')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.isaudit');
        $api->put('aftercompensation/{order}/secaudit', 'AfterCompensationController@isSecAudit')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.issecaudit');
        $api->put('aftercompensation/{order}/unaudit', 'AfterCompensationController@isUnAudit')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.isunaudit');
        $api->put('aftercompensation/{order}/secunaudit', 'AfterCompensationController@isSecUnAudit')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.issecunaudit');
        $api->put('aftercompensation/{order}/splitorder', 'AfterCompensationController@isSplitOrder')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.issplitorder');
        $api->put('aftercompensation/mergerorder', 'AfterCompensationController@isMergerOrder')->middleware('permission:售后赔偿')
            ->name('api.aftercompensation.ismergerorder');

        //门店收款管理
        $api->get('shopgatheringmag', 'ShopGatheringMagController@index')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.index');
        $api->get('shopgatheringmag/{mag}', 'ShopGatheringMagController@show')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.show');
        $api->post('shopgatheringmag', 'ShopGatheringMagController@store')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.store');
        $api->patch('shopgatheringmag/{mag}', 'ShopGatheringMagController@update')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.update');
        $api->delete('shopgatheringmag/{mag}', 'ShopGatheringMagController@destroy')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.destroy');
        $api->delete('shopgatheringmag', 'ShopGatheringMagController@destroybyids')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.destroybyids');
        $api->put('shopgatheringmag/editstatus', 'ShopGatheringMagController@editStatusByIds')->middleware('permission:门店收款管理')
            ->name('api.shopgatheringmag.editstatusbyids');

        //评价类型
        $api->get('evalcategorymag', 'EvalCategoryMagController@index')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.index');
        $api->get('evalcategorymag/{mag}', 'EvalCategoryMagController@show')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.show');
        $api->post('evalcategorymag', 'EvalCategoryMagController@store')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.store');
        $api->patch('evalcategorymag/{mag}', 'EvalCategoryMagController@update')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.update');
        $api->delete('evalcategorymag/{mag}', 'EvalCategoryMagController@destroy')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.destroy');
        $api->delete('evalcategorymag', 'EvalCategoryMagController@destroybyids')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.destroybyids');
        $api->put('evalcategorymag/editstatus', 'EvalCategoryMagController@editStatusByIds')->middleware('permission:评价类别管理')
            ->name('api.evalcategorymag.editstatusbyids');

        //用户关联供应商
        $api->get('userastsupplier', 'UserAstSupplierController@index')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.index');
        $api->get('userastsupplier/{uas}', 'UserAstSupplierController@show')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.show');
        $api->post('userastsupplier', 'UserAstSupplierController@store')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.store');
        $api->patch('userastsupplier/{uas}', 'UserAstSupplierController@update')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.update');
        $api->delete('userastsupplier/{uas}', 'UserAstSupplierController@destroy')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.destroy');
        $api->delete('userastsupplier', 'UserAstSupplierController@destroybyids')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.destroybyids');
        $api->put('userastsupplier/editstatus', 'UserAstSupplierController@editStatusByIds')->middleware('permission:用户关联供应商')
            ->name('api.userastsupplier.editstatusbyids');

        //用户关联仓库
        $api->get('userastwarehouse', 'UserAstWarehouseController@index')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.index');
        $api->get('userastwarehouse/{uas}', 'UserAstWarehouseController@show')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.show');
        $api->post('userastwarehouse', 'UserAstWarehouseController@store')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.store');
        $api->patch('userastwarehouse/{uas}', 'UserAstWarehouseController@update')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.update');
        $api->delete('userastwarehouse/{uas}', 'UserAstWarehouseController@destroy')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.destroy');
        $api->delete('userastwarehouse', 'UserAstWarehouseController@destroybyids')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.destroybyids');
        $api->put('userastwarehouse/editstatus', 'UserAstWarehouseController@editStatusByIds')->middleware('permission:用户关联仓库')
            ->name('api.userastwarehouse.editstatusbyids');

        //打印机配置
        $api->get('printerconf', 'PrinterConfController@index')->middleware('permission:打印机配置')
            ->name('api.printerconf.index');
        $api->get('printerconf/{conf}', 'PrinterConfController@show')->middleware('permission:打印机配置')
            ->name('api.printerconf.show');
        $api->post('printerconf', 'PrinterConfController@store')->middleware('permission:打印机配置')
            ->name('api.printerconf.store');
        $api->patch('printerconf/{conf}', 'PrinterConfController@update')->middleware('permission:打印机配置')
            ->name('api.printerconf.update');
        $api->delete('printerconf/{conf}', 'PrinterConfController@destroy')->middleware('permission:打印机配置')
            ->name('api.printerconf.destroy');
        $api->delete('printerconf', 'PrinterConfController@destroybyids')->middleware('permission:打印机配置')
            ->name('api.printerconf.destroybyids');
        $api->put('printerconf/editstatus', 'PrinterConfController@editStatusByIds')->middleware('permission:打印机配置')
            ->name('api.printerconf.editstatusbyids');

        //负库存配置
        $api->get('negativeinvconf', 'NegativeInvConfController@index')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.index');
        $api->get('negativeinvconf/{conf}', 'NegativeInvConfController@show')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.show');
        $api->post('negativeinvconf', 'NegativeInvConfController@store')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.store');
        $api->patch('negativeinvconf/{conf}', 'NegativeInvConfController@update')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.update');
        $api->delete('negativeinvconf/{conf}', 'NegativeInvConfController@destroy')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.destroy');
        $api->delete('negativeinvconf', 'NegativeInvConfController@destroybyids')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.destroybyids');
        $api->put('negativeinvconf/editstatus', 'NegativeInvConfController@editStatusByIds')->middleware('permission:负库存配置')
            ->name('api.negativeinvconf.editstatusbyids');
        //问题产品
        $api->get('problemProduct', 'ProblemProductController@index')->middleware('permission:商品管理')
            ->name('api.problemProduct.index');
        $api->get('problemProduct/{problemProduct}', 'ProblemProductController@show')->middleware('permission:商品管理')
            ->name('api.problemProduct.show');
        $api->post('problemProduct', 'ProblemProductController@store')->middleware('permission:商品管理')
            ->name('api.problemProduct.store');
        $api->patch('problemProduct/{problemProduct}', 'ProblemProductController@update')->middleware('permission:商品管理')
            ->name('api.problemProduct.update');
        $api->delete('problemProduct/{problemProduct}', 'ProblemProductController@destroy')->middleware('permission:商品管理')
            ->name('api.problemProduct.destroy');
        $api->delete('problemProduct', 'ProblemProductController@destroybyids')->middleware('permission:商品管理')
            ->name('api.problemProduct.destroybyids');
        $api->put('problemProduct/editstatus', 'ProblemProductController@editStatusByIds')->middleware('permission:商品管理')
            ->name('api.problemProduct.editstatusbyids');

        //上传图片
        $api->post('uploadimages', 'UploadImagesController@store')
            ->name('api.uploadimages.store');

        //关联物流用户信息
        $api->get('relateLogistics', 'RelateLogisticsController@index')->middleware('permission:关联物流')
            ->name('api.relateLogistics.index');
        $api->post('relateLogistics', 'RelateLogisticsController@store')->middleware('permission:关联物流')
            ->name('api.relateLogistics.store');
        $api->delete('relateLogistics/{relateLogistics}', 'RelateLogisticsController@destroy')->middleware('permission:关联物流')
            ->name('api.relateLogistics.destroy');
        $api->delete('relateLogistics', 'RelateLogisticsController@destroybyids')->middleware('permission:关联物流')
            ->name('api.relateLogistics.destroybyids');
        $api->get('relateLogistics/{relateLogistics}', 'RelateLogisticsController@show')->middleware('permission:关联物流')
            ->name('api.relateLogistics.show');
        $api->patch('relateLogistics/{relateLogistics}', 'RelateLogisticsController@update')->middleware('permission:关联物流')
            ->name('api.relateLogistics.update');
        $api->put('relateLogistics/editstatus', 'RelateLogisticsController@editStatusByIds')->middleware('permission:关联物流')
            ->name('api.relateLogistics.editstatusbyids');
        //关联物流公司信息
        $api->get('relateLogisticsCompany', 'RelateLogisticsCompanyController@index')->middleware('permission:关联物流')
            ->name('api.relateLogisticsCompany.index');
        $api->delete('relateLogisticsCompany/{relateLogisticsCompany}', 'RelateLogisticsCompanyController@destroy')->middleware('permission:关联物流')
            ->name('api.relateLogisticsCompany.destroy');
        $api->delete('relateLogisticsCompany', 'RelateLogisticsCompanyController@destroybyids')->middleware('permission:关联物流')
            ->name('api.relateLogisticsCompany.destroybyids');
        $api->get('relateLogisticsCompany/{relateLogisticsCompany}', 'RelateLogisticsCompanyController@show')->middleware('permission:关联物流')
            ->name('api.relateLogisticsCompany.show');
        $api->put('relateLogisticsCompany/editstatus', 'RelateLogisticsCompanyController@editStatusByIds')->middleware('permission:关联物流')
            ->name('api.relateLogisticsCompany.editstatusbyids');
        //下载配置
        $api->get('downLoadConf', 'DownLoadConfController@index')->middleware('permission:下载配置')
            ->name('api.downLoadConf.index');
        $api->post('downLoadConf', 'DownLoadConfController@store')->middleware('permission:下载配置')
            ->name('api.downLoadConf.store');
        $api->delete('downLoadConf/{downLoadConf}', 'DownLoadConfController@destroy')->middleware('permission:下载配置')
            ->name('api.downLoadConf.destroy');
        $api->delete('downLoadConf', 'DownLoadConfController@destroybyIds')->middleware('permission:下载配置')
            ->name('api.downLoadConf.destroybyIds');
        $api->get('downLoadConf/{downLoadConf}', 'DownLoadConfController@show')->middleware('permission:下载配置')
            ->name('api.downLoadConf.show');
        $api->patch('downLoadConf/{downLoadConf}', 'DownLoadConfController@update')->middleware('permission:下载配置')
            ->name('api.downLoadConf.update');
        $api->put('downLoadConf/editstatus', 'DownLoadConfController@editStatusByIds')->middleware('permission:下载配置')
            ->name('api.downLoadConf.editstatusbyids');
        //买就送商品
        $api->get('buyAndSendPro', 'BuyAndSendProController@index')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.index');
        $api->post('buyAndSendPro', 'BuyAndSendProController@store')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.store');
        $api->delete('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@destroy')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.destroy');
        $api->delete('buyAndSendPro', 'BuyAndSendProController@destroybyids')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.destroybyids');
        $api->get('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@show')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.show');
        $api->patch('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@update')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.update');
        $api->put('buyAndSendPro/editstatus', 'BuyAndSendProController@editStatusByIds')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.editstatusbyids');
        $api->put('buyAndSendPro/{buyAndSendPro}/audit', 'BuyAndSendProController@isAudit')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.isaudit');
        $api->put('buyAndSendPro/{buyAndSendPro}/void', 'BuyAndSendProController@isVoid')->middleware('permission:买就送管理')
            ->name('api.buyAndSendPro.isaudit');
        //买就送赠品
        $api->get('buyAndSendGift', 'BuyAndSendGiftController@index')->middleware('permission:买就送管理')
            ->name('api.buyAndSendGift.index');
        $api->delete('buyAndSendGift/{buyAndSendGift}', 'BuyAndSendGiftController@destroy')->middleware('permission:买就送管理')
            ->name('api.buyAndSendGift.destroy');
        $api->delete('buyAndSendGift', 'BuyAndSendGiftController@destroybyids')->middleware('permission:买就送管理')
            ->name('api.buyAndSendGift.destroybyids');
        $api->get('buyAndSendGift/{buyAndSendGift}', 'BuyAndSendGiftController@show')->middleware('permission:买就送管理')
            ->name('api.buyAndSendGift.show');
        $api->put('buyAndSendGift/editstatus', 'BuyAndSendGiftController@editStatusByIds')->middleware('permission:买就送管理')
            ->name('api.buyAndSendGift.editstatusbyids');
        //产品Bom
        $api->get('proBom', 'ProBomController@index')->middleware('permission:产品Bom')
            ->name('api.proBom.index');
        $api->post('proBom', 'ProBomController@store')->middleware('permission:产品Bom')
            ->name('api.proBom.store');
        $api->delete('proBom/{proBom}', 'ProBomController@destroy')->middleware('permission:产品Bom')
            ->name('api.proBom.destroy');
        $api->delete('proBom', 'ProBomController@destroybyids')->middleware('permission:产品Bom')
            ->name('api.proBom.destroybyids');
        $api->get('proBom/{proBom}', 'ProBomController@show')->middleware('permission:产品Bom')
            ->name('api.proBom.show');
        $api->patch('proBom/{proBom}', 'ProBomController@update')->middleware('permission:产品Bom')
            ->name('api.proBom.update');
        $api->put('proBom/editstatus', 'ProBomController@editStatusByIds')->middleware('permission:产品Bom')
            ->name('api.proBom.editstatusbyids');
        //产品Bom原材料
        $api->get('proBomMaterial', 'ProBomMaterialController@index')->middleware('permission:产品Bom')
            ->name('api.proBomMaterial.index');
        $api->delete('proBomMaterial/{proBomMaterial}', 'ProBomMaterialController@destroy')->middleware('permission:产品Bom')
            ->name('api.proBomMaterial.destroy');
        $api->delete('proBomMaterial', 'ProBomMaterialController@destroybyids')->middleware('permission:产品Bom')
            ->name('api.proBomMaterial.destroybyids');
        $api->get('proBomMaterial/{proBomMaterial}', 'ProBomMaterialController@show')->middleware('permission:产品Bom')
            ->name('api.proBomMaterial.show');
        $api->put('proBomMaterial/editstatus', 'ProBomMaterialController@editStatusByIds')->middleware('permission:产品Bom')
            ->name('api.proBomMaterial.editstatusbyids');
        //包件类型
        $api->get('packageType', 'PackageTypeController@index')->middleware('permission:补件管理')
            ->name('api.packageType.index');
        $api->get('packageType/{packageType}', 'PackageTypeController@show')->middleware('permission:补件管理')
            ->name('api.packageType.show');
        $api->post('packageType', 'PackageTypeController@store')->middleware('permission:补件管理')
            ->name('api.packageType.store');
        $api->patch('packageType/{packageType}', 'PackageTypeController@update')->middleware('permission:补件管理')
            ->name('api.packageType.update');
        $api->delete('packageType/{packageType}', 'PackageTypeController@destroy')->middleware('permission:补件管理')
            ->name('api.packageType.destroy');
        $api->delete('packageType', 'PackageTypeController@destroybyids')->middleware('permission:补件管理')
            ->name('api.packageType.destroybyids');
        $api->put('packageType/editstatus', 'PackageTypeController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.packageType.editstatusbyids');
        //补件类别
        $api->get('resupplieCategory', 'ResupplieCategoryController@index')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.index');
        $api->get('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@show')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.show');
        $api->post('resupplieCategory', 'ResupplieCategoryController@store')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.store');
        $api->patch('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@update')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.update');
        $api->delete('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.destroy');
        $api->delete('resupplieCategory', 'ResupplieCategoryController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.destroybyids');
        $api->put('resupplieCategory/editstatus', 'ResupplieCategoryController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieCategory.editstatusbyids');
        //退款方式
        $api->get('refundMethod', 'RefundMethodController@index')->middleware('permission:补件管理')
            ->name('api.refundMethod.index');
        $api->get('refundMethod/{refundMethod}', 'RefundMethodController@show')->middleware('permission:补件管理')
            ->name('api.refundMethod.show');
        $api->post('refundMethod', 'RefundMethodController@store')->middleware('permission:补件管理')
            ->name('api.refundMethod.store');
        $api->patch('refundMethod/{refundMethod}', 'RefundMethodController@update')->middleware('permission:补件管理')
            ->name('api.refundMethod.update');
        $api->delete('refundMethod/{refundMethod}', 'RefundMethodController@destroy')->middleware('permission:补件管理')
            ->name('api.refundMethod.destroy');
        $api->delete('refundMethod', 'RefundMethodController@destroybyids')->middleware('permission:补件管理')
            ->name('api.refundMethod.destroybyids');
        $api->put('refundMethod/editstatus', 'RefundMethodController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.refundMethod.editstatusbyids');
        //补件单子单
        $api->get('resupplieOrderItem', 'ResuppliedOrderItemController@index')->middleware('permission:补件管理')
            ->name('api.resupplieOrderItem.index');
        $api->get('resupplieOrderItem/{resupplieOrderItem}', 'ResuppliedOrderItemController@show')->middleware('permission:补件管理')
            ->name('api.resupplieOrderItem.show');
        $api->delete('resupplieOrderItem/{resupplieOrderItem}', 'ResuppliedOrderItemController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieOrderItem.destroy');
        $api->delete('resupplieOrderItem', 'ResuppliedOrderItemController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieOrderItem.destroybyids');
        $api->put('resupplieOrderItem/editstatus', 'ResuppliedOrderItemController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieOrderItem.editstatusbyids');
        //补件问题产品
        $api->get('resupplieProblemProduct', 'ResupplieProblemProductController@index')->middleware('permission:补件管理')
            ->name('api.resupplieProblemProduct.index');
        $api->get('resupplieProblemProduct/{resupplieProblemProduct}', 'ResupplieProblemProductController@show')->middleware('permission:补件管理')
            ->name('api.resupplieProblemProduct.show');
        $api->delete('resupplieProblemProduct/{resupplieProblemProduct}', 'ResupplieProblemProductController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieProblemProduct.destroy');
        $api->delete('resupplieProblemProduct', 'ResupplieProblemProductController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieProblemProduct.destroybyids');
        $api->put('resupplieProblemProduct/editstatus', 'ResupplieProblemProductController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieProblemProduct.editstatusbyids');
        //补件责任方
        $api->get('resupplieResponsible', 'ResupplieResponsibleController@index')->middleware('permission:补件管理')
            ->name('api.resupplieResponsible.index');
        $api->get('resupplieResponsible/{resupplieResponsible}', 'ResupplieResponsibleController@show')->middleware('permission:补件管理')
            ->name('api.resupplieResponsible.show');
        $api->delete('resupplieResponsible/{resupplieResponsible}', 'ResupplieResponsibleController@destroy')->middleware('permission:补件责任方配置')
            ->name('api.resupplieResponsible.destroy');
        $api->delete('resupplieResponsible', 'ResupplieResponsibleController@destroybyids')->middleware('permission:补件责任方配置')
            ->name('api.resupplieResponsible.destroybyids');
        $api->put('resupplieResponsible/editstatus', 'ResupplieResponsibleController@editStatusByIds')->middleware('permission:补件责任方配置')
            ->name('api.resupplieResponsible.editstatusbyids');
        //补件图片信息
        $api->get('resupplieImage', 'ResupplieImageController@index')->middleware('permission:补件管理')
            ->name('api.resupplieImage.index');
        $api->get('resupplieImage/{resupplieImage}', 'ResupplieImageController@show')->middleware('permission:补件管理')
            ->name('api.resupplieImage.show');
        $api->delete('resupplieImage/{resupplieImage}', 'ResupplieImageController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieImage.destroy');
        $api->delete('resupplieImage', 'ResupplieImageController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieImage.destroybyids');
        $api->put('resupplieImage/editstatus', 'ResupplieImageController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieImage.editstatusbyids');
        //补件驳回原因
        $api->get('resupplieRejectReason', 'ResupplieRejectReasonController@index')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.index');
        $api->post('resupplieRejectReason', 'ResupplieRejectReasonController@store')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.store');
        $api->delete('resupplieRejectReason/{resupplieRejectReason}', 'ResupplieRejectReasonController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.destroy');
        $api->get('resupplieRejectReason/{resupplieRejectReason}', 'ResupplieRejectReasonController@show')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.show');
        $api->delete('resupplieRejectReason', 'ResupplieRejectReasonController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.destroybyids');
        $api->put('resupplieRejectReason/editstatus', 'ResupplieRejectReasonController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieRejectReason.editstatusbyids');
        //补件操作记录
        $api->get('resupplieOperationRecord', 'ResupplieOperationRecordController@index')->middleware('permission:补件管理')
            ->name('api.resupplieOperationRecord.index');
        $api->post('resupplieOperationRecord', 'ResupplieOperationRecordController@store')->middleware('permission:补件管理')
            ->name('api.resupplieOperationRecord.store');
        //补件进度
        $api->get('resupplieProgress', 'ResupplieProgressController@index')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.index');
        $api->post('resupplieProgress', 'ResupplieProgressController@store')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.store');
        $api->get('resupplieProgress/{resupplieProgress}', 'ResupplieProgressController@show')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.show');
        $api->patch('resupplieProgress/{resupplieProgress}', 'ResupplieProgressController@update')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.update');
        $api->delete('resupplieProgress/{resupplieProgress}', 'ResupplieProgressController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.destroy');
        $api->delete('resupplieProgress', 'ResupplieProgressController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieProgress.destroybyids');
        //补件采购明细
        $api->get('resuppliePurchase', 'ResuppliePurchaseController@index')->middleware('permission:补件管理')
            ->name('api.resuppliePurchase.index');
        $api->get('resuppliePurchase/{resuppliePurchase}', 'ResuppliePurchaseController@show')->middleware('permission:补件管理')
            ->name('api.resuppliePurchase.show');
        $api->delete('resuppliePurchase/{resuppliePurchase}', 'ResuppliePurchaseController@destroy')->middleware('permission:补件管理')
            ->name('api.resuppliePurchase.destroy');
        $api->delete('resuppliePurchase', 'ResuppliePurchaseController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resuppliePurchase.destroybyids');
        $api->put('resuppliePurchase/editstatus', 'ResuppliePurchaseController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resuppliePurchase.editstatusbyids');
        //补件电子面单
        $api->get('resupplieEsheet', 'ResupplieEsheetController@index')->middleware('permission:补件管理')
            ->name('api.resupplieEsheet.index');
        $api->get('resupplieEsheet/{resupplieEsheet}', 'ResupplieEsheetController@show')->middleware('permission:补件管理')
            ->name('api.resupplieEsheet.show');
        $api->delete('resupplieEsheet/{resupplieEsheet}', 'ResupplieEsheetController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieEsheet.destroy');
        $api->delete('resupplieEsheet', 'ResupplieEsheetController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieEsheet.destroybyids');
        $api->put('resupplieEsheet/editstatus', 'ResupplieEsheetController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieEsheet.editstatusbyids');
        //补件内部便签
        $api->get('resupplieInnerNote', 'ResupplieInnerNoteController@index')->middleware('permission:补件管理')
            ->name('api.resupplieInnerNote.index');
        $api->get('resupplieInnerNote/{resupplieInnerNote}', 'ResupplieInnerNoteController@show')->middleware('permission:补件管理')
            ->name('api.resupplieInnerNote.show');
        $api->delete('resupplieInnerNote/{resupplieInnerNote}', 'ResupplieInnerNoteController@destroy')->middleware('permission:补件管理')
            ->name('api.resupplieInnerNote.destroy');
        $api->delete('resupplieInnerNote', 'ResupplieInnerNoteController@destroybyids')->middleware('permission:补件管理')
            ->name('api.resupplieInnerNote.destroybyids');
        $api->put('resupplieInnerNote/editstatus', 'ResupplieInnerNoteController@editStatusByIds')->middleware('permission:补件管理')
            ->name('api.resupplieInnerNote.editstatusbyids');
        //补件申请
        $api->get('resupplieApplication', 'ResupplieApplicationController@index')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.index');
        $api->post('resupplieApplication', 'ResupplieApplicationController@store')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.store');
        $api->get('resupplieApplication/searchUnsubmited', 'ResupplieApplicationController@searchUnsubmited')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.searchUnsubmited');
        $api->get('resupplieApplication/searchSubmited', 'ResupplieApplicationController@searchSubmited')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.searchSubmited');
        $api->get('resupplieApplication/{resupplieOrder}', 'ResupplieApplicationController@show')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.show');
        $api->patch('resupplieApplication/{resupplieOrder}', 'ResupplieApplicationController@update')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.update');
        $api->patch('resupplieApplication/{resupplieOrder}/rejectReason', 'ResupplieApplicationController@rejectReason')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.rejectReason');
        $api->put('resupplieApplication/{resupplieOrder}/submit', 'ResupplieApplicationController@isSubmit')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.isSubmit');
        $api->put('resupplieApplication/{resupplieOrder}/reject', 'ResupplieApplicationController@isReject')->middleware('permission:补件管理')
            ->name('api.resupplieApplication.isReject');
        //补件审核
        $api->get('resupplieReview', 'ResupplieReviewController@index')->middleware('permission:补件管理')
            ->name('api.resupplieReview.index');
        $api->get('resupplieReview/searchBigPackage', 'ResupplieReviewController@searchBigPackage')->middleware('permission:补件管理')
            ->name('api.resupplieReview.searchBigPackage');
        $api->get('resupplieReview/searchPartPackage', 'ResupplieReviewController@searchPartPackage')->middleware('permission:补件管理')
            ->name('api.resupplieReview.searchPartPackage');
        $api->get('resupplieReview/searchMoneyPackage', 'ResupplieReviewController@searchMoneyPackage')->middleware('permission:补件管理')
            ->name('api.resupplieReview.searchMoneyPackage');
        $api->get('resupplieReview/searchReview', 'ResupplieReviewController@searchReview')->middleware('permission:补件管理')
            ->name('api.resupplieReview.searchReview');
        $api->get('resupplieReview/searchSettle', 'ResupplieReviewController@searchSettle')->middleware('permission:补件管理')
            ->name('api.resupplieReview.searchSettle');
        $api->put('resupplieReview/{resupplieOrder}/audit', 'ResupplieReviewController@isAudit')->middleware('permission:补件管理')
            ->name('api.resupplieReview.audit');
        $api->put('resupplieReview/{resupplieOrder}/auditfaild', 'ResupplieReviewController@isAuditFaild')->middleware('permission:补件管理')
            ->name('api.resupplieReview.auditfaild');
        $api->put('resupplieReview/{resupplieOrder}/settle', 'ResupplieReviewController@isSettle')->middleware('permission:补件管理')
            ->name('api.resupplieReview.settle');
        //补件发货
        $api->get('resupplieShip', 'ResupplieShipController@index')->middleware('permission:补件管理')
            ->name('api.resupplieShip.index');
        $api->get('resupplieShip/searchUnprint', 'ResupplieShipController@searchUnprint')->middleware('permission:补件管理')
            ->name('api.resupplieShip.searchUnprint');
        $api->get('resupplieShip/searchPrint', 'ResupplieShipController@searchPrint')->middleware('permission:补件管理')
            ->name('api.resupplieShip.searchPrint');
        $api->get('resupplieShip/searchUnconsign', 'ResupplieShipController@searchUnconsign')->middleware('permission:补件管理')
            ->name('api.resupplieShip.searchUnconsign');
        $api->get('resupplieShip/searchConsign', 'ResupplieShipController@searchConsign')->middleware('permission:补件管理')
            ->name('api.resupplieShip.searchConsign');
        $api->put('resupplieShip/{resupplieOrder}/examination', 'ResupplieShipController@examination')->middleware('permission:补件管理')
            ->name('api.resupplieShip.examination');
        $api->put('resupplieShip/{resupplieOrder}/consign', 'ResupplieShipController@isConsign')->middleware('permission:补件管理')
            ->name('api.resupplieShip.consign');
        $api->put('resupplieShip/{resupplieOrder}/print', 'ResupplieShipController@isPrint')->middleware('permission:补件管理')
            ->name('api.resupplieShip.print');
        //补件中心
        $api->get('resupplieCenter', 'ResupplieCenterController@index')->middleware('permission:补件管理')
            ->name('api.resupplieCenter.index');
        $api->put('resupplieCenter/{resupplieOrder}/invalid', 'ResupplieCenterController@isInvalid')->middleware('permission:补件管理')
            ->name('api.resupplieCenter.invalid');

        // 薛涛
        //产品映射
        $api->get('promap', 'ProMapController@index')->middleware('permission:产品映射')
            ->name('api.promap.index');
        $api->post('promap', 'ProMapController@store')->middleware('permission:产品映射')
            ->name('api.promap.store');
        $api->get('promap/{promap}', 'ProMapController@show')->middleware('permission:产品映射')
            ->name('api.promap.show');
        $api->patch('promap/{promap}', 'ProMapController@update')->middleware('permission:产品映射')
            ->name('api.promap.update');
        $api->delete('promap/{promap}', 'ProMapController@destroy')->middleware('permission:产品映射')
            ->name('api.promap.destroy');
        $api->delete('promap', 'ProMapController@destroybyids')->middleware('permission:产品映射')
            ->name('api.promap.destroybyids');
        $api->put('promap/editstatus', 'ProMapController@editStatusByIds')->middleware('permission:产品映射')
            ->name('api.promap.editstatusbyids');
        //最小包管理
        $api->get('minipackage', 'MiniPackageController@index')->middleware('permission:最小包管理')
            ->name('api.minipackage.index');
        $api->post('minipackage', 'MiniPackageController@store')->middleware('permission:最小包管理')
            ->name('api.minipackage.store');
        $api->get('minipackage/{minipackage}', 'MiniPackageController@show')->middleware('permission:最小包管理')
            ->name('api.minipackage.show');
        $api->patch('minipackage/{minipackage}', 'MiniPackageController@update')->middleware('permission:最小包管理')
            ->name('api.minipackage.update');
        $api->delete('minipackage/{minipackage}', 'MiniPackageController@destroy')->middleware('permission:最小包管理')
            ->name('api.minipackage.destroy');
        $api->delete('minipackage', 'MiniPackageController@destroybyids')->middleware('permission:最小包管理')
            ->name('api.minipackage.destroybyids');
        $api->put('minipackage/editstatus', 'MiniPackageController@editStatusByIds')->middleware('permission:最小包管理')
            ->name('api.minipackage.editstatusbyids');
        //线下账户配置
        $api->get('offlineaccountconf', 'OfflineAccountConfController@index')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.index');
        $api->post('offlineaccountconf', 'OfflineAccountConfController@store')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.store');
        $api->get('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@show')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.show');
        $api->patch('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@update')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.update');
        $api->delete('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@destroy')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.destroy');
        $api->delete('offlineaccountconf', 'OfflineAccountConfController@destroybyids')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.destroybyids');
        $api->put('offlineaccountconf/editstatus', 'OfflineAccountConfController@editStatusByIds')->middleware('permission:线下账户配置')
            ->name('api.offlineaccountconf.editstatusbyids');
        //刷单锁单配置
        $api->get('brushlockconf', 'BrushLockConfController@index')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.index');
        $api->post('brushlockconf', 'BrushLockConfController@store')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.store');
        $api->get('brushlockconf/{brushlockconf}', 'BrushLockConfController@show')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.show');
        $api->patch('brushlockconf/{brushlockconf}', 'BrushLockConfController@update')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.update');
        $api->delete('brushlockconf/{brushlockconf}', 'BrushLockConfController@destroy')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.destroy');
        $api->delete('brushlockconf', 'BrushLockConfController@destroybyids')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.destroybyids');
        $api->put('brushlockconf/editstatus', 'BrushLockConfController@editStatusByIds')->middleware('permission:刷单锁单配置')
            ->name('api.brushlockconf.editstatusbyids');
        //售后状态
        $api->get('aftersalestate', 'AfterSaleStateController@index')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.index');
        $api->get('aftersalestate/{state}', 'AfterSaleStateController@show')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.show');
        $api->post('aftersalestate', 'AfterSaleStateController@store')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.store');
        $api->patch('aftersalestate/{state}', 'AfterSaleStateController@update')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.update');
        $api->delete('aftersalestate/{state}', 'AfterSaleStateController@destroy')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.destroy');
        $api->delete('aftersalestate', 'AfterSaleStateController@destroybyids')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.destroybyids');
        $api->put('aftersalestate/editstatus', 'AfterSaleStateController@editStatusByIds')->middleware('permission:售后状态管理')
            ->name('api.aftersalestate.editstatusbyids');
        //售后类型
        $api->get('aftersaletype', 'AfterSaleTypeController@index')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.index');
        $api->get('aftersaletype/{type}', 'AfterSaleTypeController@show')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.show');
        $api->post('aftersaletype', 'AfterSaleTypeController@store')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.store');
        $api->patch('aftersaletype/{type}', 'AfterSaleTypeController@update')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.update');
        $api->delete('aftersaletype/{type}', 'AfterSaleTypeController@destroy')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.destroy');
        $api->delete('aftersaletype', 'AfterSaleTypeController@destroybyids')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.destroybyids');
        $api->put('aftersaletype/editstatus', 'AfterSaleTypeController@editStatusByIds')->middleware('permission:售后类型管理')
            ->name('api.aftersaletype.editstatusbyids');
        //售后管理
        $api->get('aftersale', 'AfterSaleController@index')->middleware('permission:售后管理')
            ->name('api.aftersale.index');
        $api->post('aftersale', 'AfterSaleController@store')->middleware('permission:售后管理')
            ->name('api.aftersale.store');
        $api->get('aftersale/{aftersale}', 'AfterSaleController@show')->middleware('permission:售后管理')
            ->name('api.aftersale.show');
        $api->patch('aftersale/{aftersale}', 'AfterSaleController@update')->middleware('permission:售后管理')
            ->name('api.aftersale.update');
        $api->delete('aftersale/{aftersale}', 'AfterSaleController@destroy')->middleware('permission:售后管理')
            ->name('api.aftersale.destroy');
        $api->delete('aftersale', 'AfterSaleController@destroybyids')->middleware('permission:售后管理')
            ->name('api.aftersale.destroybyids');
        $api->put('aftersale/editstatus', 'AfterSaleController@editStatusByIds')->middleware('permission:售后管理')
            ->name('api.aftersale.editstatusbyids');
        $api->put('aftersale/{aftersale}/lockorunlock', 'AfterSaleController@isLockOrUnlock')->middleware('permission:售后管理')
            ->name('api.aftersale.islockorunlock');
        $api->put('aftersale/{aftersale}/audit', 'AfterSaleController@isAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.isaudit');
        $api->put('aftersale/{aftersale}/unaudit', 'AfterSaleController@isUnAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.isunaudit');
        $api->put('aftersale/{aftersale}/oneaudit', 'AfterSaleController@isOneAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.isoneaudit');
        $api->put('aftersale/{aftersale}/unoneaudit', 'AfterSaleController@isUnOneAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.isunoneaudit');
        $api->put('aftersale/{aftersale}/twoaudit', 'AfterSaleController@isTwoAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.istwoaudit');
        $api->put('aftersale/{aftersale}/untwoaudit', 'AfterSaleController@isUnTwoAudit')->middleware('permission:售后管理')
            ->name('api.aftersale.isuntwoaudit');
        $api->put('aftersale/{aftersale}/reject', 'AfterSaleController@isReject')->middleware('permission:售后管理')
            ->name('api.aftersale.isreject');
        $api->put('aftersale/{aftersale}/finish', 'AfterSaleController@isFinish')->middleware('permission:售后管理')
            ->name('api.aftersale.isfinish');
        // 售后进度
        $api->get('aftersaleschedule', 'AfterSaleScheduleController@index')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.index');
        $api->get('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@show')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.show');
        $api->post('aftersaleschedule', 'AfterSaleScheduleController@store')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.store');
        $api->patch('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@update')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.update');
        $api->delete('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@destroy')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.destroy');
        $api->delete('aftersaleschedule', 'AfterSaleScheduleController@destroybyids')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.destroybyids');
        $api->put('aftersaleschedule/editstatus', 'AfterSaleScheduleController@editStatusByIds')->middleware('permission:售后管理')
            ->name('api.aftersaleschedule.editstatusbyids');
        // 售后问题产品
        $api->get('aftersaledefpro', 'AfterSaleDefProController@index')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.index');
        $api->get('aftersaledefpro/{aftersaledefpro}', 'AfterSaleDefProController@show')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.show');
        $api->post('aftersaledefpro', 'AfterSaleDefProController@store')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.store');
        $api->delete('aftersaledefpro/{aftersaledefpro}', 'AfterSaleDefProController@destroy')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.destroy');
        $api->delete('aftersaledefpro', 'AfterSaleDefProController@destroybyids')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.destroybyids');
        $api->put('aftersaledefpro/editstatus', 'AfterSaleDefProController@editStatusByIds')->middleware('permission:售后管理')
            ->name('api.aftersaledefpro.editstatusbyids');
        // 薛涛

        //退货子单
        /*$api->delete('returnorderitems/{returnorderitem}', 'ReturnOrderItemsController@destroy')
            ->name('api.returnorderitems.destroy');*/

        //报表统计
        $api->get('reportstatistics', 'ReportStatisticsController@index')->middleware('permission:报表统计')
            ->name('api.reportstatistics.index');
        $api->get('reportstatistics/orderAmount', 'ReportStatisticsController@orderAmount')->middleware('permission:报表统计')
            ->name('api.reportstatistics.orderamount');
        $api->get('reportstatistics/indexreport', 'ReportStatisticsController@indexReport')
            ->name('api.reportstatistics.indexreport');
        $api->get('reportstatistics/{reportstatistics}', 'ReportStatisticsController@show')->middleware('permission:报表统计')
            ->name('api.reportstatistics.show');
        $api->post('reportstatistics', 'ReportStatisticsController@store')->middleware('permission:报表统计')
            ->name('api.reportstatistics.store');
        $api->delete('reportstatistics/{reportstatistics}', 'ReportStatisticsController@destroy')->middleware('permission:报表统计')
            ->name('api.reportstatistics.destroy');
        $api->delete('reportstatistics', 'ReportStatisticsController@destroybyids')->middleware('permission:报表统计')
            ->name('api.reportstatistics.destroybyids');
        $api->put('reportstatistics/editstatus', 'ReportStatisticsController@editStatusByIds')->middleware('permission:报表统计')
            ->name('api.reportstatistics.editstatusbyids');

        //角色管理
        $api->get('roles', 'RolesController@index')->middleware('permission:角色管理')
            ->name('api.roles.index');
        $api->get('roles/{roles}', 'RolesController@show')->middleware('permission:角色管理')
            ->name('api.roles.show');
        $api->post('roles', 'RolesController@insertRole')->middleware('permission:角色管理')
            ->name('api.roles.insertRole');
        $api->post('roles/giverolespermission', 'RolesController@giveRolesPermission')->middleware('permission:角色管理')
            ->name('api.roles.giveRolesPermission');
        $api->patch('roles/{roles}', 'RolesController@update')->middleware('permission:角色管理')
            ->name('api.roles.update');
        $api->delete('roles/{roles}', 'RolesController@destroyByIds')->middleware('permission:角色管理')
            ->name('api.roles.destroybyids');

        //权限管理
        $api->get('permissions/{permissions}', 'PermissionsController@index')->middleware('permission:角色管理')
            ->name('api.permissions.index');

        $api->get('rolegroup', 'RoleGroupController@index')->middleware('permission:角色管理')
            ->name('api.roles.index');

        //获取权限
        $api->get('permissions', 'PermissionsController@index')->middleware('permission:角色管理')
            ->name('api.permissions.index');
        //上传图片
        $api->post('uploadimages', 'UploadImagesController@store')
            ->name('api.uploadimages.store');

        //excel导入导出功能
        $api->get('excel', 'ExcelController@ordersExport')
            ->name('api.excel.ordersexport');

        $api->get('users', 'UsersController@index')->middleware('permission:用户管理')
            ->name('api.users.index');
        $api->post('users/create', 'UsersController@storeUser')->middleware('permission:用户管理')
            ->name('api.users.storeuser');
        $api->post('users/setroles', 'UsersController@setRoles')->middleware('permission:用户管理')
            ->name('api.users.setroles');
        $api->get('users/{users}/getrolesassociateusers', 'UsersController@getRolesAssociateUsers')->middleware('permission:用户管理')
            ->name('api.users.getrolesassociateusers');
    });
    $api->group([
        'middleware' => 'api.throttle',
        'limit' => config('api.rate_limits.sign.limit'),
        'expires' => config('api.rate_limits.sign.expires'),
        'grouptitle' => '用户中心',
    ], function (Dingo\Api\Routing\Router $api) {
        // 用户注册
        $api->post('users', 'UsersController@store')
            ->name('api.users.store');
        // 登录
        $api->post('authorizations', 'AuthorizationsController@store')
            ->name('api.authorizations.store');
        $api->post('me', 'AuthorizationsController@me')->middleware('token.canrefresh');
        // 刷新token
        $api->put('authorizations/current', 'AuthorizationsController@update')
            ->name('api.authorizations.update');
        // 删除token（退出登录）
        $api->delete('authorizations/current', 'AuthorizationsController@destroy')
            ->name('api.authorizations.destroy');
    });
});
