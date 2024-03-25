import obterDados from './processaDados.js'

const main = (resultado) => {
  const dados = resultado
  console.log(dados)
}

document.addEventListener("DOMContentLoaded", () => {
  const caminhoArquivo = 'athlete_events.csv'
  const dados = obterDados(caminhoArquivo)
  dados.then(resultado => main(resultado))
})
