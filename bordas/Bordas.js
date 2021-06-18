const texto = 'Romario era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // inicio de linha ou string
console.log(texto.match(/r$/gi)); // fim da linha ou string
console.log(texto.match(/^r.*r$/gi)); // problema do dotall