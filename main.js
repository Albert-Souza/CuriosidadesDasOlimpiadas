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

const animacaoAbrir = (curiosidade) => {
  const curiosidade1 = document.getElementById('curiosidade1')
  const curiosidade2 = document.getElementById('curiosidade2')
  const curiosidade3 = document.getElementById('curiosidade3')
  const curiosidade4 = document.getElementById('curiosidade4')
  const curiosidade5 = document.getElementById('curiosidade5')
  const curiosidade1AbrirButton = document.getElementById('curiosidade1AbrirButton')
  const curiosidade2AbrirButton = document.getElementById('curiosidade2AbrirButton')
  const curiosidade3AbrirButton = document.getElementById('curiosidade3AbrirButton')
  const curiosidade4AbrirButton = document.getElementById('curiosidade4AbrirButton')
  const curiosidade5AbrirButton = document.getElementById('curiosidade5AbrirButton')
  const curiosidade1FecharButton = document.getElementById('curiosidade1FecharButton')
  const curiosidade2FecharButton = document.getElementById('curiosidade2FecharButton')
  const curiosidade3FecharButton = document.getElementById('curiosidade3FecharButton')
  const curiosidade4FecharButton = document.getElementById('curiosidade4FecharButton')
  const curiosidade5FecharButton = document.getElementById('curiosidade5FecharButton')
  const form1 = document.getElementById('form1')
  const form2 = document.getElementById('form2')
  const form3 = document.getElementById('form3')
  const form4 = document.getElementById('form4')
  const form5 = document.getElementById('form5')

  if (curiosidade == 1) {
    curiosidade1.style.height = '90vh'
    curiosidade1.style.gridColumn = 'span 2'
    curiosidade2.style.display = 'none'
    curiosidade3.style.display = 'none'
    curiosidade4.style.display = 'none'
    curiosidade5.style.display = 'none'

    form1.style.display = 'flex'
    curiosidade1AbrirButton.style.display = 'none'
    curiosidade1FecharButton.style.display = 'block'
  }

  if (curiosidade == 2) {
    curiosidade1.style.display = 'none'
    curiosidade2.style.height = '90vh'
    curiosidade2.style.gridColumn = 'span 2'
    curiosidade3.style.display = 'none'
    curiosidade4.style.display = 'none'
    curiosidade5.style.display = 'none'

    form2.style.display = 'flex'
    curiosidade2AbrirButton.style.display = 'none'
    curiosidade2FecharButton.style.display = 'block'
  }

  if (curiosidade == 3) {
    curiosidade1.style.display = 'none'
    curiosidade2.style.display = 'none'
    curiosidade3.style.height = '90vh'
    curiosidade3.style.gridColumn = 'span 2'
    curiosidade4.style.display = 'none'
    curiosidade5.style.display = 'none'

    form3.style.display = 'flex'
    curiosidade3AbrirButton.style.display = 'none'
    curiosidade3FecharButton.style.display = 'block'
  }

  if (curiosidade == 4) {
    curiosidade1.style.display = 'none'
    curiosidade2.style.display = 'none'
    curiosidade3.style.display = 'none'
    curiosidade4.style.height = '90vh'
    curiosidade4.style.gridColumn = 'span 2'
    curiosidade5.style.display = 'none'

    form4.style.display = 'flex'
    curiosidade4AbrirButton.style.display = 'none'
    curiosidade4FecharButton.style.display = 'block'
  }

  if (curiosidade == 5) {
    curiosidade1.style.display = 'none'
    curiosidade2.style.display = 'none'
    curiosidade3.style.display = 'none'
    curiosidade4.style.display = 'none'
    curiosidade5.style.height = '90vh'

    form5.style.display = 'flex'
    curiosidade5AbrirButton.style.display = 'none'
    curiosidade5FecharButton.style.display = 'block'
  }
}

