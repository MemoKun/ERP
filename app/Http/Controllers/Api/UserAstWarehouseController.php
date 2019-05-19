<?php

namespace App\Http\Controllers\Api;

use App\Models\UserAstWarehouse;
use App\Http\Requests\Api\UserAstWarehouseRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Transformers\UserAstWarehouseTransformer;
use App\Http\Controllers\Traits\CURDTrait;

/**
 * 配送方式资源
 * @Resource("UserAstWarehouses",uri="/api")
 */
class UserAstWarehouseController extends Controller
{
    use CURDTrait;
    const TRANSFORMER = UserAstWarehouseTransformer::class;
    const MODEL = UserAstWarehouse::class;

    /**
     * 获取所有配送方式 
     *  
     * @Get("/uass{?status}")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("status", type="boolean", description="获取的状态", required=false, default="all")
     * })
     * @Response(200, body={
     * "data": {
     *         {
     *              "id": 1,
     *              "name": "配送方式",
     *              "status": true,
     *              "created_at": "2018-06-14 14:39:45",
     *              "updated_at": "2018-06-14 14:39:45"
     *         },
     *         {
     *             "id": 2,
     *             "name": "配送方式2",
     *             "status": true,
     *             "created_at": "2018-06-14 14:42:23",
     *             "updated_at": "2018-06-14 14:42:23"
     *         }
     *     },
     *     "meta": {
     *         "pagination": {
     *             "total": 3,
     *             "count": 2,
     *             "per_page": 10,
     *             "current_page": 1,
     *             "total_pages": 1,
     *             "links": {
     *                 "previous": null,
     *                 "next": "{{host}}/api/uass?page=1"
     *             }
     *         }
     *     }
     * })
     */
    public function index(UserAstWarehouseRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }


    /**
     * 新增配送方式 
     *  
     * @Post("/uass") 
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("name", description="配送方式名", required=true),
     *      @Parameter("status",type="boolean", description="状态(0:停用，1:启用)", required=false, default=true)
     * })
     * @Transaction({
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "name": {
     *                  "配送方式名称必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(201, body={
     *          "id": 1,
     *          "name": "配送方式",
     *          "status": true,
     *          "created_at": "2018-06-14 14:39:45",
     *          "updated_at": "2018-06-14 14:39:45",
     *          "meta": {
     *              "status_code": "201"
     *          }
     *      })
     * })
     */
    public function store(UserAstWarehouseRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    /**
     * 显示单条配送方式 
     *  
     * @Get("/uass/:id")
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(200, body={
     *          "id": 1,
     *          "name": "配送方式",
     *          "status": true,
     *          "created_at": "2018-06-14 14:39:45",
     *          "updated_at": "2018-06-14 14:45:14"
     *      })
     * })
     */
    public function show(UserAstWarehouse $uas)
    {
        return $this->traitShow($uas, self::TRANSFORMER);
    }

    /**
     * 修改配送方式 
     *  
     * @Patch("/uass/:id") 
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "name": {
     *                  "配送方式名称必须string类型"
     *               }
     *           },
     *          "status_code": 422
     *      }),
     *      @Response(201, body={
     *          "id": 1,
     *          "name": "配送方式1",
     *          "status": true,
     *          "created_at": "2018-06-14 14:39:45",
     *          "updated_at": "2018-06-14 14:40:45",
     *      })
     * })
     */
    public function update(UserAstWarehouseRequest $request, UserAstWarehouse $uas)
    {
        return $this->traitUpdate($request, $uas, self::TRANSFORMER);
    }

    /**
     * 删除配送方式 
     *  
     * @Delete("/uass/:id") 
     * @Versions({"v1"})
     * @Transaction({
     *      @Response(404, body={
     *          "message": "No query results for model ",
     *          "status_code": 404,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function destroy(UserAstWarehouse $uas)
    {
        return $this->traitDestroy($uas);
    }

    /**
     * 删除一组配送方式 
     *  
     * @Delete("/uass") 
     * @Versions({"v1"})
     * @Parameters({
     * @Parameter("ids", description="配送方式id组 格式: 1,2,3,4 ", required=true)
     * })
     * @Transaction({
     *      @Response(500, body={
     *          "message": "删除错误",
     *          "code": 500,
     *          "status_code": 500,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "ids": {
     *                  "id组必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    /**
     * 更改一组配送方式状态 
     *  
     * @PUT("/uass/editstatus")
     * @Versions({"v1"})
     * @Parameters({
     *      @Parameter("ids", description="配送方式id组 格式: 1,2,3,4 ", required=true),
     *      @Parameter("status",type="boolean", description="状态(0:停用，1:启用)", required=true),
     * })
     * @Transaction({
     *      @Response(500, body={
     *          "message": "更改错误",
     *          "code": 500,
     *          "status_code": 500,
     *      }),
     *      @Response(422, body={
     *          "message": "422 Unprocessable Entity",
     *           "errors": {
     *              "ids": {
     *                  "id组必填"
     *              },
     *              "status": {
     *                  "状态必填"
     *              }
     *           },
     *          "status_code": 422,
     *      }),
     *      @Response(204, body={})
     * })
     */
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
