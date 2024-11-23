import { Button, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Button title="opcion 1" onPress={() => {}} />
      <Button title="opcion 2" onPress={() => {}} />
      <Button title="opcion 3" onPress={() => {}} />
    </View>
  );
}
