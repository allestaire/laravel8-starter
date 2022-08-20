<?php

namespace Aldev\Rap\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * The RapModel class.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class Role extends Model
{
    /**
    * Table name.
    *
    * @var string
    */
    protected $table = 'rap_roles';

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

    public $timestamps = false;
}
