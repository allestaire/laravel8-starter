const mix = require('laravel-mix');
const package = require('./package.json')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


// window._buildVersion = package.version

mix.js('resources/js/app.js', 'public/js/app')
    .react()
    .extract(['react', 'axios', 'xstate', '@xstate/react', 'yup', 'formik'])
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .setPublicPath('public/js/app')
    .version();
