<?php

namespace Aldev\Rap\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * The RapModel class.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class Permission extends Model
{
    /**
    * Table name.
    *
    * @var string
    */
    protected $table = 'rap_permissions';

    /**
    * The attributes that are mass assignable.
    *
    * @var mixed
    */
    protected $fillable = ['name', 'guard'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    protected $attributes = [
        'guard' => ''
    ];

    public $timestamps = false;
}
