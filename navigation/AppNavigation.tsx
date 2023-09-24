import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  Menu: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handlePress = (item: string) => {
    console.log(`Selected menu item: ${item}`);
    toggleMenu();
  };

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
          component={View}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bars" color={color} size={size} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              toggleMenu();
            },
          }}
        />
      </Tab.Navigator>
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={toggleMenu}
      >
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => handlePress('Home / Dashboard')}>
            <Text style={styles.menuItem}>Home / Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Profile / Account')}>
            <Text style={styles.menuItem}>Profile / Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('Tutorials / Walkthrough')}>
            <Text style={styles.menuItem}>Tutorials / Walkthrough</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AppNavigation;
