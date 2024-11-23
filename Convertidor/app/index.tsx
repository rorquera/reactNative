import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default function Index() {
  const [resultado, setResultado] = useState(0);
  const [valor, setValor] = useState(0);

  const convertirPesosMexicanos = () => {
    let pesosMexicanos = valor * 20.35;
    setResultado(pesosMexicanos);
  };
  const convertirPesosColombianos = () => {
    let pesosColombianos = valor * 4498.58;
    setResultado(pesosColombianos);
  };
  const convertirEuros = () => {
    let euros = valor * 0.95;
    setResultado(euros);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={estilos.titulo}>Convertidor</Text>
      <TextInput
        placeholder="Ingrese el valor en dolares"
        onChangeText={(texto) => {
          setValor(parseFloat(texto));
        }}
        style={estilos.cajaTexto}
      />
      <Button title="Pesos Mexicanos" onPress={convertirPesosMexicanos} />
      <Button title="Pesos Colombianos" onPress={convertirPesosColombianos} />
      <Button title="Euros" onPress={convertirEuros} />

      <Text style={estilos.respuesta}>{resultado}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cajaTexto: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  respuesta: {
    fontSize: 20,
    marginTop: 10,
    color: 'red',
  },
});
