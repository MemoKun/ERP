<?php 

namespace App\Transformers;

use App\Models\BrushLockConf;
use League\Fractal\TransformerAbstract;

class BrushLockConfTransformer extends TransformerAbstract
{

    protected $availableIncludes = [
        'user'
    ];

    public function transform(BrushLockConf $brushlockconf)
    {
        return [
            'id' => $brushlockconf->id,
            'perform_type' => $brushlockconf->perform_type,
            'include_string' => $brushlockconf->include_string,
            'user_id' => $brushlockconf->user_id,
            'status' => $brushlockconf->status,
            'created_at' => $brushlockconf->created_at->toDateTimeString(),
            'updated_at' => $brushlockconf->updated_at->toDateTimeString(),
        ];
    }

    public function includeUser(BrushLockConf $brushlockconf)
    {
        return $this->item($brushlockconf->user, new UserTransformer());
    }

}
