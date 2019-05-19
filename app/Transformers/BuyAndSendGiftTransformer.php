<?php

namespace App\Transformers;

use App\Models\BuyAndSendGift;
use League\Fractal\TransformerAbstract;

class BuyAndSendGiftTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'buyAndSendPro',
    ];

    public function transform(BuyAndSendGift $buyAndSendGift)
    {
        return [
            'id' => $buyAndSendGift->id,
            'buy_and_send_pro_id' => $buyAndSendGift->buy_and_send_pro_id,
            'commodity_code' => $buyAndSendGift->commodity_code,
            'spec_code' => $buyAndSendGift->spec_code,
            'short_name' => $buyAndSendGift->short_name,
            'spec_name' => $buyAndSendGift->spec_name,
            'quantity' => $buyAndSendGift->quantity,
            'status' => $buyAndSendGift->status,
            'created_at' => $buyAndSendGift->created_at
                                    ->toDateTimeString(),
            'updated_at' => $buyAndSendGift->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeBuyAndSendPro(BuyAndSendGift $buyAndSendGift)
    {
        return $this->item($buyAndSendGift->buyAndSendPro, new BuyAndSendProTransformer());
    }
}
