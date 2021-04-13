import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Books from '../pages/Books';
import Characters from '../pages/Characters';
import CharacterDetail from '../pages/CharacterDetail';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface IconProps {
  [key: string]: any;
}

const icons: IconProps = {
  Books: 'book',
  Characters: 'users',
};

const Routes: React.FC = () => {
  const theme = useTheme();

  const Tabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Icon name={icons[route.name]} size={size} color={color} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.blue,
        inactiveTintColor: theme.colors.black,
        labelStyle: {
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Books"
        options={{
          title: 'Livros',
        }}
        component={Books}
      />
      <Tab.Screen
        name="Characters"
        options={{ title: 'Personagens' }}
        component={Characters}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{ title: 'Detalhes do Personagem' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
