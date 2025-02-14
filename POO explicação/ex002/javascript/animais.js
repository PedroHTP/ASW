// names in input
let input_Dogs = document.getElementById("listdogs");
let input_Cats = document.getElementById("listcats");
let input_Birds = document.getElementById("listbirds");

// Set values in input
input_Dogs.addEventListener("input", updateValue);
input_Cats.addEventListener("input", updateValue);
input_Birds.addEventListener("input", updateValue);

// names
let input_Value_Dogs = String(input_Dogs.value);
let input_Value_Cats = String(input_Cats.value);
let input_Value_Birds = String(input_Birds.value);

// Classe Base (Animal)
class Animal {
  constructor(nome) {
    this.nome = nome; // Encapsulamento (protegendo o dado dentro da classe)
  }

  SetNome(nome) {
    this.nome = nome;
  }

  fazerSom(especie) {
    let frase = `O ${especie} ${this.nome}`;
    switch (especie) {
      case "animal":
        frase += ` faz um som!`;
        break;

      case "cachorro":
        switch (this.nome) {
          case "Max":
              frase += ` late: au! au!`;
            break;

          case "Tiberius":
              frase += ` late: woof! woof!`;
            break;
          case "Picard":
              frase += ` late: vau! vau!`;
            break;
          default:
            break;
        }

        break;

      case "gato":
        switch (this.nome) {
          case "Uhura":
              frase += ` mia: Mrrrrow! Mrrrrow!`;
            break;

          case "Rebeca":
              frase += ` mia: meeaOOOW! meeaOOOW!`;
            break;
          case "Joana":
              frase += ` mia: raaaAAAAH! raaaAAAAH!`;
            break;
          default:
            break;
        }
        break;

      case "pássaro":
        switch (this.nome) {
          case "Bones":
              frase += ` canta: nrrrrow! mrrrrow!`;
            break;

          case "Cassandra":
              frase += ` canta: fi! fi!`;
            break;
          case "Roberta":
              frase += ` canta: piu! piu! piu!`;
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }
    return frase;
  }

  mover(especie) {
    let frase = `O ${especie} ${this.nome}`;
    switch (especie) {
      case "animal":
        frase += ` está se movendo!`;
        break;

      case "cachorro":
        switch (this.nome) {
          case "Max":
              frase += ` está correndo atrás do rabo!`;
            break;

          case "Tiberius":
              frase += ` está correndo ao redor da casa!`;
            break;
          case "Picard":
              frase += ` está correndo para brincar`;
            break;
          default:
            break;
        }
        break;

      case "gato":
        switch (this.nome) {
          case "Uhura":
              frase += ` está saltando em cima do sofá!`;
            break;

          case "Rebeca":
              frase += ` está saltando pelo muro!`;
            break;
          case "Joana":
              frase += ` está saltando na cama!`;
            break;
          default:
            break;
        }
        break;

      case "pássaro":
        switch (this.nome) {
          case "Bones":
              frase += ` está voando para o norte!`;
            break;

          case "Cassandra":
              frase += ` está voando ao redor da casa!`;
            break;
          case "Roberta":
              frase += ` está voando para o ponto mais alto da casa!`;
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }
    return frase;
  }
}

// Criando instâncias
let animal = new Animal("generico");
let cachorro = new Animal(input_Value_Dogs);
let gato = new Animal(input_Value_Cats);
let passaro = new Animal(input_Value_Birds);

function updateValue() {
  cachorro.SetNome(input_Dogs.value);
  gato.SetNome(input_Cats.value);
  passaro.SetNome(input_Birds.value);
}

// Funções para exibir os sons e movimentos
function mostrarSom(tipo) {
  let resultado = document.getElementById("resultado");
  switch (tipo) {
    case "animal":
      resultado.innerHTML = animal.fazerSom(tipo);
      break;
    case "cachorro":
      resultado.innerHTML = cachorro.fazerSom(tipo);
      break;
    case "gato":
      resultado.innerHTML = gato.fazerSom(tipo);
      break;
    case "pássaro":
      resultado.innerHTML = passaro.fazerSom(tipo);
      break;
    default:
      break;
  }
}

function mostrarMovimento(tipo) {
  let resultado = document.getElementById("resultado");
  switch (tipo) {
    case "animal":
      resultado.innerHTML = animal.mover(tipo);
      break;
    case "cachorro":
      resultado.innerHTML = cachorro.mover(tipo);
      break;
    case "gato":
      resultado.innerHTML = gato.mover(tipo);
      break;
    case "pássaro":
      resultado.innerHTML = passaro.mover(tipo);
      break;
    default:
      break;
  }
}
