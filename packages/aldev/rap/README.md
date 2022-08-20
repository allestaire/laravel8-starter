# Role and Permission
> Simple role and permission for User model


## Installation

- `composer require aldev/rap`


## Traits


### Aldev\Rap\Traits\RoleTraits


**Methods** | **Description**
------------|----------------
`roles`() | Returns list of roles. Relation to Role model with pivot UserRole.
`hasRole`( $role: `String` ) | Returns **true** if role exists
`assignRole`( $role: `String` ) | Creates role on upsert mode
`revokeRole`( $role: `String` ) | Remove role



### Aldev\Rap\Traits\PermissionTraits


**Methods** | **Description**
----------|----------------
`permissions`() | Returns list of permissions. Relation to Permission model with pivot UserPermission.
`hasPermission`( $per: `String` ) | Return **true** if permission exists
`assignPermission`( $per: `String`) | Creates permission on upsert mode
`revokePermission`( $per: `String`) | Remove permission


## Usage

```php
...
use Aldev\Rap\Traits\RoleTraits;
use Aldev\Rap\Traits\PermissionTraits;

class User extends Authenticatable
{

  use RoleTraits, PermissionTraits;
}
```

