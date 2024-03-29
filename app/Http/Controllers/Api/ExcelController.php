<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\Api\EditStatuRequest;
use App\Http\Requests\Api\DestroyRequest;
use App\Http\Controllers\Traits\CURDTrait;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Exports\OrdersExport;
use Maatwebsite\Excel\Facades\Excel;


class ExcelController extends Controller
{
	public function ordersExport() 
    {
        //return json_encode(new ordersExport);
        ob_end_clean();//清除缓冲区,避免乱码
        return Excel::download(new OrdersExport, 'orders.xlsx');
    }
}
