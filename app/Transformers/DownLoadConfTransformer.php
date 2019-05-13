<?php

namespace App\Transformers;

use App\Models\DownLoadConf;
use League\Fractal\TransformerAbstract;

class DownLoadConfTransformer extends TransformerAbstract
{
    public function transform(DownLoadConf $downLoadConf)
    {
        return[
            'id' => $downLoadConf->id,
            'is_covered' => $downLoadConf->is_covered,
            'is_merged' => $downLoadConf->is_merged,
            'status' => $downLoadConf->status,
            'created_at' => $downLoadConf->created_at->toDateTimeString(),
            'updated_at' => $downLoadConf->updated_at->toDateTimeString(),
        ];
    }
}
