const lerArquivoCSV = async (caminhoArquivo) => {
  try {
    // Busca os arquivos e separar linhas e cabeçalhos
    const resposta = await fetch(caminhoArquivo)
    const conteudo = await resposta.text()
    const linhasCabecalho = conteudo.split('\n')
    const cabecalho = linhasCabecalho[0].split(',')
    const linhas = linhasCabecalho.slice(1)

    // Utiliza o cabeçalho e linha como chaves e valores para um registro e o adiciona a lista de dados
    const dados = [];
    for (const linha of linhas) {
      const valores = linha.split(',')
      const registro = {}
      for (let i = 0; i < cabecalho.length; i++) {
        registro[cabecalho[i]] = valores[i]
      }
      dados.push(registro)
    }

    return dados

  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

export default async function obterDados(caminho) {
  const atleta_eventos = await lerArquivoCSV(caminho)
  return atleta_eventos
}
