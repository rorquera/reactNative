import { View, StyleSheet, Alert } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { useState } from 'react';
import { crearPronosticoService } from '../services/TestServices';

export const PronosticoForm = () => {
  const [marcador1, setMarcador1] = useState();
  const [marcador2, setMarcador2] = useState();

  const crearPronostico = () => {
    console.log('creando pronostico ' + marcador1 + ' ' + marcador2);
    const pronostico = {
      usuario: {
        cedula: '1754623518',
      },
      partido: {
        id: 10,
      },
      equipoA: {
        codigo: '068',
      },
      equipoB: {
        codigo: '076',
      },
      marcadorEqA: marcador1,
      marcadorEqB: marcador2,
    };
    crearPronosticoService(pronostico);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text h4="true">PRONOSTICO DEPORTIVO</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="MARCADOR EQUIPO 1"
          value={marcador1}
          onChangeText={(value) => {
            setMarcador1(value);
          }}
        />
        <Input
          placeholder="MARCADOR EQUIPO 2"
          value={marcador2}
          onChangeText={(value) => {
            setMarcador2(value);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button title="Guardar" onPress={crearPronostico} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  formContainer: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
