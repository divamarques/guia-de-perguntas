const SEQUELIZE =  require('sequelize');

const CONNECTION = new SEQUELIZE('guiaperguntas', 'root', 'Skolatinha1!',{
  // Onde está rodando, no caso (meu computador);
  host: 'localhost',
  // qual tipo de banco está sendo usado.
  dialect: 'mysql'
});

module.exports = CONNECTION;