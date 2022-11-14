const BumblebeeTransformer = use('Bumblebee/Transformer');

class TodoListsTransformer extends BumblebeeTransformer {
  Company(model) {
    return {
      id: model.id,
      status: model.status,
      created_at: model.created_at,
      title: model.title,
      description: model.description,
      listId: model.listId,
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
