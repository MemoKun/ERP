<?php

use Illuminate\Http\Request;

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

$api->version('v1', ['namespace' => 'App\Http\Controllers\Api', 'middleware' => ['serializer:array', 'bindings']], function ($api) {
    // 图片验证码
    $api->post('captchas', 'CaptchasController@store')
        ->name('api.captchas.store');
    //页面请求
    $api->group([
        'middleware' => [
            'api.throttle',
            'token.canrefresh',
            'stringtoboolean'//将字符串的“true”或“false”转为布尔类型
        ],
        'limit' => config('api.rate_limits.access.limit'),
        'expires' => config('api.rate_limits.access.expires'),
    ], function ($api) {
        //标记颜色
        $api->get('markcolors', 'MarkColorsController@index')
            ->name('api.markcolors.index');
        $api->get('markcolors/{markcolor}', 'MarkColorsController@show')
            ->name('api.markcolors.show');
        $api->post('markcolors', 'MarkColorsController@store')
            ->name('api.markcolors.store');
        $api->patch('markcolors/{markcolor}', 'MarkColorsController@update')
            ->name('api.markcolors.update');
        $api->delete('markcolors/{markcolor}', 'MarkColorsController@destroy')
            ->name('api.markcolors.destroy');
        $api->delete('markcolors', 'MarkColorsController@destroybyids')
            ->name('api.markcolors.destroybyids');
        $api->put('markcolors/editstatus', 'MarkColorsController@editStatusByIds')
            ->name('api.markcolors.editstatusbyids');

        //记账类型
        $api->get('acctypes', 'AccountingTypesController@index')
            ->name('api.acctypes.index');
        $api->get('acctypes/{acctype}', 'AccountingTypesController@show')
            ->name('api.acctypes.show');
        $api->post('acctypes', 'AccountingTypesController@store')
            ->name('api.acctypes.store');
        $api->patch('acctypes/{acctype}', 'AccountingTypesController@update')
            ->name('api.acctypes.update');
        $api->delete('acctypes/{acctype}', 'AccountingTypesController@destroy')
            ->name('api.acctypes.destroy');
        $api->delete('acctypes', 'AccountingTypesController@destroybyids')
            ->name('api.acctypes.destroybyids');
        $api->put('acctypes/editstatus', 'AccountingTypesController@editStatusByIds')
            ->name('api.acctypes.editstatusbyids');

            
        //费用类型
        $api->get('feetypes', 'FeeTypesController@index')
            ->name('api.feetypes.index');
        $api->get('feetypes/{feetype}', 'FeeTypesController@show')
            ->name('api.feetypes.show');
        $api->post('feetypes', 'FeeTypesController@store')
            ->name('api.feetypes.store');
        $api->patch('feetypes/{feetype}', 'FeeTypesController@update')
            ->name('api.feetypes.update');
        $api->delete('feetypes/{feetype}', 'FeeTypesController@destroy')
            ->name('api.feetypes.destroy');
        $api->delete('feetypes', 'FeeTypesController@destroybyids')
            ->name('api.feetypes.destroybyids');
        $api->put('feetypes/editstatus', 'FeeTypesController@editStatusByIds')
            ->name('api.feetypes.editstatusbyids');

        //运输方式
        $api->get('distmets', 'DistributionMethodsController@index')
            ->name('api.distmets.index');
        $api->get('distmets/{distmet}', 'DistributionMethodsController@show')
            ->name('api.distmets.show');
        $api->post('distmets', 'DistributionMethodsController@store')
            ->name('api.distmets.store');
        $api->patch('distmets/{distmet}', 'DistributionMethodsController@update')
            ->name('api.distmets.update');
        $api->delete('distmets/{distmet}', 'DistributionMethodsController@destroy')
            ->name('api.distmets.destroy');
        $api->delete('distmets', 'DistributionMethodsController@destroybyids')
            ->name('api.distmets.destroybyids');
        $api->put('distmets/editstatus', 'DistributionMethodsController@editStatusByIds')
            ->name('api.distmets.editstatusbyids');

        //费用类别
        $api->get('feecates', 'FeeCategoriesController@index')
            ->name('api.feecates.index');
        $api->get('feecates/{feecate}', 'FeeCategoriesController@show')
            ->name('api.feecates.show');
        $api->post('feecates', 'FeeCategoriesController@store')
            ->name('api.feecates.store');
        $api->patch('feecates/{feecate}', 'FeeCategoriesController@update')
            ->name('api.feecates.update');
        $api->delete('feecates/{feecate}', 'FeeCategoriesController@destroy')
            ->name('api.feecates.destroy');
        $api->delete('feecates', 'FeeCategoriesController@destroybyids')
            ->name('api.feecates.destroybyids');
        $api->put('feecates/editstatus', 'FeeCategoriesController@editStatusByIds')
            ->name('api.feecates.editstatusbyids');

        //运费类型
        $api->get('freighttypes', 'FreightTypesController@index')
            ->name('api.freighttypes.index');
        $api->get('freighttypes/{freighttype}', 'FreightTypesController@show')
            ->name('api.freighttypes.show');
        $api->post('freighttypes', 'FreightTypesController@store')
            ->name('api.freighttypes.store');
        $api->patch('freighttypes/{freighttype}', 'FreightTypesController@update')
            ->name('api.freighttypes.update');
        $api->delete('freighttypes/{freighttype}', 'FreightTypesController@destroy')
            ->name('api.freighttypes.destroy');
        $api->delete('freighttypes', 'FreightTypesController@destroybyids')
            ->name('api.freighttypes.destroybyids');
        $api->put('freighttypes/editstatus', 'FreightTypesController@editStatusByIds')
            ->name('api.freighttypes.editstatusbyids');

        //商品类别
        $api->get('goodscates', 'GoodsCategoriesController@index')
            ->name('api.goodscates.index');
        $api->get('goodscates/{goodscate}', 'GoodsCategoriesController@show')
            ->name('api.goodscates.show');
        $api->post('goodscates', 'GoodsCategoriesController@store')
            ->name('api.goodscates.store');
        $api->patch('goodscates/{goodscate}', 'GoodsCategoriesController@update')
            ->name('api.goodscates.update');
        $api->delete('goodscates/{goodscate}', 'GoodsCategoriesController@destroy')
            ->name('api.goodscates.destroy');
        $api->delete('goodscates', 'GoodsCategoriesController@destroybyids')
            ->name('api.goodscates.destroybyids');
        $api->put('goodscates/editstatus', 'GoodsCategoriesController@editStatusByIds')
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
        $api->get('cityinfos', 'CityInfosController@index')
            ->name('api.cityinfos.index');
        $api->get('cityinfos/{cityinfo}', 'CityInfosController@show')
            ->name('api.cityinfos.show');
        $api->post('cityinfos', 'CityInfosController@store')
            ->name('api.cityinfos.store');
        $api->patch('cityinfos/{cityinfo}', 'CityInfosController@update')
            ->name('api.cityinfos.update');
        $api->delete('cityinfos/{cityinfo}', 'CityInfosController@destroy')
            ->name('api.cityinfos.destroy');
        $api->delete('cityinfos', 'CityInfosController@destroybyids')
            ->name('api.cityinfos.destroybyids');
        $api->put('cityinfos/editstatus', 'CityInfosController@editStatusByIds')
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
        $api->get('logisticsareas', 'LogisticsAreasController@index')
            ->name('api.logisticsareas.index');
        $api->get('logisticsareas/{logisticsarea}', 'LogisticsAreasController@show')
            ->name('api.logisticsareas.show');
        $api->post('logisticsareas', 'LogisticsAreasController@store')
            ->name('api.logisticsareas.store');
        $api->patch('logisticsareas/{logisticsarea}', 'LogisticsAreasController@update')
            ->name('api.logisticsareas.update');
        $api->delete('logisticsareas/{logisticsarea}', 'LogisticsAreasController@destroy')
            ->name('api.logisticsareas.destroy');
        $api->delete('logisticsareas', 'LogisticsAreasController@destroybyids')
            ->name('api.logisticsareas.destroybyids');
        $api->put('logisticsareas/editstatus', 'LogisticsAreasController@editStatusByIds')
            ->name('api.logisticsareas.editstatusbyids');  

        //物流资源
        $api->get('logistics', 'LogisticsController@index')
            ->name('api.logistics.index');
        $api->get('logistics/{logistics}', 'LogisticsController@show')
            ->name('api.logistics.show');
        $api->post('logistics', 'LogisticsController@store')
            ->name('api.logistics.store');
        $api->patch('logistics/{logistics}', 'LogisticsController@update')
            ->name('api.logistics.update');
        $api->delete('logistics/{logistics}', 'LogisticsController@destroy')
            ->name('api.logistics.destroy');
        $api->delete('logistics', 'LogisticsController@destroybyids')
            ->name('api.logistics.destroybyids');
        $api->put('logistics/editstatus', 'LogisticsController@editStatusByIds')
            ->name('api.logistics.editstatusbyids');

        //物流资源
        $api->get('warehouses', 'WarehousesController@index')
            ->name('api.warehouses.index');
        $api->get('warehouses/{warehouse}', 'WarehousesController@show')
            ->name('api.warehouses.show');
        $api->post('warehouses', 'WarehousesController@store')
            ->name('api.warehouses.store');
        $api->patch('warehouses/{warehouse}', 'WarehousesController@update')
            ->name('api.warehouses.update');
        $api->delete('warehouses/{warehouse}', 'WarehousesController@destroy')
            ->name('api.warehouses.destroy');
        $api->delete('warehouses', 'WarehousesController@destroybyids')
            ->name('api.warehouses.destroybyids');
        $api->put('warehouses/editstatus', 'WarehousesController@editStatusByIds')
            ->name('api.warehouses.editstatusbyids');

        //配送资源
        $api->get('distributions', 'DistributionsController@index')
            ->name('api.distributions.index');
        $api->get('distributions/{distribution}', 'DistributionsController@show')
            ->name('api.distributions.show');
        $api->post('distributions', 'DistributionsController@store')
            ->name('api.distributions.store');
        $api->patch('distributions/{distribution}', 'DistributionsController@update')
            ->name('api.distributions.update');
        $api->delete('distributions/{distribution}', 'DistributionsController@destroy')
            ->name('api.distributions.destroy');
        $api->delete('distributions', 'DistributionsController@destroybyids')
            ->name('api.distributions.destroybyids');
        $api->put('distributions/editstatus', 'DistributionsController@editStatusByIds')
            ->name('api.distributions.editstatusbyids');

        //配送类型资源
        $api->get('distributiontypes', 'DistributionTypesController@index')
            ->name('api.distributiontypes.index');
        $api->get('distributiontypes/{distributiontype}', 'DistributionTypesController@show')
            ->name('api.distributiontypes.show');
        $api->post('distributiontypes', 'DistributionTypesController@store')
            ->name('api.distributiontypes.store');
        $api->patch('distributiontypes/{distributiontype}', 'DistributionTypesController@update')
            ->name('api.distributiontypes.update');
        $api->delete('distributiontypes/{distributiontype}', 'DistributionTypesController@destroy')
            ->name('api.distributiontypes.destroy');
        $api->delete('distributiontypes', 'DistributionTypesController@destroybyids')
            ->name('api.distributiontypes.destroybyids');
        $api->put('distributiontypes/editstatus', 'DistributionTypesController@editStatusByIds')
            ->name('api.distributiontypes.editstatusbyids');

        //供应商资源
        $api->get('suppliers', 'SuppliersController@index')
            ->name('api.suppliers.index');
        $api->get('suppliers/{supplier}', 'SuppliersController@show')
            ->name('api.suppliers.show');
        $api->post('suppliers', 'SuppliersController@store')
            ->name('api.suppliers.store');
        $api->patch('suppliers/{supplier}', 'SuppliersController@update')
            ->name('api.suppliers.update');
        $api->delete('suppliers/{supplier}', 'SuppliersController@destroy')
            ->name('api.suppliers.destroy');
        $api->delete('suppliers', 'SuppliersController@destroybyids')
            ->name('api.suppliers.destroybyids');
        $api->put('suppliers/editstatus', 'SuppliersController@editStatusByIds')
            ->name('api.suppliers.editstatusbyids');
            
        //供应商资源
        $api->get('shops', 'ShopsController@index')
            ->name('api.shops.index');
        $api->get('shops/{shop}', 'ShopsController@show')
            ->name('api.shops.show');
        $api->post('shops', 'ShopsController@store')
            ->name('api.shops.store');
        $api->patch('shops/{shop}', 'ShopsController@update')
            ->name('api.shops.update');
        $api->delete('shops/{shop}', 'ShopsController@destroy')
            ->name('api.shops.destroy');
        $api->delete('shops', 'ShopsController@destroybyids')
            ->name('api.shops.destroybyids');
        $api->put('shops/editstatus', 'ShopsController@editStatusByIds')
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
            
        //平台资源
        $api->get('departments', 'DepartmentsController@index')
            ->name('api.departments.index');
        $api->get('departments/{department}', 'DepartmentsController@show')
            ->name('api.departments.show');
        $api->post('departments', 'DepartmentsController@store')
            ->name('api.departments.store');
        $api->patch('departments/{department}', 'DepartmentsController@update')
            ->name('api.departments.update');
        $api->delete('departments/{department}', 'DepartmentsController@destroy')
            ->name('api.departments.destroy');
        $api->delete('departments', 'DepartmentsController@destroybyids')
            ->name('api.departments.destroybyids');
        $api->put('departments/editstatus', 'DepartmentsController@editStatusByIds')
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
         $api->get('products', 'ProductsController@index')
             ->name('api.products.index');
         $api->get('products/search', 'ProductsController@searchProducts')
             ->name('api.products.searchproducts');
         $api->get('products/{product}', 'ProductsController@show')
             ->name('api.products.show');
         $api->post('products', 'ProductsController@store')
             ->name('api.products.store');
         $api->patch('products/{product}', 'ProductsController@update')
             ->name('api.products.update');
         $api->delete('products/{product}', 'ProductsController@destroy')
             ->name('api.products.destroy');
         $api->delete('products', 'ProductsController@destroybyids')
             ->name('api.products.destroybyids');
         $api->put('products/editstatus', 'ProductsController@editStatusByIds')
             ->name('api.products.editstatusbyids');
        
        //产品子件资源
         $api->get('productcomponents', 'ProductComponentsController@index')
             ->name('api.productcomponents.index');
         $api->get('productcomponents/{productcomponent}', 'ProductComponentsController@show')
             ->name('api.productcomponents.show');
         $api->delete('productcomponents/{productcomponent}', 'ProductComponentsController@destroy')
             ->name('api.productcomponents.destroy');
         $api->delete('productcomponents', 'ProductComponentsController@destroybyids')
             ->name('api.goproductcomponentsods.destroybyids');

        //组合资源
        $api->get('combinations', 'CombinationsController@index')
            ->name('api.combinations.index');
        $api->get('combinations/{combination}', 'CombinationsController@show')
            ->name('api.combinations.show');
        $api->post('combinations', 'CombinationsController@store')
            ->name('api.combinations.store');
        $api->patch('combinations/{combination}', 'CombinationsController@update')
            ->name('api.combinations.update');
        $api->delete('combinations/{combination}', 'CombinationsController@destroy')
            ->name('api.combinations.destroy');
        $api->delete('combinations', 'CombinationsController@destroybyids')
            ->name('api.combinations.destroybyids');

        //下载商品资源 暂定
        $api->get('goodsdownloads', 'GoodsDownloadsController@index')
            ->name('api.goodsdownloads.index');

        //下载订单资源 暂定
        $api->get('orderdownloads', 'OrderDownloadsController@index')
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
        $api->get('purchases', 'PurchasesController@index')
            ->name('api.purchases.index');
        $api->get('purchases/{purchase}', 'PurchasesController@show')
            ->name('api.purchases.show');
        $api->post('purchases', 'PurchasesController@store')
            ->name('api.purchases.store');
        $api->delete('purchases/{purchase}', 'PurchasesController@destroy')
            ->name('api.purchases.destroy');
        $api->patch('purchases/{purchase}', 'PurchasesController@update')
            ->name('api.purchases.update');
        $api->delete('purchases', 'PurchasesController@destroybyids')
            ->name('api.purchases.destroybyids');
        $api->put('purchases/editstatus', 'PurchasesController@editStatusByIds')
            ->name('api.purchases.editstatusbyids');
        $api->put('purchases/{purchase}/submit', 'PurchasesController@isSubmit')
            ->name('api.purchases.issubmit');
        $api->put('purchases/{purchase}/print', 'PurchasesController@isPrint')
            ->name('api.purchases.isprint');
        $api->put('purchases/{purchase}/audit', 'PurchasesController@isAudit')
            ->name('api.purchases.isAudit');

        //采购清单
        $api->delete('purchaselists/{purchaselist}', 'PurchaseListsController@destroy')
            ->name('api.purchaselists.destroy');
        $api->delete('purchaselists', 'PurchaseListsController@destroybyids')
            ->name('api.purchaselists.destroybyids');

        //采购单详情
        $api->delete('purchasedetails/{purchasedetail}', 'PurchaseDetailsController@destroy')
            ->name('api.purchasedetails.destroy');
        $api->delete('purchasedetails', 'PurchaseDetailsController@destroybyids')
            ->name('api.purchasedetails.destroybyids');

        //入库类型
        $api->get('stockintypes', 'StockInTypesController@index')
            ->name('api.stockintypes.index');
        $api->get('stockintypes/{stockintype}', 'StockInTypesController@show')
            ->name('api.stockintypes.show');
        $api->post('stockintypes', 'StockInTypesController@store')
            ->name('api.stockintypes.store');
        $api->patch('stockintypes/{stockintype}', 'StockInTypesController@update')
            ->name('api.stockintypes.update');
        $api->delete('stockintypes/{stockintype}', 'StockInTypesController@destroy')
            ->name('api.stockintypes.destroy');
        $api->delete('stockintypes', 'StockInTypesController@destroybyids')
            ->name('api.stockintypes.destroybyids');
        $api->put('stockintypes/editstatus', 'StockInTypesController@editStatusByIds')
            ->name('api.stockintypes.editstatusbyids');

        //入库单
        $api->get('stockins', 'StockInsContoller@index')
            ->name('api.stockins.index');
        $api->get('stockins/{stockin}', 'StockInsContoller@show')
            ->name('api.stockins.show');
        $api->post('stockins', 'StockInsContoller@store')
            ->name('api.stockins.store');
        $api->patch('stockins/{stockin}', 'StockInsContoller@update')
            ->name('api.stockins.update');
        $api->delete('stockins/{stockin}', 'StockInsContoller@destroy')
            ->name('api.stockins.destroy');
        $api->delete('stockins', 'StockInsContoller@destroybyids')
            ->name('api.stockins.destroybyids');
        $api->put('stockins/editstatus', 'StockInsContoller@editStatusByIds')
            ->name('api.stockins.editstatusbyids');
        $api->put('stockins/{stockin}/submit', 'StockInsContoller@isSubmit')
            ->name('api.stockins.issubmit');
        $api->put('stockins/{stockin}/print', 'StockInsContoller@isPrint')
            ->name('api.stockins.isprint');
        $api->put('stockins/{stockin}/audit', 'StockInsContoller@isAudit')
            ->name('api.stockins.isAudit');
        $api->put('stockins/{stockin}/stockin', 'StockInsContoller@stockIn')
            ->name('api.stockins.stockin');

        //入库单详情
        $api->get('stockindetails', 'StockInDetailsController@index')
            ->name('api.stockindetails.index');
        $api->delete('stockindetails/{stockindetail}', 'StockInDetailsController@destroy')
            ->name('api.stockindetails.destroy');
        $api->delete('stockindetails', 'StockInDetailsController@destroybyids')
            ->name('api.stockindetails.destroybyids');


        //取消采购
        $api->get('cancelpurchases', 'CancelPurchasesController@index')
            ->name('api.cancelpurchases.index');
        $api->get('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@show')
            ->name('api.cancelpurchases.show');
        $api->post('cancelpurchases', 'CancelPurchasesController@store')
            ->name('api.cancelpurchases.store');
        $api->patch('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@update')
            ->name('api.cancelpurchases.update');
        $api->delete('cancelpurchases/{cancelpurchase}', 'CancelPurchasesController@destroy')
            ->name('api.cancelpurchases.destroy');
        $api->delete('cancelpurchases', 'CancelPurchasesController@destroybyids')
            ->name('api.cancelpurchases.destroybyids');
        $api->put('cancelpurchases/editstatus', 'CancelPurchasesController@editStatusByIds')
            ->name('api.cancelpurchases.editstatusbyids');
        $api->put('cancelpurchases/{cancelpurchase}/submit', 'CancelPurchasesController@isSubmit')
            ->name('api.cancelpurchases.issubmit');

        //取消采购单详情
        $api->get('cancelpurchasedetails', 'CancelPurchaseDetailsController@index')
            ->name('api.cancelpurchasedetails.index');
        $api->delete('cancelpurchasedetails/{cancelpurchasedetail}', 'CancelPurchaseDetailsController@destroy')
            ->name('api.cancelpurchasedetails.destroy');
        $api->delete('cancelpurchasedetails', 'CancelPurchaseDetailsController@destroybyids')
            ->name('api.cancelpurchasedetails.destroybyids');

        //采购退货
        $api->get('purchasereturns', 'PurchaseReturnsController@index')
            ->name('api.purchasereturns.index');
        $api->get('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@show')
            ->name('api.purchasereturns.show');
        $api->post('purchasereturns', 'PurchaseReturnsController@store')
            ->name('api.purchasereturns.store');
        $api->patch('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@update')
            ->name('api.purchasereturns.update');
        $api->delete('purchasereturns/{purchasereturn}', 'PurchaseReturnsController@destroy')
            ->name('api.purchasereturns.destroy');
        $api->delete('purchasereturns', 'PurchaseReturnsController@destroybyids')
            ->name('api.purchasereturns.destroybyids');
        $api->put('purchasereturns/editstatus', 'PurchaseReturnsController@editStatusByIds')
            ->name('api.purchasereturns.editstatusbyids');
        $api->put('purchasereturns/{purchasereturn}/submit', 'PurchaseReturnsController@isSubmit')
            ->name('api.purchasereturns.issubmit');
        $api->put('purchasereturns/{purchasereturn}/audit', 'PurchaseReturnsController@isAudit')
            ->name('api.purchasereturns.isAudit');
        $api->put('purchasereturns/{purchasereturn}/print', 'PurchaseReturnsController@isPrint')
            ->name('api.purchasereturns.isprint');
        $api->put('purchasereturns/{purchasereturn}/auditfaild', 'PurchaseReturnsController@isAuditFaild')
            ->name('api.purchasereturns.isretrial');

        //采购退货类型
        $api->get('purchasereturntypes', 'PurchaseReturnTypesController@index')
            ->name('api.purchasereturntypes.index');
        $api->get('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@show')
            ->name('api.purchasereturntypes.show');
        $api->post('purchasereturntypes', 'PurchaseReturnTypesController@store')
            ->name('api.purchasereturntypes.store');
        $api->patch('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@update')
            ->name('api.purchasereturntypes.update');
        $api->delete('purchasereturntypes/{purchasereturntype}', 'PurchaseReturnTypesController@destroy')
            ->name('api.purchasereturntypes.destroy');
        $api->delete('purchasereturntypes', 'PurchaseReturnTypesController@destroybyids')
            ->name('api.purchasereturntypes.destroybyids');
        $api->put('purchasereturntypes/editstatus', 'PurchaseReturnTypesController@editStatusByIds')
            ->name('api.purchasereturntypes.editstatusbyids');

        //采购退货详情
        $api->get('purchasereturndetails', 'PurchaseReturnDetailsController@index')
            ->name('api.purchasereturndetails.index');
        $api->delete('purchasereturndetails/{purchasereturndetail}', 'PurchaseReturnDetailsController@destroy')
            ->name('api.purchasereturndetails.destroy');
        $api->delete('purchasereturndetails', 'PurchaseReturnDetailsController@destroybyids')
            ->name('api.purchasereturndetails.destroybyids');

        //上传图片
        $api->post('uploadimages', 'UploadImagesController@store')
            ->name('api.uploadimages.store');

    });

    $api->group([
        'middleware' => 'api.throttle',
        'limit' => config('api.rate_limits.sign.limit'),
        'expires' => config('api.rate_limits.sign.expires'),
        'grouptitle' => '用户中心',
    ], function ($api) {
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
