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
        frase += ` late: Au! Au!`;
        break;

      case "gato":
        frase += ` mia: Miau!`;
        break;

      case "pássaro":
        frase += ` canta: Piu Piu!`;
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
        frase += ` está correndo!`;
        break;

      case "gato":
        frase += ` está saltando!`;
        break;

      case "pássaro":
        frase += ` está voando!`;
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
