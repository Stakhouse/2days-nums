import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: '#fff',
    },
    statusBar: {
        height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
       
    },
    
    headerSafeArea: {
        flex: 0,  // This is important for ensuring that SafeAreaView doesn't consume the whole screen height
        backgroundColor: '#FFD700',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
       // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10: 24, 
       // This ensures that padding includes status bar height on Android
    },
    iconButton: {
        margin: 5,
        
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
    
});


export default styles;
