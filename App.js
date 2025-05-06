import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Import screens
import Start from "./components/Start";
import Chat from "./components/Chat"; // Make sure this import is correct

const Stack = createNativeStackNavigator();

const App = () => {

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
      {/* Start screen for entering user details */}
      <Stack.Screen name="Start" component={Start} />
      {/* Chat screen, passing props to configure the chat */}
      {/* FIX: Add the component prop pointing to the imported Chat component */}
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App;
