<?php

namespace App\Http\Requests\Api;

class ProblemProductRequest extends FormRequest
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
                    'after_compensation_order_id' => 'string|max:255',
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'problem_product.*.commodity_code' => 'string|max:255',
                    'problem_product.*.spec_code' => 'string|max:255',
                    'problem_product.*.short_name' => 'string|max:255',
                    'problem_product.*.spec' => 'string|max:255',
                    'problem_product.*.color' => 'string|max:255',
                    'problem_product.*.materials' => 'string|max:255',
                    'problem_product.*.function' => 'string|max:255',
                    'problem_product.*.special' => 'string|max:255',
                    'problem_product.*.other' => 'string|max:255',
                    'problem_product.*.buy_number' => 'numeric|max:255',
                    'problem_product.*.supplier_id' => [
                        'required', 'integer',
                        Rule::exists('suppliers', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_product.*.img_url' => 'string|max:255',
                    'problem_product.*.status' => 'boolean',
                ];
                break;
            case 'PATCH':
                return [
                    'problem_product.*.commodity_code' => 'string|max:255',
                    'problem_product.*.spec_code' => 'string|max:255',
                    'problem_product.*.short_name' => 'string|max:255',
                    'problem_product.*.spec' => 'string|max:255',
                    'problem_product.*.color' => 'string|max:255',
                    'problem_product.*.materials' => 'string|max:255',
                    'problem_product.*.function' => 'string|max:255',
                    'problem_product.*.special' => 'string|max:255',
                    'problem_product.*.other' => 'string|max:255',
                    'problem_product.*.buy_number' => 'numeric|max:255',
                    'problem_product.*.supplier_id' => [
                        'required', 'integer',
                        Rule::exists('suppliers', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'problem_product.*.img_url' => 'string|max:255',
                    'problem_product.*.status' => 'boolean',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'problem_product.*.commodity_code.string' => '商品编码必须为string类型',
            'problem_product.*.commodity_code.max' => '商品编码最大值为255',

            'problem_product.*.spec_code.string' => '规格编码必须为string类型',
            'problem_product.*.spec_code.max' => '规格编码最大值为255',

            'problem_product.*.short_name.string' => '商品简称必须为string类型',
            'problem_product.*.short_name.max' => '商品简称最大值为255',

            'problem_product.*.spec.string' => '规格必须为string类型',
            'problem_product.*.spec.max' => '规格长度最大为255',

            'problem_product.*.color.string' => '颜色必须为string类型',
            'problem_product.*.color.max' => '颜色长度最大为255',

            'problem_product.*.materials.string' => '材质必须为string类型',
            'problem_product.*.materials.max' => '材质长度最大为255',

            'problem_product.*.function.string' => '功能必须为string类型',
            'problem_product.*.function.max' => '功能长度最大为255',

            'problem_product.*.special.string' => '特殊必须为string类型',
            'problem_product.*.special.max' => '特殊长度最大为255',

            'problem_product.*.other.string' => '其他必须为string类型',
            'problem_product.*.other.max' => '其他长度最大为255',

            'problem_product.*.buy_number.numeric' => '购买数量必须为数字',
            'problem_product.*.buy_number.max' => '购买数量最大为255',

            'problem_product.*.img_url.string' => '图片地址必须为string类型',
            'problem_product.*.img_url.max' => '图片地址最大为255',

            'problem_product.*.status.boolean' => '状态必须为boolean类型',
        ];
    }

    public function attributes()
    {
        return [
            'after_compensation_order_id' => '对应的是售后赔偿订单id',
            'commodity_code' => '商品编码',
            'spec_code' => '规格编码',
            'short_name' => '商品简称',
            'spec' => '规格',
            'color' => '颜色',
            'materials' => '材质',
            'function' => '功能',
            'special' => '特殊',
            'other' => '其他',
            'buy_number' => '购买数量',
            'img_url' => '图片地址',
        ];
    }
}
