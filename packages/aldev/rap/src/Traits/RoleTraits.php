<?php

namespace Aldev\Rap\Traits;

use Aldev\Rap\Models\Role;
use Aldev\Rap\Models\UserRole;

/**
 * The DemoTrait trait.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
trait RoleTraits
{
    /**
     * [roles description]
     * @return [type] [description]
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'rap_user_role')
            ->using(UserRole::class)
            ->withTimestamps();
    }
    /**
     * [hasRole description]
     * @param  [type]  $role [description]
     * @return boolean       [description]
     */
    public function hasRole($role)
    {
        return $this->roles()
            ->where('name', $role)
            ->exists();
    }
    /**
     * [assignRole description]
     * @param  [type] $role [description]
     * @return [type]       [description]
     */
    public function assignRole($r)
    {
        $role = Role::where('name', $r)->first();
        if(!$role) {
            $role = Role::create([
                'name' => $r
            ]);
            $role->refresh();
        }
        $this->roles()
            ->attach($role->id);
    }
    /**
     * [revokeRole description]
     * @param  [type] $r [description]
     * @return [type]    [description]
     */
    public function revokeRole($r)
    {
        $role = Role::where('name', $r)->first();
        if($role) {
            $this->roles()
                ->detach($role->id);
        }
    }
}
