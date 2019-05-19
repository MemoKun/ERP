<?php

namespace App\Transformers;

use App\Models\BuyAndSendPro;
use League\Fractal\TransformerAbstract;

class BuyAndSendProTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'buyAndSendGift',
    ];

    public function transform(BuyAndSendPro $buyAndSendPro)
    {
        return[
            'id' => $buyAndSendPro->id,
            'title' => $buyAndSendPro->title,
            'commodity_code' => $buyAndSendPro->commodity_code,
            'spec_code' => $buyAndSendPro->spec_code,
            'short_name' => $buyAndSendPro->short_name,
            'spec_name' => $buyAndSendPro->spec_name,
            'status' => $buyAndSendPro->status,
            'created_at' => $buyAndSendPro->created_at->toDateTimeString(),
            'updated_at' => $buyAndSendPro->updated_at->toDateTimeString(),
        ];
    }

    public function includeBuyAndSendGift(BuyAndSendPro $buyAndSendPro)
    {
        return $this->collection($buyAndSendPro->buyAndSendGift, new BuyAndSendGiftTransformer());
    }
}
