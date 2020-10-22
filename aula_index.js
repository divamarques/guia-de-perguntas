const EXPRESS = require("express");
const APP = EXPRESS();

// Usando o EJS como view engine
APP.set('view engine', 'ejs');
// Usando arquivos estáticos
APP.use(EXPRESS.static('public'));


// ROTAS
APP.get("/:nome/:lang", (req, res)=>{

  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;

  var produtos = [
    {nome: "coca-cola", preco: 2.50},
    {nome: "Heineken", preco: 3.50},
    {nome: "Brahma", preco: 4.50},
    {nome: "Red bull", preco: 6.50},

  ]

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Noronha Inn",
    inscritos: 3468,
    msg: exibirMsg,
    produtos: produtos
  });

});
//Porta Servidor
APP.listen(8000, ()=>{
  console.log("App rodando...")
});