
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Pages publiques
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/eglise', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/departements', function () {
    return Inertia::render('Departments/Index');
})->name('departments.index');

Route::get('/predications', function () {
    return Inertia::render('Sermons/Index');
})->name('sermons.index');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
