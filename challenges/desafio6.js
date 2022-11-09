db.produtos.find({$or: [{curtidas: {$gt: 10, $lt: 100}}]},
  {_id: 0,
  curtidas: 1,
    nome: 1});