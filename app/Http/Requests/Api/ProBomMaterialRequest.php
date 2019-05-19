<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class ProBomMaterialRequest extends FormRequest
{
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'boolean',
                ];
                break;
            case'POST':
                return [
                    'pro_bom_material.*.material_code' => 'string|max:255',
                    'pro_bom_material.*.spec_code' => 'string|max:255',
                    'pro_bom_material.*.material_name' => 'string|max:255',
                    'pro_bom_material.*.spec' => 'string|max:255',
                    'pro_bom_material.*.color' => 'string|max:255',
                    'pro_bom_material.*.material_quality' => 'string|max:255',
                    'pro_bom_material.*.special' => 'string|max:255',
                    'pro_bom_material.*.other' => 'string|max:255',
                    'pro_bom_material.*.volume' => 'string|max:255',
                    'pro_bom_material.*.weight' => 'string|max:255',
                    'pro_bom_material.*.unit' => 'string|max:255',
                    'pro_bom_material.*.semi_finished' => 'boolean',
                    'pro_bom_material.*.status' => 'boolean',
                    'pro_bom_material.*.need' => 'string|max:255',
                ];
                break;
            case'PATCH':
                return [
                    'pro_bom_material.*.id' => [
                        'integer',
                        Rule::exists('pro_bom_material', 'id'),
                    ],
                    'pro_bom_material.*.material_code' => 'string|max:255',
                    'pro_bom_material.*.spec_code' => 'string|max:255',
                    'pro_bom_material.*.material_name' => 'string|max:255',
                    'pro_bom_material.*.spec' => 'string|max:255',
                    'pro_bom_material.*.color' => 'string|max:255',
                    'pro_bom_material.*.material_quality' => 'string|max:255',
                    'pro_bom_material.*.special' => 'string|max:255',
                    'pro_bom_material.*.other' => 'string|max:255',
                    'pro_bom_material.*.volume' => 'string|max:255',
                    'pro_bom_material.*.weight' => 'string|max:255',
                    'pro_bom_material.*.unit' => 'string|max:255',
                    'pro_bom_material.*.semi_finished' => 'boolean',
                    'pro_bom_material.*.status' => 'boolean',
                    'pro_bom_material.*.need' => 'string|max:255',
                ];
                break;
        }
    }

    public function messages()
    {
        return[
            'material_code.string' => '材料编码必须string类型',
            'material_code.max' => '材料编码最大长度为255',

            'spec_code.string' => '规格编码必须string类型',
            'spec_code.max' => '规格编码最大长度为255',

            'material_name.string' => '材料名称必须string类型',
            'material_name.max' => '材料名称最大长度为255',

            'spec.string' => '规格必须string类型',
            'spec.max' => '规格最大长度为255',

            'color.string' => '颜色必须string类型',
            'color.max' => '颜色最大长度为255',

            'material_quality.string' => '材质必须string类型',
            'material_quality.max' => '材质最大长度为255',

            'special.string' => '特殊必须string类型',
            'special.max' => '特殊最大长度为255',

            'other.string' => '其他必须string类型',
            'other.max' => '其他最大长度为255',

            'volume.string' => '体积必须string类型',
            'volume.max' => '体积最大长度为255',

            'weight.string' => '重量必须string类型',
            'weight.max' => '重量最大长度为255',

            'unit.string' => '单位必须string类型',
            'unit.max' => '单位最大长度为255',

            'semi_finished.boolean' => '半成品必须布尔类型',

            'status.boolean' => '状态必须布尔类型',

            'need.string' => '所需数量必须string类型',
            'need.max' => '所需数量最大长度为255',
        ];
    }

    public function attributes()
    {
        return [
            'material_code' => '材料编码',
            'spec_code' => '规格编码',
            'material_name' => '材料名称',
            'spec' => '规格',
            'color' => '颜色',
            'material_quality' => '材质',
            'special' => '特殊',
            'other' => '其他',
            'volume' => '体积',
            'weight' => '重量',
            'unit' => '单位',
            'semi_finished' => '半成品',
            'status' => '状态：0=停用，1=启用',
            'need' => '所需数量',
        ];
    }
}
