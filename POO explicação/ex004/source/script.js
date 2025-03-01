class Animal {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    fazerSom() { return "Este animal faz um som."; }
    mover() { return "Este animal se move."; }
}
class Cachorro extends Animal {
    fazerSom() { return `O cachorro ${this.nome} late: Au Au!`; }
    mover() { return `O cachorro ${this.nome} está correndo!`; }
}
class Gato extends Animal {
    fazerSom() { return `O gato ${this.nome} mia: Miau!`; }
    mover() { return `O gato ${this.nome} está saltando!`; }
}
class Passaro extends Animal {
    fazerSom() { return `O pássaro ${this.nome} canta: Piu Piu!`; }
    mover() { return `O pássaro ${this.nome} está voando!`; }
}
class Peixe extends Animal {
    fazerSom() { return `O peixe ${this.nome} não faz som.`; }
    mover() { return `O peixe ${this.nome} está nadando!`; }
}
class Cavalo extends Animal {
    fazerSom() { return `O cavalo ${this.nome} relincha: Iiirrrrí!`; }
    mover() { return `O cavalo ${this.nome} está galopando!`; }
}
let animal;
function nextStep(step) {
    console.log(`➡️ Iniciando nextStep(${step})`);

    // Esconde a etapa atual
    let currentStep = document.getElementById(`step${step}`);
    console.log(` Escondendo: step${step}`);
    currentStep.classList.remove("active");

    // Mostra a próxima etapa
    let nextStep = document.getElementById(`step${step + 1}`);
    console.log(` Mostrando: step${step + 1}`);
    nextStep.classList.add("active");

    // Se o usuário estiver na última etapa (step 2), criamos o objeto do animal
    if (step === 2) {
        let tipo = document.getElementById("tipoAnimal").value;
        let nome = document.getElementById("nomeAnimal").value;
        let cor = document.getElementById("corAnimal").value;

        console.log(` Valores capturados: Tipo: ${tipo}, Nome: ${nome}, Cor: ${cor}`);

        // Criando a instância do animal correto
        switch (tipo) {
            case "cachorro":
                animal = new Cachorro(nome, cor);
                break;
            case "gato":
                animal = new Gato(nome, cor);
                break;
            case "passaro":
                animal = new Passaro(nome, cor);
                break;
            case "peixe":
                animal = new Peixe(nome, cor);
                break;
            case "cavalo":
                animal = new Cavalo(nome, cor);
                break;
        }

        console.log(` Animal criado: ${animal.constructor.name} | Nome: ${animal.nome} | Cor: ${animal.cor}`);

        // Exibindo as informações na interface
        document.getElementById("animalInfo").innerText = `Você criou um ${tipo} chamado ${nome}.`;
        document.getElementById("animalBox").style.backgroundColor = cor;

        console.log(" Cor do animal aplicada ao elemento.");
    }
}

function fazerSom() {
    alert(animal.fazerSom());
}
function moverAnimal() {
    alert(animal.mover());
}
function resetForm() {
    document.getElementById("step3").classList.remove("active");
    document.getElementById("step1").classList.add("active");
}