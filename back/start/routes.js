'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.post('/register', 'AuthController.register').validator('Register');
  Route.post('/login', 'AuthController.login');
  Route.get('/get-token', 'AuthController.getTokenByEmail').middleware([
    'auth',
  ]);
}).prefix('/auth');

Route.resource('user', 'UserController').middleware(['auth']).apiOnly();
Route.resource('todoLists', 'TodoListsController')
  .middleware(['auth'])
  .apiOnly();

Route.resource('itemListTask', 'ItemListTaskController').middleware(['auth']).apiOnly();
