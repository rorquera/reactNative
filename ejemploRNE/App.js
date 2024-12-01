import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from '@rneui/themed';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Ingrese su nombre"
        label="Nombre"
      />
      <Text>{name}</Text>
      <Button
        title="OK"
        icon={{
          name: 'music',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        onPress={() => {
          Alert.alert('Info', 'Su nombre es ' + name);
        }}
      />

      <Button
        title="CANCEL"
        icon={<Icon name="sc-telegram" type="evilicon" color="white" />}
      />

      <Icon name="rowing" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
