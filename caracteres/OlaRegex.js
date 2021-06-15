const texto = 'Casa bonita é a casa amarela da esquina com a rua ACASALAR.'

const regex = /casa/gi 
console.log(texto.match(regex)); // tras as 3 ocorrencias de casa pois estamos usando as flags g para encontrar globalmente e a tag i para ignorar letras maiusculas e minusculas.
console.log(texto.match(/a b/));