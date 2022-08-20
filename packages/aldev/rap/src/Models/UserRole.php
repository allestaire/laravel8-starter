<?php

namespace Aldev\Rap\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class UserRole extends Pivot
{
    protected $table = 'rap_user_role';
}
