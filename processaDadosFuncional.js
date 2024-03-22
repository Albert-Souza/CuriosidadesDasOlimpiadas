const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhasCabecalho = conteudo.split('\n')
    const cabecalho = linhasCabecalho[0].split(',')
    const linhas = linhasCabecalho.slice(1)

    const processaDados = (dados, linha, cabecalho) => {
      const valores = linha.split(',')
      const registro = cabecalho.reduce((reg, chave, indice) => {
        reg[chave] = valores[indice]
        return reg;
      }, {})

      return [...dados, registro]
    }    

    const resultado = linhas.reduce((lista, linha) => processaDados(lista, linha, cabecalho), [])

    return resultado
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

export default async function obterDados(caminho) {
  const atleta_eventos = await lerArquivoCSV(caminho)
  return atleta_eventos
}
