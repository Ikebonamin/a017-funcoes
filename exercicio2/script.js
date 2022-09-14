// exercício A
function primeira(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}
primeira(15, 5);

// exercício B
function segunda(num1, num2) {
  return num1 >= num2 ? console.log(num1 >= num2) : null;
}
segunda(15, 5);

// exercicio C

function terceira(num1) {
  return num1 % 2 === 0 ? console.log('é Par!') : console.log('é impar');
}
terceira(8);

// exercicio D

function quarta(string) {
  console.log(
    `A string colocada foi: ${string}, e tem ${string.length} letras`
  );
  console.log(`${string.toUpperCase()}`);
}
quarta('cachorro é legal');
