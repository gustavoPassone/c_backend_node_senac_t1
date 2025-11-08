import express from "express";

const app = express();

// fala para o serviço conseguir interpretar em JSON
app.use(express.json());

// rota que o cliente irá solicitar
app.get("/", (req, res) => {
  // retornando uma mensagem ao nosso cliente
  res.send("res: Hello World");
});

// rota específica
app.get("/usuario/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Acessando uma rota especifica 
    Cliente está acessando o usuário com o id ${id}`);

  // end também encerra a requisição - porém, só aceita receber valores do tipo string ou buffer
  // res.end()
});

// dois parametros
app.get("/aluno/:nome/:curso", (req, res) => {
  const novoAluno = {
    nome: req.params.nome,
    curso: req.params.curso,
  };
  res.send(novoAluno);

  // http://localhost:3000/aluno/gustavo/node
});

// precisa estar como a última instrução
app.listen(3000, () => {
  console.log("Iniciando minha API com Express");
});
