'use strict';

const BaseRepository = use('./BaseRepository');
const { ioc } = require('@adonisjs/fold');

class TodoListsRepository extends BaseRepository {
  constructor(model) {
    super(model);
    this.model = model;
  }
}

ioc.singleton(
  'TodoListsRepository',
  (app) => new TodoListsRepository(app.use('App/Models/TodoLists')),
);

module.exports = ioc.use('TodoListsRepository');
