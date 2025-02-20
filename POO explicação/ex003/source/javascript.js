var img = document.getElementById("pet-foto");
class Animal {
  constructor(nome, idade, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;

    // nome
    let res_nome = document.getElementById("res-nome");
    res_nome.innerText = "Nome: " + String(this.nome);

    // idade
    let res_idade = document.getElementById("res-idade");
    res_idade.innerText = "Idade: " + String(this.idade);

    // especie
    let res_especie = document.getElementById("res-especie");
    res_especie.innerHTML = "Espécie: " + String(this.getEspecie());

    // cor
    let section = document.getElementById("section-perfil");
    section.style.backgroundColor = `${cor}`;

    let estagio = this.estagio(idade);

    switch (estagio) {
      case "adulto":
        img.src = "./images/" + this.getEspecie() + "-adulto.jpg";
        break;

      case "filhote":
        img.src = "./images/" + this.getEspecie() + "-filhote.jpg";
        let especie = this.getEspecie();
        if (especie == "Peixe") {
          img.src = "./images/Peixe-filhote.png";
        }
        break;

      default:
        break;
    }
  }

  mover() {
    alert(
      "O " + this.getEspecie() + " " + this.nome + " está " + this.frase_mover
    );
  }
}

class Cachorro extends Animal {
  frase_mover = `correndo`;

  getEspecie() {
    return "Cachorro";
  }

  estagio(idade) {
    if (idade > 2) {
      idade = "adulto";
    } else {
      idade = "filhote";
    }
    return idade;
  }
}

class Gato extends Animal {
  frase_mover = `Saltando`;

  getEspecie() {
    return "Gato";
  }

  estagio(idade) {
    if (idade > 1) {
      idade = "adulto";
    } else {
      idade = "filhote";
    }
    return idade;
  }
}

class Passaro extends Animal {
  frase_mover = `Voando`;

  getEspecie() {
    return "Pássaro";
  }

  estagio(idade) {
    if (idade > 1) {
      idade = "adulto";
    } else {
      idade = "filhote";
    }
    return idade;
  }
}

class Peixe extends Animal {
  frase_mover = `Nadando (ouça o som)`;

  getEspecie() {
    return "Peixe";
  }

  estagio(idade) {
    if (idade > 1) {
      idade = "adulto";
    } else {
      idade = "filhote";
    }
    return idade;
  }
}

// Define o passo atual (0 = primeiro passo)
let atual_Step = 0;

// seleciona steps
const steps = Array.from(document.querySelectorAll(".form > div:not(#next)"));

function updateSteps() {
  steps.forEach((step, index) => {
    if (index === atual_Step) {
      step.classList.add("active");
      step.classList.remove("disabled");
    } else {
      step.classList.add("disabled");
      step.classList.remove("active");
    }
  });

  const btnVoltar = document.getElementById("voltar");
  const btnContinuar = document.getElementById("continuar");

  if (atual_Step === 0) {
    btnVoltar.style.display = "none";
  } else {
    btnVoltar.style.display = "inline-block";
  }

  if (atual_Step === steps.length - 1) {
    btnContinuar.style.display = "none";
  } else {
    btnContinuar.style.display = "inline-block";
  }
}

function validarCampos(stepElement) {
  // Seleciona inputs e selects da etapa atual
  const campos = stepElement.querySelectorAll("input, select");
  let valido = true;

  campos.forEach((campo) => {
    // Se o campo estiver vazio ou conter apenas espaços, marca como inválido
    if (!campo.value || campo.value.trim() === "") {
      valido = false;
      // Pode-se adicionar uma classe de erro ou um aviso visual aqui, se desejar
    }
  });
  return valido;
}

function continuar() {
  const etapaAtual = steps[atual_Step];
  // Verifica se os campos da etapa atual foram preenchidos
  if (!validarCampos(etapaAtual)) {
    alert("Por favor, preencha o campo antes de continuar.");
    return; // Não avança para o próximo passo
  }
  if (atual_Step < steps.length - 1) {
    atual_Step++;
    updateSteps();
  }
}

function voltar() {
  if (atual_Step > 0) {
    atual_Step--;
    updateSteps();
  }
}

updateSteps();

function atualizar() {
  // dados
  let nome = String(document.getElementById("nome").value);
  let nascimento = String(document.getElementById("nascimento").value);
  let cor = String(document.getElementById("cor").value);
  let especie = String(document.getElementById("especie").value);

  //process
  let array_nascimento = nascimento.split("-");
  let ano_nascimento = Number(array_nascimento[0]);
  let ano_mes = Number(array_nascimento[1]);
  let ano_dia = Number(array_nascimento[2]);
  let idade = Calcular_idade(ano_nascimento, ano_mes, ano_dia);

  var animal;

  switch (especie) {
    case "cachorro":
      animal = new Cachorro(nome, idade, cor);
      break;

    case "gato":
      animal = new Gato(nome, idade, cor);
      break;
    case "passaro":
      animal = new Passaro(nome, idade, cor);
      break;
    case "peixe":
      animal = new Peixe(nome, idade, cor);
      break;

    default:
      break;
  }
}

//Calcular idade
function Calcular_idade(ano, mes, dia) {
  const data = new Date();
  let ano_atual = data.getFullYear();
  let mes_atual = Number(data.getMonth()) + 1;
  let dia_atual = data.getDate();

  let idade = ano_atual - ano;

  // verifica se não fez aniversário
  if (mes_atual < mes || (mes_atual == mes && dia_atual < dia)) {
    idade -= 1;
  }
/*
  if (idade == 0 || idade == -1) {
    if ((idade == -1)) {
      idade = mes_atual - mes;
    }
    if ((idade == 0)) {
      idade = (12 - mes) + mes - mes_atual;
    }

    idade = Number(String('0.' + idade))
    return idade;
  }
*/

  if (idade < -1 || ano < 1000) {
    idade = "não definida.";
  }

  return idade;
}

function som() {
  let especie = document.getElementById("especie").value;

  const audio = new Audio(`./audios/som_${especie}.mp3`);
  audio.play();

  if (especie == "peixe") {
    alert(`Peixe não faz som! Tente Fazer Movimento (isso faz som)`);
  }
}

function mover() {
  // dados
  let nome = String(document.getElementById("nome").value);
  let nascimento = String(document.getElementById("nascimento").value);
  let cor = String(document.getElementById("cor").value);

  //process
  let array_nascimento = nascimento.split("-");
  let ano_nascimento = Number(array_nascimento[0]);
  let ano_mes = Number(array_nascimento[1]);
  let ano_dia = Number(array_nascimento[2]);
  let idade = Calcular_idade(ano_nascimento, ano_mes, ano_dia);

  let especie = document.getElementById("especie").value;
  const audio = new Audio(`./audios/mover-peixe.mp3`);

  switch (especie) {
    case "cachorro":
      let cachorro = new Cachorro(nome, idade, cor);
      cachorro.mover();
      break;

    case "gato":
      let gato = new Gato(nome, idade, cor);
      gato.mover();
      break;

    case "passaro":
      let passaro = new Passaro(nome, idade, cor);
      passaro.mover();
      break;

    case "peixe":
      audio.play();
      break;

    default:
      break;
  }
}
