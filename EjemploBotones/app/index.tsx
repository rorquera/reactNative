import { Alert, Button, Text, View } from 'react-native';

export default function Index() {
  const finalizarSesion = () => {
    Alert.alert('¡Atención!', 'Su sesión a finalizado.');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="FINALIZAR" onPress={finalizarSesion} />
      <Button
        title="INICIAR"
        onPress={() => {
          Alert.alert('Bienvenido', 'Su sesión a iniciado.');
        }}
      />
    </View>
  );
}
