// Exercício A

let contas = function (num1, num2) {
  const mult = num1 * num2;
  const soma = num1 + num2;
  const div = num1 / num2;
  const sub = num1 - num2;
  console.log(mult, soma, div, sub);
};
contas(10, 100);

// Exercício B

let contasUser = function (num3, num4) {
  const mult = num3 * num4;
  const soma = num3 + num4;
  const div = num3 / num4;
  const sub = num3 - num4;
  console.log(mult, soma, div, sub);
};
contasUser(+prompt('Digite um número'), +prompt('digite outro número'));
