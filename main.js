const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    // Busca os arquivos e separa cabeçalho e linhas
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhasCabecalho = conteudo.split('\n')
    const cabecalho = (linhasCabecalho[0].replace(/"/g, '')).split(',')
    const linhas = linhasCabecalho.slice(1)

    // Utiliza os elementos do cabeçalho e linha como chaves e valores para se criar um registro
    const adicionaDadosAux = (cabecalho) => (linha) => {
      const valores = linha.split(',')
      const registro = cabecalho.reduce((reg, chave, indice) => {
        reg[chave] = valores[indice]
        return reg
      }, {})
      return registro
    }

    const adicionaDados = adicionaDadosAux(cabecalho)

    const dados = linhas.map(linha => adicionaDados(linha))
    const dados2016 = dados.filter(reg => reg.Year == 2016)
    return dados2016

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

const curiosidade1 = (resultado) => {
  const dados = resultado
}

const curiosidade2 = (resultado) => {
  const dados = resultado
}

const curiosidade3 = (resultado) => {
  const dados = resultado
}

const curiosidade4 = (resultado) => {
  const dados = resultado
}

const curiosidade5 = (resultado) => {
  const dados = resultado
}

// Eventos de clique

document.getElementById("curiosidade1Button").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado))
})

document.getElementById("curiosidade2Button").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado))
})

document.getElementById("curiosidade3Button").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado))
})

document.getElementById("curiosidade4Button").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado))
})

document.getElementById("curiosidade5Button").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado))
})
