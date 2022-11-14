const BumblebeeTransformer = use('Bumblebee/Transformer');

class CompanyTransformer extends BumblebeeTransformer {
  Company(model) {
    return {
      id: model.id,
      status: model.status,
      created_at: model.created_at,
      id: model.id,
      name: model.name,
      cnpj: model.cnpj,
      company_name: model.company_name,
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

module.exports = CompanyTransformer;
