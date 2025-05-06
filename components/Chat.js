import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

const Chat = ({ route, navigation }) => { // <-- Component function starts here
    const { name, backgroundColor } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({ title: name });
    }, [name]);

    // THIS RETURN STATEMENT MUST BE INSIDE THE FUNCTION
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor || "#fff" }]}>
            {/* Your chat UI elements will go here */}
        </View>
    );
}; // <-- Component function ends here

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default Chat; // <-- Make sure this export is present