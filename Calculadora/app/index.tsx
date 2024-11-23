import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function Index() {
  const [resultado, setResultado] = useState(0);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  const sumar = () => {
    let res = valor1 + valor2;
    setResultado(res);
  };

  const restar = () => {
    let res = valor1 - valor2;
    setResultado(res);
  };

  const multiplicar = () => {
    let res = valor1 * valor2;
    setResultado(res);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={estilos.titulo}>Calculadora</Text>
      <TextInput
        style={estilos.cajaTexto}
        placeholder="Ingrese el primer valor"
        onChangeText={(valor) => {
          setValor1(parseInt(valor));
        }}
      />
      <TextInput
        style={estilos.cajaTexto}
        placeholder="Ingrese el segundo valor"
        onChangeText={(valor) => {
          setValor2(parseInt(valor));
        }}
      />
      <Button title="Sumar" onPress={sumar} />
      <Button title="Restar" onPress={restar} />
      <Button title="Multiplicar" onPress={multiplicar} />

      <Text style={estilos.resultado}>{resultado}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  cajaTexto: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  resultado: {
    fontSize: 20,
    marginTop: 10,
    color: 'red',
  },
});
