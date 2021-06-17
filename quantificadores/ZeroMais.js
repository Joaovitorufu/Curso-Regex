const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando : FOGOOOO!'
const texto2 = 'There is a big fog in NYC'


// asterisco representa zero ou mais
const regex = /fogo*/gi
console.log(texto1.match(regex));
console.log(texto2.match(regex));