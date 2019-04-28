<?php

namespace App\Transformers;

use App\Models\AfterSaleSchedule;
use League\Fractal\TransformerAbstract;

class AfterSaleScheduleTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'afterSale','user'
    ];

    public function transform(AfterSaleSchedule $aftersaleschedule)
    {
        return [
            'id' => $aftersaleschedule->id,
            'after_sale_id' => $aftersaleschedule->after_sale_id,
            'schedule_description' => $aftersaleschedule->schedule_description,
            'user_id' => $aftersaleschedule->user_id,
            'subscribed_at' => $aftersaleschedule->subscribed_at,
            'status' => $aftersaleschedule->status,
            'created_at' => $aftersaleschedule->created_at
                                    ->toDateTimeString(),
            'updated_at' => $aftersaleschedule->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includeAfterSale(AfterSaleSchedule $aftersaleschedule)
    {
        return $this->item($aftersaleschedule->afterSale, new AfterSaleTransformer());
    }

    public function includeUser(AfterSaleSchedule $aftersaleschedule)
    {
        return $this->item($aftersaleschedule->user, new UserTransformer());
    }
}