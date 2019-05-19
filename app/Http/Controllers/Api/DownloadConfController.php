<?php

namespace App\Http\Controllers\Api;

use App\Models\DownLoadConf;
use App\Http\Requests\Api\DownLoadConfRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Http\Requests\Api\EditStatuRequest;
use App\Transformers\DownLoadConfTransformer;
use App\Http\Controllers\Traits\CURDTrait;

class DownLoadConfController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = DownLoadConfTransformer::class;
    const MODEL = DownLoadConf::class;

    //获取数据
    public function index(DownLoadConfRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //显示单条数据
    public function show(DownLoadConf $downLoadConf)
    {
        return $this->traitShow($downLoadConf, self::TRANSFORMER);
    }

    //新增下载配置
    public function store(DownLoadConfRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }

    //删除单条下载配置
    public function destroy(DownLoadConf $downLoadConf)
    {
        return $this->traitDestroy($downLoadConf);
    }

    //删除多条下载配置
    public function destroybyIds(DestroyRequest $request)
    {
        return $this->traitDestroybyIds($request, self::MODEL);
    }

    //修改单条下载配置
    public function update(DownLoadConfRequest $request, DownLoadConf $downLoadConf)
    {
        return $this->traitUpdate($request, $downLoadConf, self::TRANSFORMER);
    }

    //修改一组下载配置
    public function editStatusByIds(EditStatuRequest $request)
    {
        return $this->traitEditStatusByIds($request, self::MODEL);
    }
}
