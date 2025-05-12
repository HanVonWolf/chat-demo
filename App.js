import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Import screens
import Start from "./components/Start";
import Chat from "./components/Chat"; // Make sure this import is correct

const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDeCzgjB44pqwMSK2QZkGJCR11MBp0DCU8",
    authDomain: "chat-demo-f2075.firebaseapp.com",
    projectId: "chat-demo-f2075",
    storageBucket: "chat-demo-f2075.firebasestorage.app",
    messagingSenderId: "649726344435",
    appId: "1:649726344435:web:363617c87d9c1cd3574b86"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
      {/* Start screen for entering user details */}
      <Stack.Screen name="Start" component={Start} />
      {/* Chat screen, passing props to configure the chat */}
      {/* FIX: Add the component prop pointing to the imported Chat component */}
      <Stack.Screen
          name="Chat">
          {props => <Chat 
          db={db}
          {...props}
           />}
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;