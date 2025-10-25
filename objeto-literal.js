let pessoa = {
  nome: "Gustavo",
  dataNasc: new Date(2006, 0, 20).toLocaleString("pt-BR"),
  altura: 1.73,
  peso: 60,
  senha: "123a",
  idade: 18,
  maiorDeIdade() {
    return this.idade >= 18;
  },
  apresentar() {
    return `Olá eu me chamo ${this.nome}, minha idade é ${this.idade}`;
  },
};

console.log(pessoa);

console.log(pessoa.maiorDeIdade());
