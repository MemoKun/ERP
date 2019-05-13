<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieCenterRequest;
//use App\Http\Requests\Api\EditStatuRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieCenterController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有补件单
    public function index(ResupplieCenterRequest $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }

    //作废补件单
    public function isInvalid(ResupplieOrder $resupplieOrder)
    {
        return $this->traitAction(
            $resupplieOrder,
            $resupplieOrder->is_invalid,
            '作废出错',
            'invalid'
        );
    }
}
