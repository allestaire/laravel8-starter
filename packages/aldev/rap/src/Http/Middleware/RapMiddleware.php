<?php

namespace Aldev\Rap\Http\Middleware;

use Closure;

/**
 * The RapMiddleware class.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class RapMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Illuminate\Http\Request $request
     * @param  Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
