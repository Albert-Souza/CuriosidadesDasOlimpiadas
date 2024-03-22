import obterDados from './processaDadosNaoFuncional.js'

const main = () => {
  const caminhoArquivo = 'athlete_events.csv'
  const dados = obterDados(caminhoArquivo)

  dados.then(resultado => {
    console.log(resultado)
  })
}

document.addEventListener("DOMContentLoaded", main)
