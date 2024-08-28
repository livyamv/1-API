const express = require("express"); //importar o express

//Define uma classe para organizar a lógica de aplicação
class AppController {
  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express();
    //Chama o método middlewares para configurar os middlewares
    this.middlewares();
    //Chama o método routes para definir as rotas da Api
    this.routes();
  }
  middlewares(){
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  routes(){
    const users = [];

    this.express.post("/users",(req,res)=>{
      const {id,nome,email,senha} = req.body;
      users.push({id,nome,email,senha});
      res.status(200).send({massage:"Usuário cadastrado com sucesso"});     
      });

      this.express.get("/users/:id",(req,res)=> {
           const{id} = req.params;
           const user = users.find((user) => user.id == id);
            if(user){
              res.status(200).send(user) ;
            }
           else{
            res.status(400).send({message: "Usuário não encontrado"})
           }
        });
        this.express.post('/auth', (req, res) => {
          const { email, senha } = req.body;
          const user = users.find(user => user.email === email);
          if (user && user.senha === senha) {
            res.status(200).send({ message: 'Autenticação bem-sucedida' });
          } else {
            res.status(400).send({ message: 'Falha na autenticação' });
          }
        });

    //Define uma rota GET para o caminho health
    this.express.get('/health/' , (req, res) => {
        res.send({nome:"livia", idade:"16", CPF:"47464803892"});
    });//Essa rot é usada para verificar se a Api está OK
  }
}
//Exportando a instância de Express configurada, para que seja acessada em outros aquivos
module.exports = new AppController().express;