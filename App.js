// Import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// Import React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Import network detection
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { Alert } from "react-native";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAff3-pnAkK2c8HuSUx-vu4zVa1rBe2bj0",
  authDomain: "chat-demo-final.firebaseapp.com",
  projectId: "chat-demo-final",
  storageBucket: "chat-demo-final.firebasestorage.app",
  messagingSenderId: "1047456983894",
  appId: "1:1047456983894:web:862144edd7f724dbf404f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start">
  {props => <Start {...props} auth={auth} />}
</Stack.Screen>
        <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} storage={storage} isConnected={connectionStatus.isConnected} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;