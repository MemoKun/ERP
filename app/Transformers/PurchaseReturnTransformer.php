<?php

namespace App\Transformers;

use App\Models\PurchaseReturn;
use League\Fractal\TransformerAbstract;

class PurchaseReturnTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'purchaseReturnDetails', 'creator', 'submitter', 'auditor'
    ];

    public function transform(PurchaseReturn $purchaseReturn)
    {
        return [
            'id' => $purchaseReturn->id,
            'purchase_return_no' => $purchaseReturn->purchase_return_no,
            'purchase_return_status' => $purchaseReturn->purchase_return_status,
            'creator_id' => $purchaseReturn->creator_id,
            'is_submit' => $purchaseReturn->is_submit,
            'submitter_id' => $purchaseReturn->submitter_id,
            'submit_at' => $purchaseReturn->submit_at,
            'is_audit' => $purchaseReturn->is_audit,
            'auditor_id' => $purchaseReturn->auditor_id,
            'audit_at' => $purchaseReturn->audit_at,
            'is_print' => $purchaseReturn->is_print,
            'remark' => $purchaseReturn->remark,
            'status' => $purchaseReturn->status,
            'created_at' => $purchaseReturn->created_at
                                    ->toDateTimeString(),
            'updated_at' => $purchaseReturn->updated_at
                                    ->toDateTimeString(),
        ];
    }

    public function includePurchaseReturnDetails(PurchaseReturn $purchaseReturn)
    {
        return $this->collection($purchaseReturn->purchaseReturnDetails, new PurchaseReturnDetailTransformer());
    }

    public function includeCreator(PurchaseReturn $purchaseReturn)
    {
        if(!$purchaseReturn->creator_id) return ;
        return $this->item($purchaseReturn->creator, new UserTransformer());
    }

    public function includeSubmitter(PurchaseReturn $purchaseReturn)
    {
        if(!$purchaseReturn->submitter_id) return ;
        return $this->item($purchaseReturn->submitter, new UserTransformer());
    }

    public function includeAuditor(PurchaseReturn $purchaseReturn)
    {
        if(!$purchaseReturn->auditor_id) return ;
        return $this->item($purchaseReturn->auditor, new UserTransformer());
    }
}