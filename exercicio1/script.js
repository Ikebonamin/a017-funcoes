// exercicio a

let ola = function () {
  console.log('Bond, James Bond!');
};
ola();

// exercicio b
function tabuadaB(num) {
  for (i = 1; i < 7; i++) {
    let res = i * num;
    console.log(`${i} X ${num} = ${res}`);
  }
}
tabuadaB(6);

// exercicio c

const olaB = () => {
  console.log('Bond, James Bond!');
};
olaB();

let tabuada = function (num) {
  for (i = 1; i < 7; i++) {
    let res = i * num;
    console.log(`${i} X ${num} = ${res}`);
  }
};
tabuada(6);
