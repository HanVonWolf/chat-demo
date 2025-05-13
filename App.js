// App.js
import { useEffect } from 'react'; // Keep if you use useEffect elsewhere, otherwise remove
import { StatusBar } from 'expo-status-bar'; // Keep if used, otherwise remove
import { StyleSheet, Text, View } from 'react-native'; // Keep if used, otherwise remove
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// --- REMOVE THESE IMPORTS ---
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// ----------------------------

import { db, app } from "./firebaseConfig";

// Import screens
import Start from "./components/Start";
import Chat from "./components/Chat";


const App = () => {
  // --- REMOVE ALL THIS REDUNDANT FIREBASE INITIALIZATION ---
  // const firebaseConfig = {
  //       apiKey: "AIzaSyAff3-pnAkK2c8HuSUx-vu4zVa1rBe2bj0",
  //       authDomain: "chat-demo-final.firebaseapp.com",
  //       projectId: "chat-demo-final",
  //       storageBucket: "chat-demo-final.firebasestorage.app",
  //       messagingSenderId: "1047456983894",
  //       appId: "1:1047456983894:web:862144edd7f724dbf404f7"
  //   };

  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);

  //   // Initialize Cloud Firestore and get a reference to the service
  //   const db = getFirestore(app);
  // ----------------------------------------------------------

  // Now, the 'db' and 'app' variables you imported from './firebaseConfig'
  // are the correctly initialized instances.

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* Start screen for entering user details */}
        {/* If Start component needs db or app, it should import them from firebaseConfig */}
        <Stack.Screen name="Start" component={Start} />

        {/* Chat screen, passing props to configure the chat */}
        <Stack.Screen
            name="Chat">
            {props => <Chat
            db={db} // Pass the imported db instance
            {...props}
             />}
          </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});