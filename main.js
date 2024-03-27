const filtraEsporte = (dados, esporte) => {
  switch (esporte) {
    case 1: return dados.filter(reg => reg.Sport == "\"Volleyball\"")
    case 2: return dados.filter(reg => reg.Sport == "\"Taekwondo\"")
    case 3: return dados.filter(reg => reg.Sport == "\"Athletics\"")
    case 4: return dados.filter(reg => reg.Sport == "\"Swimming\"")
    case 5: return dados.filter(reg => reg.Sport == "\"Cycling\"")
    default: return
  }
}

const curiosidade1 = (resultado, esporte) => {
  const dados = filtraEsporte(resultado, esporte)
  console.log(dados)
}

const curiosidade2 = (resultado, esporte) => {
  const dados = filtraEsporte(resultado, esporte)
  console.log(dados)
}

const curiosidade3 = (resultado, esporte) => {
  const dados = filtraEsporte(resultado, esporte)
  console.log(dados)
}

const curiosidade4 = (resultado, esporte) => {
  const dados = filtraEsporte(resultado, esporte)
  console.log(dados)
}

const curiosidade5 = (resultado, esporte) => {
  const dados = filtraEsporte(resultado, esporte)
  console.log(dados)
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

const animacaoAbrir = (esporte) => {
  const esporte1 = document.getElementById('esporte1')
  const esporte2 = document.getElementById('esporte2')
  const esporte3 = document.getElementById('esporte3')
  const esporte4 = document.getElementById('esporte4')
  const esporte5 = document.getElementById('esporte5')
  const esporte1AbrirButton = document.getElementById('esporte1AbrirButton')
  const esporte2AbrirButton = document.getElementById('esporte2AbrirButton')
  const esporte3AbrirButton = document.getElementById('esporte3AbrirButton')
  const esporte4AbrirButton = document.getElementById('esporte4AbrirButton')
  const esporte5AbrirButton = document.getElementById('esporte5AbrirButton')
  const esporte1FecharButton = document.getElementById('esporte1FecharButton')
  const esporte2FecharButton = document.getElementById('esporte2FecharButton')
  const esporte3FecharButton = document.getElementById('esporte3FecharButton')
  const esporte4FecharButton = document.getElementById('esporte4FecharButton')
  const esporte5FecharButton = document.getElementById('esporte5FecharButton')
  const menuAbas1 = document.getElementById('menuAbas1')
  const menuAbas2 = document.getElementById('menuAbas2')
  const menuAbas3 = document.getElementById('menuAbas3')
  const menuAbas4 = document.getElementById('menuAbas4')
  const menuAbas5 = document.getElementById('menuAbas5')

  switch (esporte) {
    case 1:
      esporte1.style.height = '750px'
      esporte1.style.gridColumn = 'span 2'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'

      menuAbas1.style.display = 'flex'
      esporte1AbrirButton.style.display = 'none'
      esporte1FecharButton.style.display = 'block'
      
      break

    case 2:
      esporte1.style.display = 'none'
      esporte2.style.height = '750px'
      esporte2.style.gridColumn = 'span 2'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'

      menuAbas2.style.display = 'flex'
      esporte2AbrirButton.style.display = 'none'
      esporte2FecharButton.style.display = 'block'

      break

    case 3:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.height = '750px'
      esporte3.style.gridColumn = 'span 2'
      esporte4.style.display = 'none'
      esporte5.style.display = 'none'
  
      menuAbas3.style.display = 'flex'
      esporte3AbrirButton.style.display = 'none'
      esporte3FecharButton.style.display = 'block'

      break

    case 4:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.height = '750px'
      esporte4.style.gridColumn = 'span 2'
      esporte5.style.display = 'none'
  
      menuAbas4.style.display = 'flex'
      esporte4AbrirButton.style.display = 'none'
      esporte4FecharButton.style.display = 'block'

      break

    case 5:
      esporte1.style.display = 'none'
      esporte2.style.display = 'none'
      esporte3.style.display = 'none'
      esporte4.style.display = 'none'
      esporte5.style.height = '750px'
  
      menuAbas5.style.display = 'flex'
      esporte5AbrirButton.style.display = 'none'
      esporte5FecharButton.style.display = 'block'

      break

    default:
  }
}

const animacaoFechar = (esporte) => {
  const esporte1 = document.getElementById('esporte1')
  const esporte2 = document.getElementById('esporte2')
  const esporte3 = document.getElementById('esporte3')
  const esporte4 = document.getElementById('esporte4')
  const esporte5 = document.getElementById('esporte5')
  const esporte1AbrirButton = document.getElementById('esporte1AbrirButton')
  const esporte2AbrirButton = document.getElementById('esporte2AbrirButton')
  const esporte3AbrirButton = document.getElementById('esporte3AbrirButton')
  const esporte4AbrirButton = document.getElementById('esporte4AbrirButton')
  const esporte5AbrirButton = document.getElementById('esporte5AbrirButton')
  const esporte1FecharButton = document.getElementById('esporte1FecharButton')
  const esporte2FecharButton = document.getElementById('esporte2FecharButton')
  const esporte3FecharButton = document.getElementById('esporte3FecharButton')
  const esporte4FecharButton = document.getElementById('esporte4FecharButton')
  const esporte5FecharButton = document.getElementById('esporte5FecharButton')
  const menuAbas1 = document.getElementById('menuAbas1')
  const menuAbas2 = document.getElementById('menuAbas2')
  const menuAbas3 = document.getElementById('menuAbas3')
  const menuAbas4 = document.getElementById('menuAbas4')
  const menuAbas5 = document.getElementById('menuAbas5')

  switch (esporte) {
    case 1:
      esporte1.style.height = '250px'
      esporte1.style.gridColumn = 'span 1'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'

      menuAbas1.style.display = 'none'
      esporte1AbrirButton.style.display = 'block'
      esporte1FecharButton.style.display = 'none'

      break

    case 2:
      esporte1.style.display = 'flex'
      esporte2.style.height = '250px'
      esporte2.style.gridColumn = 'span 1'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'
  
      menuAbas2.style.display = 'none'
      esporte2AbrirButton.style.display = 'block'
      esporte2FecharButton.style.display = 'none'

      break

    case 3:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.height = '250px'
      esporte3.style.gridColumn = 'span 1'
      esporte4.style.display = 'flex'
      esporte5.style.display = 'flex'
  
      menuAbas3.style.display = 'none'
      esporte3AbrirButton.style.display = 'block'
      esporte3FecharButton.style.display = 'none'

      break

    case 4:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.height = '250px'
      esporte4.style.gridColumn = 'span 1'
      esporte5.style.display = 'flex'
  
      menuAbas4.style.display = 'none'
      esporte4AbrirButton.style.display = 'block'
      esporte4FecharButton.style.display = 'none'
      break

    case 5:
      esporte1.style.display = 'flex'
      esporte2.style.display = 'flex'
      esporte3.style.display = 'flex'
      esporte4.style.display = 'flex'
      esporte5.style.height = '250px'
  
      menuAbas5.style.display = 'none'
      esporte5AbrirButton.style.display = 'block'
      esporte5FecharButton.style.display = 'none'

      break

    default:
  }
}

// Eventos de clique

document.getElementById("1aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 1))
})

