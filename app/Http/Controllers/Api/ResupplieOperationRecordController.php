<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ResupplieOperationRecordRequest;
use App\Transformers\ResupplieOperationRecordTransformer;
use App\Models\ResupplieOperationRecord;
use App\Http\Controllers\Traits\CURDTrait;

class ResupplieOperationRecordController extends Controller
{
    use CURDTrait;

    const TRANSFORMER = ResupplieOperationRecordTransformer::class;
    const MODEL = ResupplieOperationRecord::class;

    //获取所有操作记录
    public function index(ResupplieOperationRecordRequest $request)
    {
        return $this->allOrPage($request, self::MODEL, self::TRANSFORMER, 10);
    }

    //新增操作记录
    public function store(ResupplieOperationRecordRequest $request)
    {
        return $this->traitStore($request->validated(), self::MODEL, self::TRANSFORMER);
    }
}
