const EXPRESS = require("express");
const APP = EXPRESS();
const BODYPARSER = require("body-parser");
const CONNECTION = require("./database/database");
const PERGUNTA = require("./database/Pergunta");

// Database
CONNECTION
// promisse ES6
  .authenticate()
  .then(()=>{
    console.log("Conectado ao banco de dados..");
  })
  .catch((msgErro)=>{
    console.log(msgErro);
  })


// Usando o EJS como view engine
APP.set('view engine', 'ejs');
// BodyParser (bootstrap)
APP.use(BODYPARSER.urlencoded({extended: false}));
// Permite que lemos dados - bom para usar com API
APP.use(BODYPARSER.json());
// Usando arquivos estáticos

APP.use(EXPRESS.static('/public'));


// ROTAS - index.ejs
APP.get("/", (req, res)=>{
  PERGUNTA.findAll({raw: true, order:[
    ['id','DESC'] //DESC = DECRESCENTE || ASC = ORDENAR CRESCENTE
  ]}).then(perguntas =>{
    console.log(perguntas);
    res.render("index",{
      perguntas: perguntas
    })
  });

   

});

APP.get("/perguntas", (req, res)=>{
  res.render("perguntas");
});

// Rota para salvar dados no banco de dados
APP.post("/salvarpergunta", (req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  PERGUNTA.create({
    titulo:  titulo,
    descricao: descricao
  }).then(()=>{
    res.redirect("/");
  })
  
});

//Porta Servidor
APP.listen(3000, ()=>{
  console.log("App rodando...")
});

