const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // não define um range

console.log(texto.match(/[A-z]/g)); // intervalos usam a ordem da tabela ASCII


//tem que respeitar a ordem da tabela ASCII
//console.log(texto.match(/[a-Z]/g)); //ira dar um erro pois o maiusculo vem antes
//vale para letras e numeros