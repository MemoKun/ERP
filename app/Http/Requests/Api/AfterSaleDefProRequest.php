<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class AfterSaleDefProRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'after_sale_def_pro.*.commodity_code' => 'required|string|max:255',
                    'after_sale_def_pro.*.spec_code' => 'string|max:255',
                    'after_sale_def_pro.*.short_name' => 'string|max:255',
                    'after_sale_def_pro.*.spec' => 'string|max:255',
                    'after_sale_def_pro.*.color' => 'string|max:255',
                    'after_sale_def_pro.*.materials' => 'string|max:255',
                    'after_sale_def_pro.*.buy_number' => 'string|max:255',
                    'after_sale_def_pro.*.img_url' => 'string|max:255',
                    'after_sale_def_pro.*.supplier_id' => 'string|max:255',
                    'after_sale_def_pro.*.status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'after_sale_def_pro.*.commodity_code' => 'string|max:255',
                    'after_sale_def_pro.*.spec_code' => 'string|max:255',
                    'after_sale_def_pro.*.short_name' => 'string|max:255',
                    'after_sale_def_pro.*.spec' => 'string|max:255',
                    'after_sale_def_pro.*.color' => 'string|max:255',
                    'after_sale_def_pro.*.materials' => 'string|max:255',
                    'after_sale_def_pro.*.buy_number' => 'integer|max:255',
                    'after_sale_def_pro.*.img_url' => 'string|max:255',
                    'after_sale_def_pro.*.supplier_id' => 'string|max:255',
                    'after_sale_def_pro.*.status' => 'boolean',
                ];
            break;
        }
    }

    public function messages()
    {
        return [
            'after_sale_def_pro.*.commodity_code.required' => '商品编码必填',
            'after_sale_def_pro.*.commodity_code.string' => '商品编码必须string类型',

            'after_sale_def_pro.*.spec_code.string' => '规格编码必须string类型',
            'after_sale_def_pro.*.short_name.string' => '商品简称必须string类型',
            'after_sale_def_pro.*.spec.string' => '规格必须string类型',
            'after_sale_def_pro.*.color.string' => '颜色必须string类型',
            'after_sale_def_pro.*.materials.string' => '材质必须string类型',
            'after_sale_def_pro.*.buy_number.string' => '购买数量必须int类型',
            'after_sale_def_pro.*.supplier_id.string' => '供应商必须string类型',
            'after_sale_def_pro.*.img_url.string' => '图片地址必须string类型',

            'after_sale_def_pro.*.status.required' => '状态必填'
        ];
    }

    public function attributes()
    {
        return [
            'commodity_code' => '商品编码',
            'spec_code' => '规格编码',
            'short_name' => '商品简称',
            'spec' => '规格',
            'color' => '颜色',
            'materials' => '材质',
            'buy_number' => '购买数量',
            'supplier_id' => '供应商',
            'img_url' => '图片地址',
        ];
    }
}