const animacaoFechar = (curiosidade) => {
  const curiosidade1 = document.getElementById('curiosidade1')
  const curiosidade2 = document.getElementById('curiosidade2')
  const curiosidade3 = document.getElementById('curiosidade3')
  const curiosidade4 = document.getElementById('curiosidade4')
  const curiosidade5 = document.getElementById('curiosidade5')
  const curiosidade1AbrirButton = document.getElementById('curiosidade1AbrirButton')
  const curiosidade2AbrirButton = document.getElementById('curiosidade2AbrirButton')
  const curiosidade3AbrirButton = document.getElementById('curiosidade3AbrirButton')
  const curiosidade4AbrirButton = document.getElementById('curiosidade4AbrirButton')
  const curiosidade5AbrirButton = document.getElementById('curiosidade5AbrirButton')
  const curiosidade1FecharButton = document.getElementById('curiosidade1FecharButton')
  const curiosidade2FecharButton = document.getElementById('curiosidade2FecharButton')
  const curiosidade3FecharButton = document.getElementById('curiosidade3FecharButton')
  const curiosidade4FecharButton = document.getElementById('curiosidade4FecharButton')
  const curiosidade5FecharButton = document.getElementById('curiosidade5FecharButton')
  const form1 = document.getElementById('form1')
  const form2 = document.getElementById('form2')
  const form3 = document.getElementById('form3')
  const form4 = document.getElementById('form4')
  const form5 = document.getElementById('form5')

  if (curiosidade == 1) {
    curiosidade1.style.height = '250px'
    curiosidade1.style.gridColumn = 'span 1'
    curiosidade2.style.display = 'flex'
    curiosidade3.style.display = 'flex'
    curiosidade4.style.display = 'flex'
    curiosidade5.style.display = 'flex'

    form1.style.display = 'none'
    curiosidade1AbrirButton.style.display = 'block'
    curiosidade1FecharButton.style.display = 'none'
  }

  if (curiosidade == 2) {
    curiosidade1.style.display = 'flex'
    curiosidade2.style.height = '250px'
    curiosidade2.style.gridColumn = 'span 1'
    curiosidade3.style.display = 'flex'
    curiosidade4.style.display = 'flex'
    curiosidade5.style.display = 'flex'

    form2.style.display = 'none'
    curiosidade2AbrirButton.style.display = 'block'
    curiosidade2FecharButton.style.display = 'none'
  }

  if (curiosidade == 3) {
    curiosidade1.style.display = 'flex'
    curiosidade2.style.display = 'flex'
    curiosidade3.style.height = '250px'
    curiosidade3.style.gridColumn = 'span 1'
    curiosidade4.style.display = 'flex'
    curiosidade5.style.display = 'flex'

    form3.style.display = 'none'
    curiosidade3AbrirButton.style.display = 'block'
    curiosidade3FecharButton.style.display = 'none'
  }

  if (curiosidade == 4) {
    curiosidade1.style.display = 'flex'
    curiosidade2.style.display = 'flex'
    curiosidade3.style.display = 'flex'
    curiosidade4.style.height = '250px'
    curiosidade4.style.gridColumn = 'span 1'
    curiosidade5.style.display = 'flex'

    form4.style.display = 'none'
    curiosidade4AbrirButton.style.display = 'block'
    curiosidade4FecharButton.style.display = 'none'
  }

  if (curiosidade == 5) {
    curiosidade1.style.display = 'flex'
    curiosidade2.style.display = 'flex'
    curiosidade3.style.display = 'flex'
    curiosidade4.style.display = 'flex'
    curiosidade5.style.height = '250px'

    form5.style.display = 'none'
    curiosidade5AbrirButton.style.display = 'block'
    curiosidade5FecharButton.style.display = 'none'
  } 
}

// Eventos de clique

document.getElementById("curiosidade1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado))
})

document.getElementById("curiosidade2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado))
})

document.getElementById("curiosidade3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado))
})

document.getElementById("curiosidade4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado))
})

document.getElementById("curiosidade5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado))
})

document.getElementById("curiosidade1AbrirButton").addEventListener("click", () => animacaoAbrir(1))
document.getElementById("curiosidade2AbrirButton").addEventListener("click", () => animacaoAbrir(2))
document.getElementById("curiosidade3AbrirButton").addEventListener("click", () => animacaoAbrir(3))
document.getElementById("curiosidade4AbrirButton").addEventListener("click", () => animacaoAbrir(4))
document.getElementById("curiosidade5AbrirButton").addEventListener("click", () => animacaoAbrir(5))

document.getElementById("curiosidade1FecharButton").addEventListener("click", () => animacaoFechar(1))
document.getElementById("curiosidade2FecharButton").addEventListener("click", () => animacaoFechar(2))
document.getElementById("curiosidade3FecharButton").addEventListener("click", () => animacaoFechar(3))
document.getElementById("curiosidade4FecharButton").addEventListener("click", () => animacaoFechar(4))
document.getElementById("curiosidade5FecharButton").addEventListener("click", () => animacaoFechar(5))
