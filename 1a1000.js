numero = 1;
contador = 0;

naturais = [
  "",
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
];

unidades = [
  "",
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
];

dezenas = [
  "vinte",
  "trinta",
  "quarenta",
  "cinquenta",
  "sessenta",
  "setenta",
  "oitenta",
  "noventa",
];

centenas = [
  "cento",
  "duzentos",
  "trezentos",
  "quatrocentos",
  "quinhentos",
  "seiscentos",
  "setecentos",
  "oitocentos",
  "novecentos",
];

milhar = "mil";

for (numero = 1; numero < 1000; numero++) {
  // Numero menor que 20

  if (numero < 20) {
    aux20 = unidades.map((un) => {
      return un.length;
    });

    // Soma de todo o array em um unico valor, resultando na contagem das letras do array
    contador20 = aux20.reduce(function (contador, numeroAtual) {
      return contador + numeroAtual;
    });
  }
  // Numero menor que 100

  if (numero < 100) {
    aux = dezenas.map((de) => {
      aux2 = naturais.map((un) => {
        // Se o numero natural for zero, o "E" não será adicionado
        if (un != 0) {
          return de.length + "e".length + un.length;
        }
        return de.length + un.length;
      });
      return aux2;
    });

    // Tranformar o array em unidimensional para realizar a soma dos caracteres

    aux = aux.flat();

    contador100 = aux.reduce(function (contador, numeroAtual) {
      return contador + numeroAtual;
    });
  }

  // Numero maior que 100

  if (numero < 1000) {
    // Numero / 100 menor que 20

    if (numero / 100 < 20) {
      aux1020 = centenas.map((ce) => {
        aux1020 = unidades.map((un) => {
          if (un.length != 0) {
            return ce.length + "e".length + un.length;
          }

          return ce.length + un.length;
        });

        return aux1020;
      });
      aux1020 = aux1020.flat();

      contador1020 = aux1020.reduce(function (contador, numeroAtual) {
        return contador + numeroAtual;
      });
    }
    // Numero / 100 maior ou igual a 20

    aux1000 = centenas.map((ce) => {
      aux1002 = dezenas.map((de) => {
        aux1003 = naturais.map((na) => {
          if (na.length != 0 && ce.length != 0) {
            return ce.length + "e".length + de.length + "e".length + na.length;
          }

          if (ce.length != 0) {
            return ce.length + "e".length + de.length + na.length;
          }
          if (na.length != 0) {
            return ce.length + de.length + "e".length + na.length;
          }

          return ce.length + de.length + na.length;
        });
        return aux1003;
      });
      return aux1002;
    });
    aux1000 = aux1000.flat(2);
    contador1000 = aux1000.reduce(function (contador, numeroAtual) {
      return contador + numeroAtual;
    });
  }
}

/*
Soma de todos os contadores, incrementando 3 para o "mil" e
subtraindo 2 para transformar o "cento" em "cem"
*/

contFinal = contador20 + contador100 + contador1020 + contador1000 - 2 + 3;

console.log("Total de letras " + contFinal);
