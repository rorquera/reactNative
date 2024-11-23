sumar = (sum1, sum2) => {
  let resultado;
  resultado = sum1 + sum2;
  return resultado;
};

restar = (val1, val2) => {
  let resultado;
  resultado = val1 - val2;
  return resultado;
};

ejecutarOperacion = (operar) => {
  let valor1 = recuperarEntero('txtValor1');
  let valor2 = recuperarEntero('txtValor2');
  let resultado;
  resultado = operar(valor1, valor2);
  console.log(resultado);
};

ejecutar = (fn) => {
  console.log('estoy ejecutando funciones...');
  fn();
};

imprimir = () => {
  console.log('estoy imprimiendo...');
};

saludar = () => {
  alert('aprendiendo programacion funcional');
};

testEjecutar = () => {
  ejecutar(imprimir);
  ejecutar(saludar);
  ejecutar(() => {
    alert('soy una funcion anonima!!!');
  });
};
