<?php

namespace Aldev\Rap;

use Illuminate\Support\ServiceProvider;
// use Aldev\Rap\Console\Commands\DemoCommand;

/**
 * The RapServiceProvider class.
 *
 * @package aldev/rap
 * @author  Al Lestaire Acasio <allestaire.acasio@gmail.com>
 */
class RapServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // Load package's config
        $this->mergeConfigFrom($this->getPackageConfigPath(), 'rap');

        // Register package's main service
        $this->app->singleton('rap', function ($app) {
            return new Rap;
        });

        // $this->app->singleton('command.rap.demo', function ($app) {
        //     return new DemoCommand;
        // });
    }

    /**
     * Bootstrap the application events.
     *
     * @return void
     */
    public function boot()
    {
        // Bootstrap handle
        $this->bootConfig();
        $this->bootCommands();
        $this->bootRoutes();
        $this->bootTranslations();
        $this->bootViews();
        $this->bootMigrations();
    }

    /**
     * Determine if the provider is deferred.
     *
     * @return bool
     */
    public function isDeferred()
    {
        return false;
    }

    /**
     * Get the services provided by the provider.
     *
     * This method is only really useful when the `isDeferred()` method above
     * returns `true`
     *
     * @return array
     */
    public function provides()
    {
        return [
            'rap',
            // 'command.rap.demo',
        ];
    }

    /**
     * Get package's default config file path
     *
     * @return string
     */
    protected function getPackageConfigPath()
    {
        return __DIR__ . '/config/config.php';
    }

    /**
     * Publishing package's config
     *
     * @return void
     */
    protected function bootConfig()
    {
        $this->publishes([
            $this->getPackageConfigPath() => config_path('rap.php')
        ], 'config');
    }

    /**
     * Handle package's commands
     *
     * @return void
     */
    protected function bootCommands()
    {
        $this->commands([
            // 'command.rap.demo'
        ]);
    }

    /**
     * Loading package's routes
     *
     * @return void
     */
    protected function bootRoutes()
    {
        $packageRoutes = __DIR__ . '/routes/routes.php';

        if (method_exists($this, 'loadRoutesFrom')) {
            $this->loadRoutesFrom($packageRoutes);
        } else {
            if (method_exists($this->app, 'routesAreCached')) {
                if (! $this->app->routesAreCached()) {
                    require $packageRoutes;
                }
            } else {
                include $packageRoutes;
            }
        }
    }

    /**
     * Loading and publishing package's translations
     *
     * @return void
     */
    protected function bootTranslations()
    {
        $packageTranslationsPath = __DIR__ . '/resources/lang';

        $this->loadTranslationsFrom($packageTranslationsPath, 'rap');
        $this->publishes([
            $packageTranslationsPath => base_path('resources/lang/vendor/rap'),
        ], 'lang');
    }

    /**
     * Loading and publishing package's views
     *
     * @return void
     */
    protected function bootViews()
    {
        $packageViewsPath = __DIR__ . '/resources/views';

        $this->loadViewsFrom($packageViewsPath, 'rap');
        $this->publishes([
            $packageViewsPath => base_path('resources/views/vendor/rap'),
        ], 'views');
    }

    /**
     * Loading and publishing package's migrations
     *
     * @return void
     */
    protected function bootMigrations()
    {
        $packageMigrationsPath = __DIR__ . '/database/migrations';

        if (method_exists($this, 'loadMigrationsFrom')) {
            $this->loadMigrationsFrom($packageMigrationsPath);
        }

        $this->publishes([
            $packageMigrationsPath => database_path('migrations')
        ], 'migrations');
    }
}
