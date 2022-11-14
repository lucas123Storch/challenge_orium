const BumblebeeTransformer = use('Bumblebee/Transformer');

class TodoListsTransformer extends BumblebeeTransformer {
  Company(model) {
    return {
      id: model.id,
      status: model.status,
      created_at: model.created_at,
      listName: model.listName,
      tasks: model.tasks,
      creator: model.creator,
      updated_at: model.updated_at,
    };
  }
  transformCollection(model) {
    return this.Company(model);
  }

  transformItem(model) {
    return this.Company(model);
  }
}

module.exports = TodoListsTransformer;
