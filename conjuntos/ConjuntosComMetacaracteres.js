const texto = '.$+*?-'
console.log(texto.match(/[.$+*?]/g)); // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g));

//NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g));