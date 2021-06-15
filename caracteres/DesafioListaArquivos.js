const texto = 'lista de arquivos mp3: jazz.mp3, rock.mp3,podcast.mp3,blues.mp3'
// desafio consiste em achar todas as ocorrencias de .mp3 dentro do texto , resultado deve dar 4
console.log(texto.match(/\.mp3/g));