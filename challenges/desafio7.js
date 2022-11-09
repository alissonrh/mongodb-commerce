db.produtos.find({ $and: [{ vendidos: { $not: { $eq: 50 } } }, { tag: { $exists: true } }] },
  {
    _id: 0,
    vendidos: 1,
    nome: 1,
  });
