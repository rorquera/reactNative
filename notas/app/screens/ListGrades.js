import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { getGrades } from '../services/GradeServices';
import { Avatar, FAB, ListItem } from '@rneui/base';

export const ListGrades = ({ navigation }) => {
  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('GradeFormNav', { notita: nota });
        }}
      >
        <ListItem bottomDivider>
          <Avatar
            title={nota.subject.substring(0, 1)}
            containerStyle={{ backgroundColor: '#6733b9' }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{nota.subject}</ListItem.Title>
          </ListItem.Content>

          <ListItem.Content>
            <ListItem.Title>{nota.grade}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => {
          return <ItemGrade nota={item} />;
        }}
        keyExtractor={(item) => {
          return item.subject;
        }}
      />

      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate('GradeFormNav', { notita: null });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
