import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/base';

export const Contact = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Inicio"
        icon={{
          name: 'home',
          type: 'font-awesome',
          color: 'white',
        }}
        buttonStyle={styles.saveButton}
        onPress={() => {
          navigation.navigate('HomeNav');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
  },
});
