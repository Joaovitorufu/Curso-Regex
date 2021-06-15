//flag g - global não para quando encontra a primeira ocorrencia
//flag i - ignore case -- ignora letras maiusculas e minusculas
//objetivo mostrar o uso das flags.

const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/C|ab/gi));

