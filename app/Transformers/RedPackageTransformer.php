<?php

namespace App\Transformers;

use App\Models\RedPackage;
use League\Fractal\TransformerAbstract;

class RedPackageTransformer extends TransformerAbstract
{
    protected $availableIncludes = [
        'productComponents','shop','supplier','goodsCategory','combinations'
    ];

    public function transform(RedPackage $product)
    {
        return [
            'id' => $product->id,
            'commodity_code' => $product->commodity_code,
            'short_name' => $product->short_name,
            'remark' => $product->remark,
            'img' => $product->img,
            'status' => $product->status,
            'created_at' => optional($product->created_at)
                                  ->toDateTimeString(),
            'updated_at' => optional($product->updated_at)
                                  ->toDateTimeString()
        ];
    }

    public function includeRedPackageComponents(RedPackage $product)
    {
        return $this->collection($product->productComponents, new RedPackageComponentTransformer());
    }

    public function includeShop(RedPackage $product)
    {
        return $this->item($product->shop, new ShopTransformer());
    }

    public function includeSupplier(RedPackage $product)
    {
        return $this->item($product->supplier, new SupplierTransformer());
    }

    public function includeGoodsCategory(RedPackage $product)
    {
        return $this->item($product->goodsCategory, new GoodsCategoryTransformer());
    }

    public function includeCombinations(RedPackage $product)
    {
        return $this->collection($product->combinations, new CombinationTransformer());
    }


}