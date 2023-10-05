import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuButton from '../components/MenuButton';

const MenuButtonWrapper: React.FC = () => {
  return <MenuButton /* your props here */ />;
};

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  Menu: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
  name="Menu" 
  component={MenuButtonWrapper}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Icon name="bars" color={color} size={size} />
    ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;