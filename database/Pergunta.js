// arquivos model começam com letra maiusculas

const SEQUELIZE = require("sequelize");
const CONNECTION = require("./database");

// definindo model

const PERGUNTA = CONNECTION.define('perguntas',{
  titulo:{
    type: SEQUELIZE.STRING,
    allowNull: false
  },
  descricao:{
    type: SEQUELIZE.TEXT,
    allowNull: false
  }
});
// Garante que a tabela seja criada somente uma vez;.then() é executado quando criada a tabela no banco
PERGUNTA.sync({force: false}).then(()=>{});

module.exports = PERGUNTA;