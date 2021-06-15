// . é um coringa, válido para uma posição apenas
const texto = '1,2,3,4,5,6,7,8,9,0'


console.log(texto.match(/1.2/g)); //o ponto esta fazendo o papel da vingula e poderia ser qualquer coisa
console.log(texto.match(/1..2/g)); // não existe 2 coisas entre o 1 e o 2 na sting;
console.log(texto.match(/1..,/g)); // ira achar !!!

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));