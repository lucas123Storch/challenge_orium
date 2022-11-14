'use strict';
const Repository = use('App/Repositories/Repository');
const BaseController = use('/BaseController');

const TRANSFORM = {
  collection: 'Transformer.collection',
  item: 'Transformer.item',
};

const INCLUDES = [];

class Controller extends BaseController {
  constructor() {
    super(Repository, TRANSFORM);
    this.respository = Repository;
    this.includesTransform = INCLUDES;
  }
}

module.exports = Controller;
