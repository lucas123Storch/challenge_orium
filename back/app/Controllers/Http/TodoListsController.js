'use strict';
const TodoListsRepository = use('App/Repositories/TodoListsRepository');
const BaseController = use('/BaseController');

const TRANSFORM = {
  collection: 'TodoListsTransformer.collection',
  item: 'TodoListsTransformer.item',
};

const INCLUDES = [];

class TodoListsController extends BaseController {
  constructor() {
    super(TodoListsRepository, TRANSFORM);
    this.respository = TodoListsRepository;
    this.includesTransform = INCLUDES;
  }
}

module.exports = TodoListsController;
