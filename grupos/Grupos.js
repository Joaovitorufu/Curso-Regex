const texto = 'O José Simão é muito engraçado... hehehehehehe'
console.log(texto.match(/(he)+/g));
//grupo faz você agrupar caracteres !!
const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
const regex = /(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g;
console.log(texto2.match(regex));