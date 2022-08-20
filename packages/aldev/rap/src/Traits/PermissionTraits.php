<?php

namespace Aldev\Rap\Traits;

use Aldev\Rap\Models\Permission;
use Aldev\Rap\Models\UserPermission;

/**
 * The DemoTrait trait.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
trait PermissionTraits
{
    /**
     * [permissions description]
     * @return [type] [description]
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'rap_user_permission')
            ->using(UserPermission::class)
            ->withTimestamps();
    }
    /**
     * [hasPermission description]
     * @param  [type]  $per [description]
     * @return boolean      [description]
     */
    public function hasPermission($per)
    {
        return $this->permissions()
            ->where('name', $per)
            ->exists();
    }
    /**
     * [assignPermission description]
     * @param  [type] $per [description]
     * @return [type]      [description]
     */
    public function assignPermission($per)
    {
        $permission = Permission::where('name', $per)->first();
        if(!$permission) {
            $permission = Permission::create([
                'name' => $per
            ]);
            $permission->refresh();
        }
        $this->permissions()
            ->attach($permission->id);
    }
    /**
     * [revokePermission description]
     * @param  [type] $per [description]
     * @return [type]      [description]
     */
    public function revokePermission( $per )
    {
        $permission = Permission::where('name', $per)->first();
        if($permission) {
            $this->permissions()
                ->detach($permission->id);
        }
    }
}
