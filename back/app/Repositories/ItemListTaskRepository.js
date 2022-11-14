'use strict';

const BaseRepository = use('./BaseRepository');
const { ioc } = require('@adonisjs/fold');

class ItemListTaskRepository extends BaseRepository {
  constructor(model) {
    super(model);
    this.model = model;
  }
}

ioc.singleton(
  'ItemListTaskRepository',
  (app) => new ItemListTaskRepository(app.use('App/Models/ItemListTask')),
);

module.exports = ioc.use('ItemListTaskRepository');
