<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileEditController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/profile', function () {
//     return view('/profile/update_page');
// });

Route::controller(AuthenticatedSessionController::class)->group(function(){
    Route::get('/', 'create')->name('create');
});

Route::controller(ProfileEditController::class)->group(function(){
    Route::get('/profile/profile_admin', 'profileAll')->name('admin.profile.profile_admin');
});

Route::controller(AdminController::class)->group(function (){
    Route::get('/admin/logout', 'Destroy')->name('admin.logout');
});

Route::get('/dashboard', function () {
    return view('admin.index');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
