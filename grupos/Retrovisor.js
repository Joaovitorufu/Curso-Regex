const texto1 ='<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));
// o /1 funciona como retrovisor para as tags b strong e div pegando exatamente o fechamento da tag

const texto2 ='Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));