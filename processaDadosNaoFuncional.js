const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhas = conteudo.split('\n')
    const cabecalho = linhas[0].split(',')

    const extrairValores = linha => linha.split(',')

    const dados = [];
    for (let i = 1; i < linhas.length; i++) {
      const valores = extrairValores(linhas[i])

      const registro = {}
      for (let j = 0; j < cabecalho.length; j++) {
        registro[cabecalho[j]] = valores[j]
      }
      dados.push(registro)
    }

    return dados;
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

export default async function obterDados(caminho) {
  const atleta_eventos = await lerArquivoCSV(caminho)
  return atleta_eventos
}
