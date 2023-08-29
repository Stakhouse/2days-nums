import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Provider, IconButton, Menu } from 'react-native-paper';
import styles from './AppStyles';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './SettingsScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const IconAction = ({ icon, action }) => (
  <IconButton
    icon={icon}
    size={40}
    onPress={action}
    style={styles.iconButton}
  />
);

function MenuButton() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => setVisible(!visible);
  
  // ... (rest of your MenuButton logic)
  const handlePress = (item) => {
    console.log(`Selected menu item: ${item}`);
    toggleMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={<IconAction icon="menu" action={toggleMenu} />}
    >
      {/* ...menu items... */    <><Menu.Item onPress={() => handlePress('Home / Dashboard')} title="Home / Dashboard" /><Menu.Item onPress={() => handlePress('Profile / Account')} title="Profile / Account" /><Menu.Item onPress={() => handlePress('Settings')} title="Settings" /><Menu.Item onPress={() => handlePress('Notifications')} title="Notifications" /><Menu.Item onPress={() => handlePress('Help & Support')} title="Help & Support" /><Menu.Item onPress={() => handlePress('About')} title="About" /><Menu.Item onPress={() => handlePress('Features / Scan Tickets / Search')} title="Features / Scan Tickets / Search" /><Menu.Item onPress={() => handlePress('Social')} title="Social" /><Menu.Item onPress={() => handlePress('Logout / Sign Out')} title="Logout / Sign Out" /><Menu.Item onPress={() => handlePress('Tutorials / Walkthrough')} title="Tutorials / Walkthrough" /></> }
    </Menu>
  );
}
function IslandButtons() {
  return (
    <ScrollView contentContainerStyle={styles.islandButtons}>
      {islandFlags.map((flag, index) => (
        <TouchableOpacity key={`island-${index}`} style={styles.button}>
          <Image source={flag} style={styles.buttonImage} resizeMode="contain" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const backgroundImage = require('./assets/caribbeanMap.png');
const islandFlags = [
  require('./assets/flags/vc.png'),
  require('./assets/flags/bb.png'),
  require('./assets/flags/tt.png'),
  require('./assets/flags/lc.png'),
  require('./assets/flags/dm_enhanced.png'),
  require('./assets/flags/gd.png'),
  require('./assets/flags/jm.png'),
  require('./assets/flags/an.png'),
];
function HomeScreen({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(true); // Keeping setLoggedIn
  
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };
  useEffect(() => {
      toggleLogin();  // <-- Now called only once, when component mounts
    }, []);  // <-- Empty dependency array means this effect runs once after the initial render
    return (
      <Provider>
        <StatusBar backgroundColor="#00ffff" barStyle="dark-content" />
        <ImageBackground source={backgroundImage} style={styles.container}>
        <Header loggedIn={loggedIn} navigation={navigation} />
          <IslandButtons />
        </ImageBackground>
        <FloatingAction
          position="left"
          left={20}
          bottom={20}
          onPressMain={() => {
              console.log("FAB pressed");
          }}
          showBackground={false}
          color="#00ffff"
          floatingIcon={<Icon name= "qrcode-scan" size={24} color="white" />}
        >
        {/* ... other FloatingAction.Items ... */}
        </FloatingAction>
      </Provider>
    );
  }
  function Header({ loggedIn, navigation }) {  // Removed the nav = useNavigation();
    return (
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <MenuButton />
          <IconAction icon="account" action={() => onAccountPressed(loggedIn, navigation)} />
          <IconAction icon="cog-outline" action={() => onSettingsPressed(navigation)} />
        </View>
      </SafeAreaView>
    );
  }
  

// Function definition
function onAccountPressed(loggedIn, navigation) {
  if (loggedIn) {
    console.log("Navigating to profile page...");
  } else {
    navigation.navigate('Login');  // Navigating to LoginScreen
  }
}
function onSettingsPressed(navigation) {
  if (navigation && typeof navigation.navigate === 'function') {
      navigation.navigate('Settings');
  } else {
      console.error('Navigation object is not available or improperly configured.');
  }
}
// ... (rest of your components)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
