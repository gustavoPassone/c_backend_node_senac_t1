// instalando a biblioteca que permite a entrada de dados
import PromptSync from "prompt-sync";

// aciona a função da bibioteca
let prompt = PromptSync();

// class é um modelo de algo(objeto)
class Pessoa {
  // atributo privado
  #senha;

  // construtor constroi mais de um objeto
  // para por os valores de cada obj, colocamos via parametro
  constructor(nome, idade, dataNasc, senha, palavraChave) {
    this.nome = nome;
    this.idade = idade;
    this.dataNasc = new Date(dataNasc).toLocaleDateString("pt-BR");
    this.#senha = senha;
    this.palavraChave = palavraChave;
  }

  apresentar() {
    console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos.`);
  }

  // metodo especial que permite eu gerenciar a visualização da senha
  get senha() {
    const palavraChave = prompt("Para ver sua senha, você precisa falar a palavra chave: ");

    if (this.palavraChave == palavraChave) {
      console.log(`Você acertou a palavra chave. Sua senha é: ${this.#senha}`);
    } else {
      console.log("Você não acertou a palavra chave :(");
    }
  }
}

let nomePessoa = prompt("Digite seu nome: ");
let idadePessoa = Number(prompt("Digite sua idade: "));
let dataNascPessoa = prompt("Digite sua data de nascimento - formato ano/mês/dia: ");
let senhaPessoa = prompt("Digite sua senha: ");
let palavraChavePessoa = prompt("Digite sua palavra chave: ");

// criando o objeto / instância
const novaPessoa = new Pessoa(
  nomePessoa,
  idadePessoa,
  dataNascPessoa,
  senhaPessoa,
  palavraChavePessoa
);


// aciona a função do objeto já criado
novaPessoa.apresentar();
novaPessoa.senha

// exibir todo o objeto
// console.log(novaPessoa);