import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    statusBar: {
        height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
       backgroundColor: "#00ffff",
    },
    
    headerSafeArea: {
        paddingBottom: 20,
        zIndex: 1,
        flex: 0,
        backgroundColor: 'transparent',
        height: 50,  // Set a specific height
        justifyContent: 'center',  // Center content vertically
        
    },
    header: {
        zIndex: 1,
        width: '100%',  // Stretch across the screen
        height:60,
        flexDirection: 'row',
  //justifyContent: 'space-evenly',
  alignItems: 'center',  // Center items vertically
  backgroundColor: 'transparent',  // Make it transparent
  justifyContent: 'space-around',


      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10: 24, 
       // This ensures that padding includes status bar height on Android
       //backgroundColor: '#FFD700',
    },
    iconButton: {
        width: '40%',  // Reduce to a quarter of its current size
        height: '70%',  // Reduce to a quarter of its current size
       margin: 5,
       justifyContent: 'space-evenly',
        //padding:'14',
    },
    islandButtons: {
        flex: 1,   // Full space
        justifyContent: 'flex-start', // Start from the top
        alignItems: 'center',      
        flexDirection: 'column',  // vertical layout for buttons
        paddingTop: 10,   // Optional padding at the top
    },
    button: {
    justifyContent: 'center',
       alignItems: 'center',
        width: '40%',             
        height: 50,
        borderRadius: 15,
        backgroundColor: '#e5e5e5',
        margin: 11,               
    },
    iconActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // Inside AppStyles.ts or AppStyles.js
settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  // Inside AppStyles.ts or AppStyles.js
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  
  
    
       
});


export default styles;
