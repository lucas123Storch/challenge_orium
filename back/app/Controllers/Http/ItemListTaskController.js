'use strict';
const ItemListTaskRepository = use('App/Repositories/ItemListTaskRepository');
const BaseController = use('/BaseController');

const TRANSFORM = {
  collection: 'ItemListTaskTransformer.collection',
  item: 'ItemListTaskTransformer.item',
};

const INCLUDES = [];

class ItemListTaskController extends BaseController {
  constructor() {
    super(ItemListTaskRepository, TRANSFORM);
    this.respository = ItemListTaskRepository;
    this.includesTransform = INCLUDES;
  }
}

module.exports = ItemListTaskController;
