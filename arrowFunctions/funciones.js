ejecutarSumar = () => {
  let valor1 = recuperarEntero('txtValor1');
  let valor2 = recuperarEntero('txtValor2');
  let resultadoSuma;
  console.log('valor1: ' + valor1 + ' valor2: ' + valor2);
  resultadoSuma = sumar(valor1, valor2);
  console.log(resultadoSuma);
};

sumar = (sum1, sum2) => {
  let resultado;
  resultado = sum1 + sum2;
  return resultado;
};

ejecutarResta = () => {
  let valor1 = recuperarFloat('txtValor1');
  let valor2 = recuperarFloat('txtValor2');
  let resultadoResta;
  console.log('valor1: ' + valor1 + ' valor2: ' + valor2);
  resultadoResta = restar(valor1, valor2);
  console.log(resultadoResta);
};

restar = (val1, val2) => {
  let resultado;
  resultado = val1 - val2;
  return resultado;
};
