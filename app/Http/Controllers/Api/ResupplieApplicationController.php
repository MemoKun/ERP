<?php

namespace App\Http\Controllers\Api;

use App\Models\ResupplieOrder;
use App\Http\Requests\Api\ResupplieApplicationRequset;
//use App\Http\Requests\Api\EditStatuRequest;
//use App\Http\Requests\Api\DestroyRequest;

use App\Transformers\ResupplieOrderTransformer;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Traits\ProcedureTrait;

class ResupplieApplicationController extends Controller
{
    use CURDTrait;
    use ProcedureTrait;

    const TRANSFORMER = ResupplieOrderTransformer::class;
    const MODEL = ResupplieOrder::class;
    const PerPage = 8;

    //获取所有未提交的补件单
    public function searchUnsubmited()
    {
        $resupplieOrder = ResupplieOrder::query()->whereIn('is_submit', [ResupplieOrder::RESUPPLIE_UNSUBMITED]);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有已提交的补件单
    public function searchSubmited()
    {
        $resupplieOrder = ResupplieOrder::query()->whereIn('is_submit', [ResupplieOrder::RESUPPLIE_SUBMITED]);

        return $this->response->paginator($resupplieOrder->paginate(self::PerPage), self::TRANSFORMER);
    }

    //获取所有补件单
    public function index(ResupplieApplicationRequset $requset)
    {
        return $this->allOrPage($requset, self::MODEL, self::TRANSFORMER, self::PerPage);
    }
}
