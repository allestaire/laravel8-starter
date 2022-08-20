<?php

namespace Aldev\Rap\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * The Rap facade.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class Rap extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'rap';
    }
}
