const texto = '1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')  //RegExp significa Regular Expression
console.log('Métodos da RegExp...');
console.log(regexNove.test(texto)); //retorna se true se existir o 9 dentro do texto
console.log(regexNove.exec(texto)); // retorna o index se existir no parametro. 

const regexLetras = /[a-f]/g
console.log('Metodos da string...');
console.log(texto.match(regexLetras)); //retorna todas as letras que batem com [a-f];
console.log(texto.search(regexLetras)); // retorna o indice do primeiro elemento que bate com a regex;
console.log(texto.replace(regexLetras, 'mudou'));// subtitui um elemento encontrado na regex por algum outro texto.
console.log(texto.split(regexLetras)); //separar em strings à partir de todos os match da regex;