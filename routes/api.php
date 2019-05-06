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

//$api = new Dingo\Api\Routing\Router();

$api->version('v1', ['namespace' => 'App\Http\Controllers\Api', 'middleware' => ['serializer:array', 'bindings']], function (Dingo\Api\Routing\Router $api) {
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
    ], function (Dingo\Api\Routing\Router $api) {
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

        //配送方式
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

        //仓库资源
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
        $api->get('purchaselists', 'PurchaseListsController@index')
            ->name('api.purchaselists.index');
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
//        $api->put('purchasereturns/{purchasereturn}/auditfaild', 'PurchaseReturnsController@isAuditFaild')
//            ->name('api.purchasereturns.isretrial');

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
        $api->get('customerservicedepts/searchuntreated', 'CustomerServiceDepartmentsController@searchUntreated')
            ->name('api.customerservicedepts.searchuntreated');
        $api->get('customerservicedepts', 'CustomerServiceDepartmentsController@index')
            ->name('api.customerservicedepts.index');
        $api->get('customerservicedepts/create', 'CustomerServiceDepartmentsController@create')
            ->name('api.customerservicedepts.create');
        $api->get('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@show')
            ->name('api.customerservicedepts.show');
        $api->post('customerservicedepts', 'CustomerServiceDepartmentsController@store')
            ->name('api.customerservicedepts.store');
        $api->patch('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@update')
            ->name('api.customerservicedepts.update');
        $api->delete('customerservicedepts/{order}', 'CustomerServiceDepartmentsController@destroy')
            ->name('api.customerservicedepts.destroy');
        $api->delete('customerservicedepts', 'CustomerServiceDepartmentsController@destroybyids')
            ->name('api.customerservicedepts.destroybyids');
        $api->put('customerservicedepts/editstatus', 'CustomerServiceDepartmentsController@editStatusByIds')
            ->name('api.customerservicedepts.editstatusbyids');
        $api->put('customerservicedepts/{order}/lockorunlock', 'CustomerServiceDepartmentsController@isLockOrUnlock')
            ->name('api.customerservicedepts.islockorunlock');
        $api->put('customerservicedepts/{order}/audit', 'CustomerServiceDepartmentsController@isAudit')
            ->name('api.customerservicedepts.isaudit');
        $api->put('customerservicedepts/{order}/unaudit', 'CustomerServiceDepartmentsController@isUnAudit')
            ->name('api.customerservicedepts.isunaudit');
        $api->put('customerservicedepts/{order}/splitorder', 'CustomerServiceDepartmentsController@isSplitOrder')
            ->name('api.customerservicedepts.issplitorder');
        $api->put('customerservicedepts/mergerorder', 'CustomerServiceDepartmentsController@isMergerOrder')
            ->name('api.customerservicedepts.ismergerorder');

        //子订单
        $api->delete('orderitems/{orderitem}', 'OrderItemsController@destroy')
            ->name('api.orderitems.destroy');

        //跟单部
        $api->get('merchandiserdepts', 'MerchandiserDepartmentsController@index')
            ->name('api.merchandiserdepts.index');
        $api->get('merchandiserdepts/{order}', 'MerchandiserDepartmentsController@show')
            ->name('api.merchandiserdepts.show');
        $api->get('merchandiserdepts/{order}/stock', 'MerchandiserDepartmentsController@getStockByWarehouses')
            ->name('api.merchandiserdepts.stock');
        $api->put('merchandiserdepts/{order}/unaudit', 'MerchandiserDepartmentsController@isUnAudit')
            ->name('api.merchandiserdepts.isunaudit');
        $api->put('merchandiserdepts/{order}/oneaudit', 'MerchandiserDepartmentsController@isOneAudit')
            ->name('api.merchandiserdepts.isoneaudit');
        $api->put('merchandiserdepts/{order}/unoneaudit', 'MerchandiserDepartmentsController@isUnOneAudit')
            ->name('api.merchandiserdepts.isunoneaudit');
        $api->put('merchandiserdepts/{order}/cargoaudit', 'MerchandiserDepartmentsController@isCargoAudit')
            ->name('api.merchandiserdepts.iscargoaudit');
        // $api->put('merchandiserdepts/{order}/splitorder', 'MerchandiserDepartmentsController@isSplitOrder')
        //     ->name('api.merchandiserdepts.issplitorder');
        // $api->put('merchandiserdepts/mergerorder', 'MerchandiserDepartmentsController@isMergerOrder')
        //     ->name('api.merchandiserdepts.ismergerorder');

        //财务部
        $api->get('financialdepts', 'FinancialDepartmentsController@index')
            ->name('api.financialdepts.index');
        $api->put('financialdepts/{order}/reject', 'FinancialDepartmentsController@isReject')
            ->name('api.financialdepts.isreject');
        $api->put('financialdepts/{order}/financialaudit', 'FinancialDepartmentsController@isFinancialAudit')
            ->name('api.financialdepts.isFinancialAudit');
        $api->put('financialdepts/{order}/unfinancialaudit', 'FinancialDepartmentsController@isUnFinancialAudit')
            ->name('api.financialdepts.isunfinancialaudit');

        //支付明细
        $api->post('paymentdetails', 'PaymentDetailsController@store')
            ->name('api.paymentdetails.store');
        $api->patch('paymentdetails/{paymentdetail}', 'PaymentDetailsController@update')
            ->name('api.paymentdetails.update');
        $api->delete('paymentdetails/{paymentdetail}', 'PaymentDetailsController@destroy')
            ->name('api.paymentdetails.destroy');

        //仓储部
        $api->get('warehousingdepts', 'WarehousingDepartmentsController@index')
            ->name('api.warehousingdepts.index');
        $api->get('warehousingdepts/{order}', 'WarehousingDepartmentsController@show')
            ->name('api.warehousingdepts.show');
        $api->patch('warehousingdepts/{order}', 'WarehousingDepartmentsController@update')
            ->name('api.warehousingdepts.update');
        $api->put('warehousingdepts/{order}/stockout', 'WarehousingDepartmentsController@isStockOut')
            ->name('api.warehousingdepts.isstockout');
        $api->put('warehousingdepts/{order}/stockoutunaudit', 'WarehousingDepartmentsController@isStockOutUnAudit')
            ->name('api.warehousingdepts.isstockoutunaudit');
        $api->put('warehousingdepts/{order}/stockouttocs', 'WarehousingDepartmentsController@isStockOutToCS')
            ->name('api.warehousingdepts.isstockouttocs');

        //客服退款申请
        $api->get('customerservicerefunds', 'CustomerServiceRefundsController@index')
            ->name('api.customerservicerefunds.index');
        $api->get('customerservicerefunds/searchuntreated', 'CustomerServiceRefundsController@searchUntreated')
            ->name('api.customerservicerefunds.searchuntreated');
        $api->get('customerservicerefunds/searchtreated', 'CustomerServiceRefundsController@searchTreated')
            ->name('api.customerservicerefunds.searchtreated');
        $api->get('customerservicerefunds/searchasuntreated', 'CustomerServiceRefundsController@searchAsUntreated')
            ->name('api.customerservicerefunds.searchasuntreated');
        $api->get('customerservicerefunds/searchastreated', 'CustomerServiceRefundsController@searchAsTreated')
            ->name('api.customerservicerefunds.searchastreated');
        $api->get('customerservicerefunds/searchfduntreated', 'CustomerServiceRefundsController@searchFdUntreated')
            ->name('api.customerservicerefunds.searchfduntreated');
        $api->get('customerservicerefunds/searchfdtreated', 'CustomerServiceRefundsController@searchFdTreated')
            ->name('api.customerservicerefunds.searchfdtreated');
        $api->get('customerservicerefunds/searchalltreated', 'CustomerServiceRefundsController@searchAllTreated')
            ->name('api.customerservicerefunds.searchalltreated');

        $api->get('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@show')
            ->name('api.customerservicerefunds.show');
        $api->post('customerservicerefunds', 'CustomerServiceRefundsController@store')
            ->name('api.customerservicerefunds.store');
        $api->patch('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@update')
            ->name('api.customerservicerefunds.update');
        $api->delete('customerservicerefunds/{refundorder}', 'CustomerServiceRefundsController@destroy')
            ->name('api.customerservicerefunds.destroy');
        $api->delete('customerservicerefunds', 'CustomerServiceRefundsController@destroybyids')
            ->name('api.customerservicerefunds.destroybyids');

        $api->put('customerservicerefunds/{refundorder}/asrefuse', 'CustomerServiceRefundsController@asRefuse')
            ->name('api.customerservicerefunds.asrefuse');

        $api->put('customerservicerefunds/{refundorder}/lockorunlock', 'CustomerServiceRefundsController@isLockOrUnlock')
            ->name('api.customerservicerefunds.islockorunlock');
        $api->put('customerservicerefunds/{refundorder}/aslockorunlock', 'CustomerServiceRefundsController@isAsLockOrUnlock')
            ->name('api.customerservicerefunds.isaslockorunlock');
        $api->put('customerservicerefunds/{refundorder}/fdlockorunlock', 'CustomerServiceRefundsController@isFdLockOrUnlock')
            ->name('api.customerservicerefunds.isfdlockorunlock');

        $api->put('customerservicerefunds/{refundorder}/audit', 'CustomerServiceRefundsController@isAudit')
            ->name('api.customerservicerefunds.isaudit');
        $api->put('customerservicerefunds/{refundorder}/unaudit', 'CustomerServiceRefundsController@isUnAudit')
            ->name('api.customerservicerefunds.isunaudit');
        $api->put('customerservicerefunds/{refundorder}/asaudit', 'CustomerServiceRefundsController@isAsAudit')
            ->name('api.customerservicerefunds.isasaudit');
        $api->put('customerservicerefunds/{refundorder}/asunaudit', 'CustomerServiceRefundsController@isAsUnAudit')
            ->name('api.customerservicerefunds.isasunaudit');
        $api->put('customerservicerefunds/{refundorder}/fdaudit', 'CustomerServiceRefundsController@isFdAudit')
            ->name('api.customerservicerefunds.isfdaudit');
        $api->put('customerservicerefunds/{refundorder}/fdunaudit', 'CustomerServiceRefundsController@isFdUnAudit')
            ->name('api.customerservicerefunds.isfdunaudit');

        //退款原因
        $api->get('refundreasons', 'RefundReasonsController@index')
            ->name('api.refundreasons.index');
        $api->get('refundreasons/{refunreason}', 'RefundReasonsController@show')
            ->name('api.refundreasons.show');
        $api->post('refundreasons', 'RefundReasonsController@store')
            ->name('api.refundreasons.store');
        $api->patch('refundreasons/{refunreason}', 'RefundReasonsController@update')
            ->name('api.refundreasons.update');
        $api->delete('refundreasons/{refunreason}', 'RefundReasonsController@destroy')
            ->name('api.refundreasons.destroy');
        $api->delete('refundreasons', 'RefundReasonsController@destroybyids')
            ->name('api.refundreasons.destroybyids');
        $api->put('refundreasons/editstatus', 'RefundReasonsController@editStatusByIds')
            ->name('api.refundreasons.editstatusbyids');

        //退货原因
        $api->get('returnreasons', 'ReturnReasonsController@index')
            ->name('api.returnreasons.index');
        $api->get('returnreasons/{returnreason}', 'ReturnReasonsController@show')
            ->name('api.returnreasons.show');
        $api->post('returnreasons', 'ReturnReasonsController@store')
            ->name('api.returnreasons.store');
        $api->patch('returnreasons/{returnreason}', 'ReturnReasonsController@update')
            ->name('api.returnreasons.update');
        $api->delete('returnreasons/{returnreason}', 'ReturnReasonsController@destroy')
            ->name('api.returnreasons.destroy');
        $api->delete('returnreasons', 'ReturnReasonsController@destroybyids')
            ->name('api.returnreasons.destroybyids');
        $api->put('returnreasons/editstatus', 'ReturnReasonsController@editStatusByIds')
            ->name('api.returnreasons.editstatusbyids');

        //售后退款
        $api->get('aftersalerefunds', 'AfterSaleRefundsController@index')
            ->name('api.aftersalerefunds.index');
        $api->get('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@show')
            ->name('api.aftersalerefunds.show');
        $api->patch('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@update')
            ->name('api.aftersalerefunds.update');
        $api->delete('aftersalerefunds/{refundorder}', 'AfterSaleRefundsController@destroy')
            ->name('api.aftersalerefunds.destroy');
        $api->delete('aftersalerefunds', 'AfterSaleRefundsController@destroybyids')
            ->name('api.aftersalerefunds.destroybyids');
        $api->put('aftersalerefunds/{refundorder}/lockorunlock', 'AfterSaleRefundsController@isLockOrUnlock')
            ->name('api.aftersalerefunds.islockorunlock');
        $api->put('aftersalerefunds/{refundorder}/audit', 'AfterSaleRefundsController@isAudit')
            ->name('api.aftersalerefunds.isaudit');
        $api->put('aftersalerefunds/{refundorder}/unaudit', 'AfterSaleRefundsController@isUnAudit')
            ->name('api.aftersalerefunds.isunaudit');

        //财务退款
        $api->get('financialrefunds', 'FinancialRefundsController@index')
            ->name('api.financialrefunds.index');
        $api->get('financialrefunds/{returnorder}', 'FinancialRefundsController@show')
            ->name('api.financialrefunds.show');
        $api->patch('financialrefunds/{returnorder}', 'FinancialRefundsController@update')
            ->name('api.financialrefunds.update');
        $api->delete('financialrefunds/{returnorder}', 'FinancialRefundsController@destroy')
            ->name('api.financialrefunds.destroy');
        $api->delete('financialrefunds', 'FinancialRefundsController@destroybyids')
            ->name('api.financialrefunds.destroybyids');
        $api->put('financialrefunds/{returnorder}/lockorunlock', 'FinancialRefundsController@isLockOrUnlock')
            ->name('api.financialrefunds.islockorunlock');
        $api->put('financialrefunds/{returnorder}/audit', 'FinancialRefundsController@isAudit')
            ->name('api.financialrefunds.isaudit');
        $api->put('financialrefunds/{returnorder}/unaudit', 'FinancialRefundsController@isUnAudit')
            ->name('api.financialrefunds.isunaudit');

        //客服退货
        $api->get('customerservicereturns', 'CustomerServiceReturnsController@index')
            ->name('api.customerservicereturns.index');
        $api->get('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@show')
            ->name('api.customerservicereturns.show');
        $api->post('customerservicereturns', 'CustomerServiceReturnsController@store')
            ->name('api.customerservicereturns.store');
        $api->patch('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@update')
            ->name('api.customerservicereturns.update');
        $api->delete('customerservicereturns/{returnorder}', 'CustomerServiceReturnsController@destroy')
            ->name('api.customerservicereturns.destroy');
        $api->delete('customerservicereturns', 'CustomerServiceReturnsController@destroybyids')
            ->name('api.customerservicereturns.destroybyids');
        $api->put('customerservicereturns/{returnorder}/oneaudit', 'CustomerServiceReturnsController@isOneAudit')
            ->name('api.customerservicereturns.isoneaudit');
        $api->put('customerservicereturns/{returnorder}/unoneaudit', 'CustomerServiceReturnsController@isUnOneAudit')
            ->name('api.customerservicereturns.isunoneaudit');
        $api->put('customerservicereturns/{returnorder}/twoaudit', 'CustomerServiceReturnsController@isTwoAudit')
            ->name('api.customerservicereturns.istwoaudit');
        $api->put('customerservicereturns/{returnorder}/untwoaudit', 'CustomerServiceReturnsController@isUnTwoAudit')
            ->name('api.customerservicereturns.isuntwoaudit');

        //售后退货
        $api->delete('aftersalereturns/{returnorder}', 'AfterSaleReturnsController@destroy')
            ->name('api.aftersalereturns.destroy');
        $api->put('aftersalereturns/{returnorder}/oneaudit', 'AfterSaleReturnsController@isOneAudit')
            ->name('api.aftersalereturns.isoneaudit');
        $api->put('aftersalereturns/{returnorder}/unoneaudit', 'AfterSaleReturnsController@isUnOneAudit')
            ->name('api.aftersalereturns.isunoneaudit');
        $api->put('aftersalereturns/{returnorder}/twoaudit', 'AfterSaleReturnsController@isTwoAudit')
            ->name('api.aftersalereturns.istwoaudit');
        $api->put('aftersalereturns/{returnorder}/untwoaudit', 'AfterSaleReturnsController@isUnTwoAudit')
            ->name('api.aftersalereturns.isuntwoaudit');

        //仓储退货
        $api->get('warehousingreturns', 'WarehousingReturnsController@index')
            ->name('api.warehousingreturns.index');
        $api->get('warehousingreturns/{returnorder}', 'WarehousingReturnsController@show')
            ->name('api.warehousingreturns.show');
        $api->put('warehousingreturns/{returnorder}/whaudit', 'WarehousingReturnsController@isWhAudit')
            ->name('api.warehousingreturns.iswhaudit');
        $api->put('warehousingreturns/{returnorder}/whunaudit', 'WarehousingReturnsController@isWhUnAudit')
            ->name('api.warehousingreturns.iswhunaudit');

        //收货方式
        $api->get('receipttypes', 'ReceiptTypesController@index')
            ->name('api.receipttypes.index');
        $api->get('receipttypes/{receipttype}', 'ReceiptTypesController@show')
            ->name('api.receipttypes.show');
        $api->post('receipttypes', 'ReceiptTypesController@store')
            ->name('api.receipttypes.store');
        $api->patch('receipttypes/{receipttype}', 'ReceiptTypesController@update')
            ->name('api.receipttypes.update');
        $api->delete('receipttypes/{receipttype}', 'ReceiptTypesController@destroy')
            ->name('api.receipttypes.destroy');
        $api->delete('receipttypes', 'ReceiptTypesController@destroybyids')
            ->name('api.receipttypes.destroybyids');
        $api->put('receipttypes/editstatus', 'ReceiptTypesController@editStatusByIds')
            ->name('api.receipttypes.editstatusbyids');

        //库存同步
        $api->get('stocksyncreturn', 'StockSyncReturnsController@index')
            ->name('api.stocksyncreturn.index');
        $api->get('stocksyncreturn/{returnorder}', 'StockSyncReturnsController@show')
            ->name('api.stocksyncreturn.show');
        $api->put('stocksyncreturn/{returnorder}/stocksubmit', 'StockSyncReturnsController@isStockSubmit')
            ->name('api.stocksyncreturn.isstocksubmit');
        $api->put('stocksyncreturn/{returnorder}/stocksync', 'StockSyncReturnsController@isStockSync')
            ->name('api.stocksyncreturn.isstocksync');

        //退货子单
        $api->delete('returnorderitems/{returnorderitem}', 'ReturnOrderItemsController@destroy')
            ->name('api.returnorderitems.destroy');

        //售后赔偿
        $api->get('aftercompensation/searchall', 'AfterCompensationController@searchAll')
            ->name('api.aftercompensation.searchall');
        $api->get('aftercompensation/searchuntreated', 'AfterCompensationController@searchUntreated')
            ->name('api.aftercompensation.searchuntreated');
        $api->get('aftercompensation/searchalluntreated', 'AfterCompensationController@searchAllUntreated')
            ->name('api.aftercompensation.searchalluntreated');
        $api->get('aftercompensation/searchtreated', 'AfterCompensationController@searchTreated')
            ->name('api.aftercompensation.searchtreated');
        $api->get('aftercompensation/searchsectreated', 'AfterCompensationController@searchSecTreated')
            ->name('api.aftercompensation.searchtreated');
        $api->get('aftercompensation/searchcanceled', 'AfterCompensationController@searchCanceled')
            ->name('api.aftercompensation.searchcanceled');
        $api->get('aftercompensation', 'AfterCompensationController@index')
            ->name('api.aftercompensation.index');
        $api->get('aftercompensation/create', 'AfterCompensationController@create')
            ->name('api.aftercompensation.create');
        $api->get('aftercompensation/{order}', 'AfterCompensationController@show')
            ->name('api.aftercompensation.show');
        $api->post('aftercompensation', 'AfterCompensationController@store')
            ->name('api.aftercompensation.store');
        $api->patch('aftercompensation/{order}', 'AfterCompensationController@update')
            ->name('api.aftercompensation.update');
        $api->delete('aftercompensation/{order}', 'AfterCompensationController@destroy')
            ->name('api.aftercompensation.destroy');
        $api->delete('aftercompensation', 'AfterCompensationController@destroybyids')
            ->name('api.aftercompensation.destroybyids');
        $api->put('aftercompensation/editstatus', 'AfterCompensationController@editStatusByIds')
            ->name('api.aftercompensation.editstatusbyids');
        $api->put('aftercompensation/{order}/lockorunlock', 'AfterCompensationController@isLockOrUnlock')
            ->name('api.aftercompensation.islockorunlock');
        $api->put('aftercompensation/{order}/audit', 'AfterCompensationController@isAudit')
            ->name('api.aftercompensation.isaudit');
        $api->put('aftercompensation/{order}/secaudit', 'AfterCompensationController@isSecAudit')
            ->name('api.aftercompensation.issecaudit');
        $api->put('aftercompensation/{order}/unaudit', 'AfterCompensationController@isUnAudit')
            ->name('api.aftercompensation.isunaudit');
        $api->put('aftercompensation/{order}/secunaudit', 'AfterCompensationController@isSecUnAudit')
            ->name('api.aftercompensation.issecunaudit');
        $api->put('aftercompensation/{order}/splitorder', 'AfterCompensationController@isSplitOrder')
            ->name('api.aftercompensation.issplitorder');
        $api->put('aftercompensation/mergerorder', 'AfterCompensationController@isMergerOrder')
            ->name('api.aftercompensation.ismergerorder');


        //门店收款管理
        $api->get('shopgatheringmag', 'ShopGatheringMagController@index')
            ->name('api.shopgatheringmag.index');
        $api->get('shopgatheringmag/{mag}', 'ShopGatheringMagController@show')
            ->name('api.shopgatheringmag.show');
        $api->post('shopgatheringmag', 'ShopGatheringMagController@store')
            ->name('api.shopgatheringmag.store');
        $api->patch('shopgatheringmag/{mag}', 'ShopGatheringMagController@update')
            ->name('api.shopgatheringmag.update');
        $api->delete('shopgatheringmag/{mag}', 'ShopGatheringMagController@destroy')
            ->name('api.shopgatheringmag.destroy');
        $api->delete('shopgatheringmag', 'ShopGatheringMagController@destroybyids')
            ->name('api.shopgatheringmag.destroybyids');
        $api->put('shopgatheringmag/editstatus', 'ShopGatheringMagController@editStatusByIds')
            ->name('api.shopgatheringmag.editstatusbyids');

        //评价类型
        $api->get('evalcategorymag', 'EvalCategoryMagController@index')
            ->name('api.evalcategorymag.index');
        $api->get('evalcategorymag/{mag}', 'EvalCategoryMagController@show')
            ->name('api.evalcategorymag.show');
        $api->post('evalcategorymag', 'EvalCategoryMagController@store')
            ->name('api.evalcategorymag.store');
        $api->patch('evalcategorymag/{mag}', 'EvalCategoryMagController@update')
            ->name('api.evalcategorymag.update');
        $api->delete('evalcategorymag/{mag}', 'EvalCategoryMagController@destroy')
            ->name('api.evalcategorymag.destroy');
        $api->delete('evalcategorymag', 'EvalCategoryMagController@destroybyids')
            ->name('api.evalcategorymag.destroybyids');
        $api->put('evalcategorymag/editstatus', 'EvalCategoryMagController@editStatusByIds')
            ->name('api.evalcategorymag.editstatusbyids');

        //用户关联供应商
        $api->get('userastsupplier', 'UserAstSupplierController@index')
            ->name('api.userastsupplier.index');
        $api->get('userastsupplier/{uas}', 'UserAstSupplierController@show')
            ->name('api.userastsupplier.show');
        $api->post('userastsupplier', 'UserAstSupplierController@store')
            ->name('api.userastsupplier.store');
        $api->patch('userastsupplier/{uas}', 'UserAstSupplierController@update')
            ->name('api.userastsupplier.update');
        $api->delete('userastsupplier/{uas}', 'UserAstSupplierController@destroy')
            ->name('api.userastsupplier.destroy');
        $api->delete('userastsupplier', 'UserAstSupplierController@destroybyids')
            ->name('api.userastsupplier.destroybyids');
        $api->put('userastsupplier/editstatus', 'UserAstSupplierController@editStatusByIds')
            ->name('api.userastsupplier.editstatusbyids');

        //用户关联仓库
        $api->get('userastwarehouse', 'UserAstWarehouseController@index')
            ->name('api.userastwarehouse.index');
        $api->get('userastwarehouse/{uas}', 'UserAstWarehouseController@show')
            ->name('api.userastwarehouse.show');
        $api->post('userastwarehouse', 'UserAstWarehouseController@store')
            ->name('api.userastwarehouse.store');
        $api->patch('userastwarehouse/{uas}', 'UserAstWarehouseController@update')
            ->name('api.userastwarehouse.update');
        $api->delete('userastwarehouse/{uas}', 'UserAstWarehouseController@destroy')
            ->name('api.userastwarehouse.destroy');
        $api->delete('userastwarehouse', 'UserAstWarehouseController@destroybyids')
            ->name('api.userastwarehouse.destroybyids');
        $api->put('userastwarehouse/editstatus', 'UserAstWarehouseController@editStatusByIds')
            ->name('api.userastwarehouse.editstatusbyids');


        //打印机配置
        $api->get('printerconf', 'PrinterConfController@index')
            ->name('api.printerconf.index');
        $api->get('printerconf/{conf}', 'PrinterConfController@show')
            ->name('api.printerconf.show');
        $api->post('printerconf', 'PrinterConfController@store')
            ->name('api.printerconf.store');
        $api->patch('printerconf/{conf}', 'PrinterConfController@update')
            ->name('api.printerconf.update');
        $api->delete('printerconf/{conf}', 'PrinterConfController@destroy')
            ->name('api.printerconf.destroy');
        $api->delete('printerconf', 'PrinterConfController@destroybyids')
            ->name('api.printerconf.destroybyids');
        $api->put('printerconf/editstatus', 'PrinterConfController@editStatusByIds')
            ->name('api.printerconf.editstatusbyids');

        //负库存配置
        $api->get('negativeinvconf', 'NegativeInvConfController@index')
            ->name('api.negativeinvconf.index');
        $api->get('negativeinvconf/{conf}', 'NegativeInvConfController@show')
            ->name('api.negativeinvconf.show');
        $api->post('negativeinvconf', 'NegativeInvConfController@store')
            ->name('api.negativeinvconf.store');
        $api->patch('negativeinvconf/{conf}', 'NegativeInvConfController@update')
            ->name('api.negativeinvconf.update');
        $api->delete('negativeinvconf/{conf}', 'NegativeInvConfController@destroy')
            ->name('api.negativeinvconf.destroy');
        $api->delete('negativeinvconf', 'NegativeInvConfController@destroybyids')
            ->name('api.negativeinvconf.destroybyids');
        $api->put('negativeinvconf/editstatus', 'NegativeInvConfController@editStatusByIds')
            ->name('api.negativeinvconf.editstatusbyids');
        //问题产品
        $api->get('problemProduct', 'ProblemProductController@index')
            ->name('api.problemProduct.index');
        $api->get('problemProduct/{problemProduct}', 'ProblemProductController@show')
            ->name('api.problemProduct.show');
        $api->post('problemProduct', 'ProblemProductController@store')
            ->name('api.problemProduct.store');
        $api->patch('problemProduct/{problemProduct}', 'ProblemProductController@update')
            ->name('api.problemProduct.update');
        $api->delete('problemProduct/{problemProduct}', 'ProblemProductController@destroy')
            ->name('api.problemProduct.destroy');
        $api->delete('problemProduct', 'ProblemProductController@destroybyids')
            ->name('api.problemProduct.destroybyids');
        $api->put('problemProduct/editstatus', 'ProblemProductController@editStatusByIds')
            ->name('api.problemProduct.editstatusbyids');
            
        //上传图片
        $api->post('uploadimages', 'UploadImagesController@store')
            ->name('api.uploadimages.store');
        
        //关联物流用户信息
        $api->get('relateLogistics', 'RelateLogisticsController@index')
            ->name('api.relateLogistics.index');
        $api->post('relateLogistics', 'RelateLogisticsController@store')
            ->name('api.relateLogistics.store');
        $api->delete('relateLogistics/{relateLogistics}', 'RelateLogisticsController@destroy')
            ->name('api.relateLogistics.destroy');
        $api->delete('relateLogistics', 'RelateLogisticsController@destroybyids')
            ->name('api.relateLogistics.destroybyids');
        $api->get('relateLogistics/{relateLogistics}', 'RelateLogisticsController@show')
            ->name('api.relateLogistics.show');
        $api->patch('relateLogistics/{relateLogistics}', 'RelateLogisticsController@update')
            ->name('api.relateLogistics.update');
        $api->put('relateLogistics/editstatus', 'RelateLogisticsController@editStatusByIds')
            ->name('api.relateLogistics.editstatusbyids');
        //关联物流公司信息
        $api->get('relateLogisticsCompany', 'RelateLogisticsCompanyController@index')
            ->name('api.relateLogisticsCompany.index');
        $api->delete('relateLogisticsCompany/{relateLogisticsCompany}', 'RelateLogisticsCompanyController@destroy')
            ->name('api.relateLogisticsCompany.destroy');
        $api->delete('relateLogisticsCompany', 'RelateLogisticsCompanyController@destroybyids')
            ->name('api.relateLogisticsCompany.destroybyids');
        $api->get('relateLogisticsCompany/{relateLogisticsCompany}', 'RelateLogisticsCompanyController@show')
            ->name('api.relateLogisticsCompany.show');
        $api->put('relateLogisticsCompany/editstatus', 'RelateLogisticsCompanyController@editStatusByIds')
            ->name('api.relateLogisticsCompany.editstatusbyids');
        //下载配置
        $api->get('dwnConf', 'DownLoadConfController@index')
            ->name('api.dwnConf.index');
        $api->get('dwnConf/{dwnConf}', 'DownLoadConfController@show')
            ->name('api.dwnConf.show');
        $api->post('dwnConf', 'DownLoadConfController@store')
            ->name('api.dwnConf.store');
        $api->delete('dwnConf/{dwnConf}', 'DownLoadConfController@destroy')
            ->name('api.dwnConf.destroy');
        $api->delete('dwnConf', 'DownLoadConfController@destroybyIds')
            ->name('api.dwnConf.destroybyIds');
        $api->patch('dwnConf/{dwnConf}', 'DownLoadConfController@update')
            ->name('api.dwnConf.update');
        $api->put('dwnConf/editstatus', 'DownLoadConfController@editStatusByIds')
            ->name('api.dwnConf.editstatusbyids');
        //买就送商品
        $api->get('buyAndSendPro', 'BuyAndSendProController@index')
            ->name('api.buyAndSendPro.index');
        $api->post('buyAndSendPro', 'BuyAndSendProController@store')
            ->name('api.buyAndSendPro.store');
        $api->delete('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@destroy')
            ->name('api.buyAndSendPro.destroy');
        $api->delete('buyAndSendPro', 'BuyAndSendProController@destroybyids')
            ->name('api.buyAndSendPro.destroybyids');
        $api->get('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@show')
            ->name('api.buyAndSendPro.show');
        $api->patch('buyAndSendPro/{buyAndSendPro}', 'BuyAndSendProController@update')
            ->name('api.buyAndSendPro.update');
        $api->put('buyAndSendPro/editstatus', 'BuyAndSendProController@editStatusByIds')
            ->name('api.buyAndSendPro.editstatusbyids');
        $api->put('buyAndSendPro/{buyAndSendPro}/audit', 'BuyAndSendProController@isAudit')
            ->name('api.buyAndSendPro.isaudit');
        $api->put('buyAndSendPro/{buyAndSendPro}/void', 'BuyAndSendProController@isVoid')
            ->name('api.buyAndSendPro.isaudit');
        //买就送赠品
        $api->get('buyAndSendGift', 'BuyAndSendGiftController@index')
            ->name('api.buyAndSendGift.index');
        $api->delete('buyAndSendGift/{buyAndSendGift}', 'BuyAndSendGiftController@destroy')
            ->name('api.buyAndSendGift.destroy');
        $api->delete('buyAndSendGift', 'BuyAndSendGiftController@destroybyids')
            ->name('api.buyAndSendGift.destroybyids');
        $api->get('buyAndSendGift/{buyAndSendGift}', 'BuyAndSendGiftController@show')
            ->name('api.buyAndSendGift.show');
        $api->put('buyAndSendGift/editstatus', 'BuyAndSendGiftController@editStatusByIds')
            ->name('api.buyAndSendGift.editstatusbyids');
        //产品Bom
        $api->get('proBom', 'ProBomController@index')
            ->name('api.proBom.index');
        $api->post('proBom', 'ProBomController@store')
            ->name('api.proBom.store');
        $api->delete('proBom/{proBom}', 'ProBomController@destroy')
            ->name('api.proBom.destroy');
        $api->delete('proBom', 'ProBomController@destroybyids')
            ->name('api.proBom.destroybyids');
        $api->get('proBom/{proBom}', 'ProBomController@show')
            ->name('api.proBom.show');
        $api->patch('proBom/{proBom}', 'ProBomController@update')
            ->name('api.proBom.update');
        $api->put('proBom/editstatus', 'ProBomController@editStatusByIds')
            ->name('api.proBom.editstatusbyids');
        //产品Bom原材料
        $api->get('proBomMaterial', 'ProBomMaterialController@index')
            ->name('api.proBomMaterial.index');
        $api->delete('proBomMaterial/{proBomMaterial}', 'ProBomMaterialController@destroy')
            ->name('api.proBomMaterial.destroy');
        $api->delete('proBomMaterial', 'ProBomMaterialController@destroybyids')
            ->name('api.proBomMaterial.destroybyids');
        $api->get('proBomMaterial/{proBomMaterial}', 'ProBomMaterialController@show')
            ->name('api.proBomMaterial.show');
        $api->put('proBomMaterial/editstatus', 'ProBomMaterialController@editStatusByIds')
            ->name('api.proBomMaterial.editstatusbyids');
        //包件类型
        $api->get('packageType', 'PackageTypeController@index')
            ->name('api.packageType.index');
        $api->get('packageType/{packageType}', 'PackageTypeController@show')
            ->name('api.packageType.show');
        $api->post('packageType', 'PackageTypeController@store')
            ->name('api.packageType.store');
        $api->patch('packageType/{packageType}', 'PackageTypeController@update')
            ->name('api.packageType.update');
        $api->delete('packageType/{packageType}', 'PackageTypeController@destroy')
            ->name('api.packageType.destroy');
        $api->delete('packageType', 'PackageTypeController@destroybyids')
            ->name('api.packageType.destroybyids');
        $api->put('packageType/editstatus', 'PackageTypeController@editStatusByIds')
            ->name('api.packageType.editstatusbyids');
        //补件类别
        $api->get('resupplieCategory', 'ResupplieCategoryController@index')
            ->name('api.resupplieCategory.index');
        $api->get('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@show')
            ->name('api.resupplieCategory.show');
        $api->post('resupplieCategory', 'ResupplieCategoryController@store')
            ->name('api.resupplieCategory.store');
        $api->patch('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@update')
            ->name('api.resupplieCategory.update');
        $api->delete('resupplieCategory/{resupplieCategory}', 'ResupplieCategoryController@destroy')
            ->name('api.resupplieCategory.destroy');
        $api->delete('resupplieCategory', 'ResupplieCategoryController@destroybyids')
            ->name('api.resupplieCategory.destroybyids');
        $api->put('resupplieCategory/editstatus', 'ResupplieCategoryController@editStatusByIds')
            ->name('api.resupplieCategory.editstatusbyids');
        //退款方式
        $api->get('refundMethod', 'RefundMethodController@index')
            ->name('api.refundMethod.index');
        $api->get('refundMethod/{refundMethod}', 'RefundMethodController@show')
            ->name('api.refundMethod.show');
        $api->post('refundMethod', 'RefundMethodController@store')
            ->name('api.refundMethod.store');
        $api->patch('refundMethod/{refundMethod}', 'RefundMethodController@update')
            ->name('api.refundMethod.update');
        $api->delete('refundMethod/{refundMethod}', 'RefundMethodController@destroy')
            ->name('api.refundMethod.destroy');
        $api->delete('refundMethod', 'RefundMethodController@destroybyids')
            ->name('api.refundMethod.destroybyids');
        $api->put('refundMethod/editstatus', 'RefundMethodController@editStatusByIds')
            ->name('api.refundMethod.editstatusbyids');
        //补件单子单
        $api->get('resupplieOrderItem', 'ResuppliedOrderItemController@index')
            ->name('api.resupplieOrderItem.index');
        $api->get('resupplieOrderItem/{resupplieOrderItem}', 'ResuppliedOrderItemController@show')
            ->name('api.resupplieOrderItem.show');
        $api->delete('resupplieOrderItem/{resupplieOrderItem}', 'ResuppliedOrderItemController@destroy')
            ->name('api.resupplieOrderItem.destroy');
        $api->delete('resupplieOrderItem', 'ResuppliedOrderItemController@destroybyids')
            ->name('api.resupplieOrderItem.destroybyids');
        $api->put('resupplieOrderItem/editstatus', 'ResuppliedOrderItemController@editStatusByIds')
            ->name('api.resupplieOrderItem.editstatusbyids');
        //补件问题产品
        $api->get('resupplieProblemProduct', 'ResupplieProblemProductController@index')
            ->name('api.resupplieProblemProduct.index');
        $api->get('resupplieProblemProduct/{resupplieProblemProduct}', 'ResupplieProblemProductController@show')
            ->name('api.resupplieProblemProduct.show');
        $api->delete('resupplieProblemProduct/{resupplieProblemProduct}', 'ResupplieProblemProductController@destroy')
            ->name('api.resupplieProblemProduct.destroy');
        $api->delete('resupplieProblemProduct', 'ResupplieProblemProductController@destroybyids')
            ->name('api.resupplieProblemProduct.destroybyids');
        $api->put('resupplieProblemProduct/editstatus', 'ResupplieProblemProductController@editStatusByIds')
            ->name('api.resupplieProblemProduct.editstatusbyids');
        //补件责任方
        $api->get('resupplieResponsible', 'ResupplieResponsibleController@index')
            ->name('api.resupplieResponsible.index');
        $api->get('resupplieResponsible/{resupplieResponsible}', 'ResupplieResponsibleController@show')
            ->name('api.resupplieResponsible.show');
        $api->delete('resupplieResponsible/{resupplieResponsible}', 'ResupplieResponsibleController@destroy')
            ->name('api.resupplieResponsible.destroy');
        $api->delete('resupplieResponsible', 'ResupplieResponsibleController@destroybyids')
            ->name('api.resupplieResponsible.destroybyids');
        $api->put('resupplieResponsible/editstatus', 'ResupplieResponsibleController@editStatusByIds')
            ->name('api.resupplieResponsible.editstatusbyids');
        //补件申请
        $api->get('resupplieApplication', 'ResupplieApplicationController@index')
            ->name('api.resupplieApplication.index');
        $api->get('resupplieApplication/searchUnsubmited', 'ResupplieApplicationController@searchUnsubmited')
            ->name('api.resupplieApplication.index');
        $api->get('resupplieApplication/searchSubmited', 'ResupplieApplicationController@searchSubmited')
            ->name('api.resupplieApplication.index');
        
        // 薛涛
        //产品映射
        $api->get('promap', 'ProMapController@index')
        ->name('api.promap.index');
        $api->post('promap', 'ProMapController@store')
        ->name('api.promap.store');
        $api->get('promap/{promap}', 'ProMapController@show')
        ->name('api.promap.show');
        $api->patch('promap/{promap}', 'ProMapController@update')
        ->name('api.promap.update');
        $api->delete('promap/{promap}', 'ProMapController@destroy')
        ->name('api.promap.destroy');
        $api->delete('promap', 'ProMapController@destroybyids')
        ->name('api.promap.destroybyids');
        $api->put('promap/editstatus', 'ProMapController@editStatusByIds')
        ->name('api.promap.editstatusbyids');
        //最小包管理
        $api->get('minipackage', 'MiniPackageController@index')
        ->name('api.minipackage.index');
        $api->post('minipackage', 'MiniPackageController@store')
        ->name('api.minipackage.store');
        $api->get('minipackage/{minipackage}', 'MiniPackageController@show')
        ->name('api.minipackage.show');
        $api->patch('minipackage/{minipackage}', 'MiniPackageController@update')
        ->name('api.minipackage.update');
        $api->delete('minipackage/{minipackage}', 'MiniPackageController@destroy')
        ->name('api.minipackage.destroy');
        $api->delete('minipackage', 'MiniPackageController@destroybyids')
        ->name('api.minipackage.destroybyids');
        $api->put('minipackage/editstatus', 'MiniPackageController@editStatusByIds')
        ->name('api.minipackage.editstatusbyids');
        //线下账户配置
        $api->get('offlineaccountconf', 'OfflineAccountConfController@index')
        ->name('api.offlineaccountconf.index');
        $api->post('offlineaccountconf', 'OfflineAccountConfController@store')
        ->name('api.offlineaccountconf.store');
        $api->get('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@show')
        ->name('api.offlineaccountconf.show');
        $api->patch('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@update')
        ->name('api.offlineaccountconf.update');
        $api->delete('offlineaccountconf/{offlineaccoutconf}', 'OfflineAccountConfController@destroy')
        ->name('api.offlineaccountconf.destroy');
        $api->delete('offlineaccountconf', 'OfflineAccountConfController@destroybyids')
        ->name('api.offlineaccountconf.destroybyids');
        $api->put('offlineaccountconf/editstatus', 'OfflineAccountConfController@editStatusByIds')
        ->name('api.offlineaccountconf.editstatusbyids');
        //刷单锁单配置
        $api->get('brushlockconf', 'BrushLockConfController@index')
        ->name('api.brushlockconf.index');
        $api->post('brushlockconf', 'BrushLockConfController@store')
        ->name('api.brushlockconf.store');
        $api->get('brushlockconf/{brushlockconf}', 'BrushLockConfController@show')
        ->name('api.brushlockconf.show');
        $api->patch('brushlockconf/{brushlockconf}', 'BrushLockConfController@update')
        ->name('api.brushlockconf.update');
        $api->delete('brushlockconf/{brushlockconf}', 'BrushLockConfController@destroy')
        ->name('api.brushlockconf.destroy');
        $api->delete('brushlockconf', 'BrushLockConfController@destroybyids')
        ->name('api.brushlockconf.destroybyids');
        $api->put('brushlockconf/editstatus', 'BrushLockConfController@editStatusByIds')
        ->name('api.brushlockconf.editstatusbyids');
        //售后状态
        $api->get('aftersalestate', 'AfterSaleStateController@index')
        ->name('api.aftersalestate.index');
        $api->get('aftersalestate/{state}', 'AfterSaleStateController@show')
        ->name('api.aftersalestate.show');
        $api->post('aftersalestate', 'AfterSaleStateController@store')
        ->name('api.aftersalestate.store');
        $api->patch('aftersalestate/{state}', 'AfterSaleStateController@update')
        ->name('api.aftersalestate.update');
        $api->delete('aftersalestate/{state}', 'AfterSaleStateController@destroy')
        ->name('api.aftersalestate.destroy');
        $api->delete('aftersalestate', 'AfterSaleStateController@destroybyids')
        ->name('api.aftersalestate.destroybyids');
        $api->put('aftersalestate/editstatus', 'AfterSaleStateController@editStatusByIds')
        ->name('api.aftersalestate.editstatusbyids');
        //售后类型
        $api->get('aftersaletype', 'AfterSaleTypeController@index')
        ->name('api.aftersaletype.index');
        $api->get('aftersaletype/{type}', 'AfterSaleTypeController@show')
        ->name('api.aftersaletype.show');
        $api->post('aftersaletype', 'AfterSaleTypeController@store')
        ->name('api.aftersaletype.store');
        $api->patch('aftersaletype/{type}', 'AfterSaleTypeController@update')
        ->name('api.aftersaletype.update');
        $api->delete('aftersaletype/{type}', 'AfterSaleTypeController@destroy')
        ->name('api.aftersaletype.destroy');
        $api->delete('aftersaletype', 'AfterSaleTypeController@destroybyids')
        ->name('api.aftersaletype.destroybyids');
        $api->put('aftersaletype/editstatus', 'AfterSaleTypeController@editStatusByIds')
        ->name('api.aftersaletype.editstatusbyids');
        //售后管理
        $api->get('aftersale', 'AfterSaleController@index')
        ->name('api.aftersale.index');
        $api->post('aftersale', 'AfterSaleController@store')
        ->name('api.aftersale.store');
        $api->get('aftersale/{aftersale}', 'AfterSaleController@show')
        ->name('api.aftersale.show');
        $api->patch('aftersale/{aftersale}', 'AfterSaleController@update')
        ->name('api.aftersale.update');
        $api->delete('aftersale/{aftersale}', 'AfterSaleController@destroy')
        ->name('api.aftersale.destroy');
        $api->delete('aftersale', 'AfterSaleController@destroybyids')
        ->name('api.aftersale.destroybyids');
        $api->put('aftersale/editstatus', 'AfterSaleController@editStatusByIds')
        ->name('api.aftersale.editstatusbyids');
        $api->put('aftersale/{aftersale}/lockorunlock', 'AfterSaleController@isLockOrUnlock')
        ->name('api.aftersale.islockorunlock');
        $api->put('aftersale/{aftersale}/audit', 'AfterSaleController@isAudit')
        ->name('api.aftersale.isaudit');
        $api->put('aftersale/{aftersale}/unaudit', 'AfterSaleController@isUnAudit')
        ->name('api.aftersale.isunaudit');
        // 售后进度
        $api->get('aftersaleschedule', 'AfterSaleScheduleController@index')
        ->name('api.aftersaleschedule.index');
        $api->get('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@show')
        ->name('api.aftersaleschedule.show');
        $api->post('aftersaleschedule', 'AfterSaleScheduleController@store')
        ->name('api.aftersaleschedule.store');
        $api->patch('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@update')
        ->name('api.aftersaleschedule.update');
        $api->delete('aftersaleschedule/{aftersaleschedule}', 'AfterSaleScheduleController@destroy')
        ->name('api.aftersaleschedule.destroy');
        $api->delete('aftersaleschedule', 'AfterSaleScheduleController@destroybyids')
        ->name('api.aftersaleschedule.destroybyids');
        $api->put('aftersaleschedule/editstatus', 'AfterSaleScheduleController@editStatusByIds')
        ->name('api.aftersaleschedule.editstatusbyids');
        // 售后问题产品
        $api->get('aftersaledefpro', 'AfterSaleDefProController@index')
        ->name('api.aftersaledefpro.index');
        $api->get('aftersaledefpro/{aftersaledefpro}', 'AfterSaleDefProController@show')
        ->name('api.aftersaledefpro.show');
        $api->post('aftersaledefpro', 'AfterSaleDefProController@store')
        ->name('api.aftersaledefpro.store');
        $api->delete('aftersaledefpro/{aftersaledefpro}', 'AfterSaleDefProController@destroy')
        ->name('api.aftersaledefpro.destroy');
        $api->delete('aftersaledefpro', 'AfterSaleDefProController@destroybyids')
        ->name('api.aftersaledefpro.destroybyids');
        $api->put('aftersaledefpro/editstatus', 'AfterSaleDefProController@editStatusByIds')
        ->name('api.aftersaledefpro.editstatusbyids');
        // 薛涛

        
        //退货子单
        $api->delete('returnorderitems/{returnorderitem}', 'ReturnOrderItemsController@destroy')
            ->name('api.returnorderitems.destroy');

        //上传图片
        $api->post('uploadimages', 'UploadImagesController@store')
            ->name('api.uploadimages.store');
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
