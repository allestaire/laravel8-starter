<?php

namespace Aldev\Rap\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class UserPermission extends Pivot
{
    protected $table = 'rap_user_permission';
}
