import obterDados from './processaDados.js'

const main = (resultado) => {
  const dados = resultado
  const time = document.getElementById("time").value
  const ano = document.getElementById("ano").value

  const dadosFiltrados = dados.filter(reg => (reg.Team == time) && (reg.Year == ano))
  const atletas = dadosFiltrados.map(reg => reg.Name)
  const atletasSemRepeticao = atletas.filter((item, indice) => atletas.indexOf(item) == indice)
  const atletasOrdenados = atletasSemRepeticao.sort()

  const tabela = document.getElementById("tabelaAtletas")
  const tbody = tabela.getElementsByTagName("tbody")[0]
  tbody.innerHTML = ''

  const gerarTabelaAux = (tbody) => (lista) => {
    lista.map(atleta => { 
      const novaLinha = document.createElement("tr")
      const novaCelula = document.createElement("td")
      novaCelula.textContent = atleta
      novaLinha.appendChild(novaCelula)
      tbody.appendChild(novaLinha)
    })
  }

  const gerarTabela = gerarTabelaAux(tbody)

  gerarTabela(atletasOrdenados)
}

document.getElementById("botaoEnviar").addEventListener("click", () => {
  const dados = obterDados('athlete_events.csv')
  dados.then((resultado) => main(resultado))
})
