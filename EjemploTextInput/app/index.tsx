import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default function Index() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const crearNombreCompleto = () => {
    let nombreApellido = nombre + ' ' + apellido;
    setNombreCompleto(nombreApellido);
    console.log(nombreApellido);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Ejemplo TextInput</Text>
      <TextInput
        value={nombre}
        style={estilos.cajaTexto}
        placeholder="Ingrese su nombre"
        onChangeText={(texto) => {
          setNombre(texto);
          console.log('Nombre: ' + nombre);
        }}
      />

      <TextInput
        value={apellido}
        style={estilos.cajaTexto}
        placeholder="Ingrese su apellido"
        onChangeText={(texto) => {
          setApellido(texto);
          console.log('apellido: ' + apellido);
        }}
      />

      <Button title="Saludar" onPress={crearNombreCompleto} />

      <Text>Bienvenido {nombreCompleto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cajaTexto: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
