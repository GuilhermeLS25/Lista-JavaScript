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

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }
  for (let i = 0; i <= num; i += 2) {
    resultado += i + " # ";
  }
  resposta.innerHTML = resultado;
};

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let primo = true;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
  }

  if (primo) {
    resultado.innerHTML = `O número ${numero} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${numero} não é primo`;
    erro.innerHTML = "";
  }
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

const exercicio4 = () => {
  let num = parseInt(document.getElementById("num").value);
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (num <= 0) {
    erro.innerHTML = "Digite outro Valor";
    resultado.innerHTML = "";
    return;
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

  if (num <= 0) {
    erro.innerHTML = "Digite outro valor";
    resultado.innerHTML = "";
    return;
  } else {
    erro.innerHTML = "";
  }
  while (num % 2 == 1) {
    resultado += i + " # ";
  }
  resposta.innerHTML = resultado;
};
