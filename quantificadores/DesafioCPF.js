const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 123.122.643-63
    - 111.333.555-23
`
console.log(texto.match(/\d.{13}/g));