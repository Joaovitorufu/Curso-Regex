// /n não é reconhecido pelo metaCaractere '.'(ponto)
const texto = 'Bom\ndia'
console.log(texto.match(/./gi));
console.log(texto.match(/.../gi));