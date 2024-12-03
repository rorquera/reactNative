import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GradeForm } from './app/screens/GradeForm';
import { ListGrades } from './app/screens/ListGrades';

export default function App() {
  const StackGrades = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackGrades.Navigator>
        <StackGrades.Screen name="ListGradesNav" component={ListGrades} />
        <StackGrades.Screen name="GradeFormNav" component={GradeForm} />
      </StackGrades.Navigator>
    </NavigationContainer>
  );
}
