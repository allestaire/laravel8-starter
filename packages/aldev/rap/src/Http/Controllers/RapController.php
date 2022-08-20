<?php

namespace Aldev\Rap\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Aldev\Rap\Facades\Rap;
use Aldev\Rap\Models\RapModel;

/**
 * The RapController class.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class RapController extends Controller
{
    public function demo()
    {
        return view('rap::demo');
    }
}
