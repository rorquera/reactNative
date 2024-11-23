import { Alert, Button, Text, View } from 'react-native';

export default function Index() {
  const despedirse = () => {
    Alert.alert('Mensaje', 'Adios!!!');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Bienvenido a React Native</Text>
      <Button
        title="ok"
        //funcion del onPress no recibe parametros y no retorna nada
        onPress={() => {
          Alert.alert('Hola', 'Hola desde el boton');
        }}
      />

      <Button title="adios" onPress={despedirse} />
    </View>
  );
}
