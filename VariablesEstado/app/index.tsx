import { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default function Index() {
  const [vidas, setVidas] = useState(5);

  const restarVida = () => {
    vidas === 0 ? Alert.alert('ADVERTENCIA', 'GAME OVER') : setVidas(vidas - 1);
  };

  const incrementarVida = () => {
    setVidas(vidas + 3);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Vidas: {vidas}</Text>
      <Button title="PERDER VIDA" onPress={restarVida} />
      <Button title="PREMIAR" onPress={incrementarVida} />
    </View>
  );
}
