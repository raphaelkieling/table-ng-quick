const PegaValorDaPropriedadeComDotNotation = (
  object,
  parameterStringDotNotation
) => {
  const arrayParameter = parameterStringDotNotation.split('.');

  for (let i = 0; i < arrayParameter.length; i++) {
    const candidate = object[arrayParameter[i]];
    // tslint:disable-next-line:curly
    if (!candidate) break;
    object = candidate;
  }
  return object;
};

const colocaDataDoBancoParaDataDaTela = data => {
  if (!data) {
    return '';
  }

  return data
    .split('-')
    .reverse()
    .join('/');
};

const removerAcentos = (palavra) => {
  let map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };
  return palavra.replace(/[\W\[\] ]/g, function (a) { return map[a] || a })
}

export { PegaValorDaPropriedadeComDotNotation, colocaDataDoBancoParaDataDaTela,removerAcentos };
