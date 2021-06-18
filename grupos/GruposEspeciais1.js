const texto = 'Jõao é calmo, mas no transito fica nervoso.'
console.log(texto.match(/[\wÀ-ú]+/gi));

//positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

//negative lookahead

console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)); // não pego o 'é' pois é uma borda
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));


