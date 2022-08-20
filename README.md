## Laravel Starter

- Start project anywhere with docker along with React, MUI and more.


### Requirements

- [Docker](https://www.docker.com/)


### Includes

- [Laravel 8](https://laravel.com/docs/8.x)
- PHP 8
- MySQL 8
- NginX (SSL Configured)
- [Sanctum](https://laravel.com/docs/8.x/sanctum#issuing-api-tokens)
- [Packager](https://github.com/JackieDo/laravel-packager)
- [Role and Permission](https://github.com/Als-Laravel-Packages/Rap)
- [React](https://reactjs.org/)
- [YupJS](https://github.com/jquense/yup)
- [Formik](https://formik.org/)
- [Machine State](https://xstate.js.org/docs/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)


### Installation

- Run `docker compose up -d`
- Install composer requirements `docker compose exec php composer install`
- Running migration `docker compose exec php php artisan migrate --seed`


