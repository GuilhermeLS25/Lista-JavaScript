const exercicio1 = () => {
  let resposta = document.getElementById("resposta");

  let resultado = " # ";
  for (let i = 1; i <= 10; i++) {
    resultado += i + " # ";
  }
  resposta.innerHTML = resultado;
};

const exercicio2 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let resposta = "";

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }
  for (let i = 0; i <= num; i += 2) {
    resposta += i + " # ";
  }
  resultado.innerHTML = resposta;
};

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num = document.getElementById("num").value;
  let primo = true;

  if (num <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        primo = false;
      }
    }
  }

  if (primo) {
    resultado.innerHTML = `O número ${num} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${num} não é primo`;
    erro.innerHTML = "";
  }
};

const exercicio4 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (num < 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  for (let i = 1; i <= 10; i++) {
    let calculo = num * i;
    resultado.innerHTML += num + " x " + i + " = " + calculo + "<br>";
  }
};

const exercicio5 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let resposta = "";

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  let i = 0;
  while (i <= num) {
    i += 3;
    resposta += i + " # ";
  }
  resultado.innerHTML = resposta;
};

const exercicio6 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let contador = 1;

  resultado.innerHTML = "";

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  let soma = 0;

  while (contador <= num) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
  }
  resultado.innerHTML = "A soma do 0 até " + num + " é igual a: " + soma;
};

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");

  let resultado = "";

  let i = 10;
  while (i >= 1) {
    resultado += i + " # ";
    i--;
  }

  resposta.innerHTML = resultado;
};

const exercicio8 = (/*DUVIDA*/) => {
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let palavra = document.getElementById("palavra");
  resultado.innerHTML = "";
};

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");

  let resultado = "";
  for (let i = 0; i <= 100; i++) {
    resultado += i + " # ";
  }
  resposta.innerHTML = resultado;
};

const exercicio10 = (/*DUVIDA*/) => {
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let num = parseInt(document.getElementById("num").value);
  resultado.innerHTML = "";
};

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resultado += i + " # ";
    }
  }
  resposta.innerHTML = resultado;
};

const exercicio12 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  let r = 0;

  for (let i = num; i > 0; i--) {
    r += i;
  }
  resultado.innerHTML = "A soma do 0 até " + num + " é igual á: " + r;
};

const exercicio13 = () => {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let resultado = document.getElementById("resultado");
  let resposta = "";

  if (num1 < 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  if (num2 < 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  for (let i = num1; i <= num2; i++) {
    if (i < 2) {
      continue;
    }

    let primo = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo === true) {
      resposta += i + " # ";
    }
  }

  resultado.innerHTML = resposta;
};

const exercicio14 = () => {
  let lado1 = parseFloat(document.getElementById("num1").value);
  let lado2 = parseFloat(document.getElementById("num2").value);
  let resultado = document.getElementById("resultado");
  let area = 0;

  if (lado1 <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  if (lado2 <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  area = (lado1 * lado2) / 2;
  resultado.innerHTML = "A area do triangulo é igual a " + area;
};

const execicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  resultado.innerHTML = "";

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];
    if (
      letra == "a" ||
      letra == "A" ||
      letra == "e" ||
      letra == "E" ||
      letra == "i" ||
      letra == "I" ||
      letra == "o" ||
      letra == "O" ||
      letra == "u" ||
      letra == "U"
    ) {
      resultado.innerHTML += "A letra " + letra + " é uma: VOGAL!<br>";
    } else if (letra === " ") {
      resultado.innerHTML += "<br>";
    } else {
      resultado.innerHTML += "A letra " + letra + " é uma: CONSOANTE!<br>";
    }
  }
};

const exercicio16 = () => {
  let raio = parseFloat(document.getElementById("num1").value);
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let area = 0;

  if (raio <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  ((area = 3), 14 * raio ** 2);
  resultado.innerHTML =
    "A área da Circunferencia é igual á: " + area.toFixed(2);
};

const exercicio17 = () => {
  let base = parseFloat(document.getElementById("num1").value);
  let altura = parseFloat(document.getElementById("num2").value);
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let area = 0;

  if (base <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  if (altura <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  area = (base * altura) / 2;
  resultado.innerHTML = "A área do triangulo é igual á: " + area.toFixed(2);
};

const exercicio18 = () => {
  let baseMaior = parseFloat(document.getElementById("num1").value);
  let baseMenor = parseFloat(document.getElementById("num2").value);
  let altura = parseFloat(document.getElementById("num3").value);

  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let area = 0;

  if (baseMaior <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  if (baseMenor <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  if (altura <= 0) {
    erro.innerHTML = "Digite outros valores";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }

  area = ((baseMaior + baseMenor) * altura) / 2;
  resultado.innerHTML = "A área do trapezio é igual á: " + area.toFixed(2);
};

const exercicio19 = (/*DUVIDA*/) => {
  let palavra = document.getElementById("palavra");
  let letra = document.getElementById("letra");
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
};

const exercicio20 = (/*DUVIDA*/) => {
  let palavra = document.getElementById("palavra");
  let letra = document.getElementById("letra");
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
};

const exercicio21 = (/*DUVIDA*/) => {
  let palavra = document.getElementById("palavra");
  let letra = document.getElementById("letra");
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
};

const exercicio22 = (/*DUVIDA*/) => {
  let num;
};

const exercicio23 = (/*DUVIDA*/) => {
};

const exercicio24 = (/*DUVIDA*/) => {
};

const exercicio25 = (/*DUVIDA*/) => {
};
