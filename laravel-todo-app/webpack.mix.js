const mix = require('laravel-mix');
const { routerKey } = require('vue-router');

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

mix.js('resources/js/app.js', 'public/js', 'resources/js/routes.js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
