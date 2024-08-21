const express = require("express"); //Importa o módulo Express

class AppController {
  //Define uma classe para organizar a lógica da aplicação

  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express(); //Chama o método middlewares para configurar os middlewares
    this.middlewares(); //Chama o método routes para definir as rotas da Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON na requisições
    this.express.use(express.json());
  }
  //Define as rotas da API
  routes() {
    this.express.get("/health/", (req, res) => {
      //Define uma rota Get para o caminho health
      res.send({ status: "OK", nome:"Lívia" });
    }); // Essa rota é usada para verificar se a Api está OK
  }
}
//Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;
