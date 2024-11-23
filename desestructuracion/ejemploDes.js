const recuperar = () => {
  let frutas = ['pera', 'manzana', 'sandia'];
  frutas.push('banana');
  return frutas;
};

const testRecuperar = () => {
  let misFrutas = recuperar();
  let frutaPrimera = misFrutas[0];
  let otraFruta = misFrutas[1];
  console.log(
    'frutaPrimera: ' + frutaPrimera + ' ' + 'otraFruta: ' + otraFruta
  );
};

const testRecuperarDes = () => {
  let [fruta1, fruta2, fruta3] = recuperar();
  console.log('1: ' + fruta1);
  console.log('2: ' + fruta2);
  console.log('3: ' + fruta3);
};
