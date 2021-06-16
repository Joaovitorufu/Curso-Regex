const texto = ' 1,2,3,4,5,6,a.b c!d?e[f'
//pra definir uma classe (ou conjunto) de caracteres usa [];
const regexPares = /[02468]/g
console.log(texto.match(regexPares)); // no caso vai utilizar do metaCaractere | para procurar globalmente.