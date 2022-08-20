<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'rap'], function() {
    Route::get('demo', 'Aldev\Rap\Http\Controllers\RapController@demo');
});
