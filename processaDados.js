const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    // Busca os arquivos e separa cabeçalho e linhas
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhasCabecalho = conteudo.split('\n')
    const cabecalho = linhasCabecalho[0].split(',')
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
    return dados

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

export default async function obterDados(caminho) {
  const atleta_eventos = await lerArquivoCSV(caminho)
  return atleta_eventos
}
