<?php

namespace App\Transformers;

use App\Models\OfflineAccountConf;
use League\Fractal\TransformerAbstract;

class OfflineAccountConfTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'user',
    ];

    public function transform(OfflineAccountConf $offlineaccountconf)
    {
        return [
            'id' => $offlineaccountconf->id,
            'account_information' => $offlineaccountconf->account_information,
            'user_id' => $offlineaccountconf->user_id,
            'status' => $offlineaccountconf->status,
            'created_at' => $offlineaccountconf->created_at->toDateTimeString(),
            'updated_at' => $offlineaccountconf->updated_at->toDateTimeString(),
        ];
    }

    public function includeUser(OfflineAccountConf $offlineaccountconf)
    { 
        return $this->item($offlineaccountconf->user, new UserTransformer());
    }
}
