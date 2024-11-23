import { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export default function Index() {
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [analisis, setAnalisis] = useState('');

  const registrarPeso = (texto: string) => {
    setPeso(parseFloat(texto));
  };
  const registrarEstatura = (texto: string) => {
    setEstatura(parseFloat(texto));
  };
  const calcularIMC = () => {
    const estaturaMetros = estatura / 100;
    const valorIMC = peso / (estaturaMetros * estaturaMetros);
    const valorIMCRedondeado = parseFloat(valorIMC.toFixed(2));
    analizarIMC(valorIMCRedondeado);
    setImc(parseFloat(valorIMC.toFixed(2)));
  };
  const analizarIMC = (valorIMCRedondeado: Float) => {
    let analisisResultado = '';
    if (valorIMCRedondeado < 18.5) {
      analisisResultado = 'Peso inferior al normal';
    } else if (valorIMCRedondeado >= 18.5 && valorIMCRedondeado <= 24.9) {
      analisisResultado = 'Normal';
    } else if (valorIMCRedondeado >= 25.0 && valorIMCRedondeado <= 29.9) {
      analisisResultado = 'Peso superior al normal';
    } else if (valorIMCRedondeado > 30) {
      analisisResultado = 'Obesidad';
    }
    setAnalisis(analisisResultado);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={estilos.contenedor1}>
        <Text style={estilos.titulo}>CALCULADORA IMC</Text>
        <TextInput
          placeholder="ingrese su peso en kilos"
          style={estilos.cajaTexto}
          onChangeText={registrarPeso}
        />
        <TextInput
          placeholder="ingrese su estatura en centímetros"
          style={estilos.cajaTexto}
          onChangeText={registrarEstatura}
        />
        <Button title="CALCULAR" onPress={calcularIMC} />
      </View>
      <View style={estilos.contenedor2}>
        <Text style={estilos.respuesta}> RESULTADO </Text>
        <Text style={estilos.resultado}> {imc} </Text>
        <Text style={estilos.resultado}> {analisis} </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cajaTexto: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderColor: 'lightgray',
  },
  titulo: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  respuesta: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  contenedor1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedor2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  resultado: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'semibold',
    color: 'gray',
  },
});
