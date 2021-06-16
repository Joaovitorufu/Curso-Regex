const texto = '1,2,3,a.b c!d?ef['
console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\D]/g));