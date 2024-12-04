import { View, StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Button } from '@rneui/base';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Contacto"
        icon={{
          name: 'address-book-o',
          type: 'font-awesome',
          color: 'white',
        }}
        buttonStyle={styles.saveButton}
        onPress={() => {
          navigation.navigate('ContactNav');
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
