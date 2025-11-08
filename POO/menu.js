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
    const palavraChave = prompt(
      "Para ver sua senha, você precisa falar a palavra chave: "
    );

    if (this.palavraChave == palavraChave) {
      console.log(`Você acertou a palavra chave. Sua senha é: ${this.#senha}`);
    } else {
      console.log("Você não acertou a palavra chave :(");
    }
  }
}

// herança - extends
class Aluno extends Pessoa {
  constructor(nome, dataNasc, senha, RA) {
    super(nome, dataNasc, senha);
    this.RA = RA;
  }

  // polimorfismo
  // sobrescrita - override
  apresentar() {
    console.log(`Olá aluno ${this.nome}`);
    console.log("-- Essas são suas informações -- ");    
    console.log(`• RA: ${this.RA}`);
  }
}

class Professor extends Pessoa {
  // os parametros são os valores das chaves(propriedades)
  constructor(nome, dataNasc, senha, salario, registro) {
    // super - puxar as propriedades da classe Pessoa
    super(nome, dataNasc, senha);
    // são as chaves = propriedades da classe
    this.salario = salario;
    this.registro = registro;

  }
  
  apresentar() {
    console.log(`Olá professor ${this.nome}`);
    console.log("--Essas são suas informações--");
    console.log(`• Salario: ${this.salario}`);
    console.log(`• Registro: ${this.registro}`);
  }
}

console.log("-- Bem vindo ao cadastro👋 --");
console.log("Se for PROFESSOR digite 1");
console.log("Se for ALUNO digite 2");
let professorOuAluno = Number(prompt(""));

let novaPessoa;

let nomePessoa = prompt("Digite seu nome: ");
let dataNascPessoa = prompt(
  "Digite sua data de nascimento - formato ano/mês/dia: "
);
let senhaPessoa = prompt("Digite sua senha: ");

// verificar se é aluno ou professor
if (professorOuAluno == 1) {
  let registroProfessor = prompt("Digite seu registro:");
  let salarioProfessor = prompt("Digite seu salario:");

  // instanciando classe Professor
  novaPessoa = new Professor(
    nomePessoa, 
    dataNascPessoa,
    senhaPessoa,
    salarioProfessor,
    registroProfessor
  )

} else if (professorOuAluno == 2) {
  let raAluno = prompt("Digite seu RA:");

  // instanciando classe Aluno
  novaPessoa = new Aluno(
    nomePessoa, 
    dataNascPessoa,
    senhaPessoa,
    raAluno
  )

} else {
  console.log("Opção inválida. Tente novamente");
}


console.log(novaPessoa);
console.log(novaPessoa.apresentar());


// criando o objeto / instância
/* const novaPessoa = new Pessoa(
  nomePessoa,
  idadePessoa,
  dataNascPessoa,
  senhaPessoa,
  palavraChavePessoa
); */

// aciona a função do objeto já criado
// novaPessoa.apresentar();
// novaPessoa.senha;

// verificarPessoa();

// exibir todo o objeto
// console.log(novaPessoa);
