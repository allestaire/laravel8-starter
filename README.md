## Laravel Starter

- Start project anywhere with docker along with React, MUI and more.


### Requirements

- [Docker](https://www.docker.com/)


### Includes

- Laravel 8
- PHP 8
- MySQL 8
- NginX (SSL Configured)
- Authentication ([Sanctum](https://laravel.com/docs/8.x/sanctum#issuing-api-tokens))


### Installation

- Run `docker compose up -d`
- Install composer requirements `docker compose exec php composer install`
- Running migration `docker compose exec php php artisan migrate --seed`


