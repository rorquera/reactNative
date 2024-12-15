import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {PronosticoForm} from './screens/PronosticoForm'

export default function App() {
  const StackPronosticos = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackPronosticos.Navigator initialRouteName="PronosticoFormNav">
        <StackPronosticos.Screen
          name="PronosticoFormNav"
          component={PronosticoForm}
        />
        
      </StackPronosticos.Navigator>
    </NavigationContainer>
  );
}

