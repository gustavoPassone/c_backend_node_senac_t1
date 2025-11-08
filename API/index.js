import express from "express";

const app = express();

// rota que o cliente irá solicitar
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Iniciando minha API com express");
});
