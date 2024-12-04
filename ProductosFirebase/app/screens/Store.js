import { View, StyleSheet, Text } from 'react-native';

export const Store = () => {
  return (
    <View style={styles.container}>
      <Text>TIENDA</Text>
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
