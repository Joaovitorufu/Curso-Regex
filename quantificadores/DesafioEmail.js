const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    -maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`
// console.log(texto.match(/\w{1,}@\w{1,}\.\w{1,}\.?\w{1,}/g));
console.log(texto.match(/[\w.]+@\w+\.\w+\.?\w{0,2}/g));