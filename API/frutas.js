import express from "express";

const app = express();

let frutas = ["maça", "banana", "melancia", "uva", "morango"];

// fala para o serviço conseguir interpretar em JSON
app.use(express.json());

// post - colocando mais um item no json frutas
app.post("/fruta", (req, res) => {
  // http://localhost:3000/fruta -- json no postman para adicionar novo
  // passando o nome da nova fruta com base no json
  const novaFruta = req.body.nome;

  frutas.push(novaFruta);

  res.send("Fruta cadastrada com sucesso!");
});

// vizualizar o array de frutas
app.get("/fruta", (req, res) => {
  res.send(frutas);
});

// alterando a fruta
app.put("/fruta/:posicao", (req, res) => {
  const posicao = req.params.posicao;
  const novoNome = req.body.nome;
  // acessando a posição da fruta desejada e atribuindo um novo valor
  frutas[posicao] = novoNome;
  res.send(`Fruta foi substituida por ${novoNome}`);
});

// deletando a fruta
app.delete("/fruta/:posicao", (req, res) => {
  const posicao = req.params.posicao;

  frutas.splice(posicao, 1);
  res.send(`Fruta da posicao '${posicao}' deletada com sucesso!`);
});

// precisa estar como a última instrução
app.listen(3000, () => {
  console.log("Iniciando minha API com Express");
});