document.getElementById("1aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 1))
})

document.getElementById("1aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 1))
})

document.getElementById("1aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 1))
})

document.getElementById("1aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 1))
})

document.getElementById("2aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 2))
})

document.getElementById("2aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 2))
})

document.getElementById("2aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 2))
})

document.getElementById("2aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 2))
})

document.getElementById("2aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 2))
})

document.getElementById("3aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 3))
})

document.getElementById("3aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 3))
})

document.getElementById("3aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 3))
})

document.getElementById("3aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 3))
})

document.getElementById("3aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 3))
})

document.getElementById("4aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 4))
})

document.getElementById("4aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 4))
})

document.getElementById("4aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 4))
})

document.getElementById("4aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 4))
})

document.getElementById("4aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 4))
})

document.getElementById("5aba1OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade1(resultado, 5))
})

document.getElementById("5aba2OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade2(resultado, 5))
})

document.getElementById("5aba3OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade3(resultado, 5))
})

document.getElementById("5aba4OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade4(resultado, 5))
})

document.getElementById("5aba5OKButton").addEventListener("click", () => {
  const dados = lerArquivoCSV('athlete_events.csv')
  dados.then((resultado) => curiosidade5(resultado, 5))
})

document.getElementById("esporte1AbrirButton").addEventListener("click", () => animacaoAbrir(1))
document.getElementById("esporte2AbrirButton").addEventListener("click", () => animacaoAbrir(2))
document.getElementById("esporte3AbrirButton").addEventListener("click", () => animacaoAbrir(3))
document.getElementById("esporte4AbrirButton").addEventListener("click", () => animacaoAbrir(4))
document.getElementById("esporte5AbrirButton").addEventListener("click", () => animacaoAbrir(5))

document.getElementById("esporte1FecharButton").addEventListener("click", () => animacaoFechar(1))
document.getElementById("esporte2FecharButton").addEventListener("click", () => animacaoFechar(2))
document.getElementById("esporte3FecharButton").addEventListener("click", () => animacaoFechar(3))
document.getElementById("esporte4FecharButton").addEventListener("click", () => animacaoFechar(4))
document.getElementById("esporte5FecharButton").addEventListener("click", () => animacaoFechar(5))
