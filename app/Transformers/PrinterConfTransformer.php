<?php

namespace App\Transformers;

use App\Models\PrinterConf;
use League\Fractal\TransformerAbstract;

class PrinterConfTransformer extends TransformerAbstract
{
    public function transform(PrinterConf $conf)
    {
        return [
            'id' => $conf->id,
            'model' => $conf->model,
            'printer' => $conf->printer,
            'user' => $conf->user,
            'status' => $conf->status,
            'created_at' => $conf->created_at
                                    ->toDateTimeString(),
            'updated_at' => $conf->updated_at
                                    ->toDateTimeString(),
        ];
    }
}