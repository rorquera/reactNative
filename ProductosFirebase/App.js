import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/screens/Home';
import { Contact } from './app/screens/Contact';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Employees } from './app/screens/Employees';
import { Store } from './app/screens/Store';
import { Icon } from '@rneui/base';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNav"
        component={Home}
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="ContactNav"
        component={Contact}
        options={{
          title: 'Contacto',
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerHomeNav"
        component={StackNav}
        options={{
          title: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="DrawerEjemploNav"
        component={TabNav}
        options={{
          title: 'Ejemplo tabs',
        }}
      />
    </Drawer.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EmployeesNav"
        component={Employees}
        options={{
          headerShown: false,
          tabBarLabel: 'Empeeados',
          tabBarIcon: () => {
            return (
              <Icon name="users" size={24} color="black" type="font-awesome" />
            );
          },
        }}
      />
      <Tab.Screen
        name="StoreNav"
        component={Store}
        options={{
          headerShown: false,
          tabBarLabel: 'Tienda',
          tabBarIcon: () => {
            return (
              <Icon name="shopping-bag" size={24} color="black" type="font-awesome" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
