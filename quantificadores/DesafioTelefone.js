const texto = `Lista telefônica:
- (11) 98756-1212
- (32) 12345-5123
- (12) 11223-4422
- 11234-5121
`
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));

//quase acertei o desafio todo, só errei detalhes de {}