import React, { useState, useEffect } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const Chat = ({ route, navigation, db }) => { // <-- Component function starts here
    const { name, backgroundColor } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({ title: name });
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach(doc => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis())
          })
        })
        setMessages(newMessages);
      })
      return () => {
        if (unsubMessages) unsubMessages();
      }
     }, []);
  
     const onSend = async (newMessages) => {
      console.log('onSend in Chat.js called with:', newMessages);
      try {
        await addDoc(collection(db, "messages"), newMessages[0]);
        console.log('Message sent to Firestore successfully!');
      } catch (error) {
        console.error('Error sending message to Firestore:', error);
        // Optionally, display an error message to the user
      }
    }
  
    const renderBubble = (props) => {
      return <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000"
          },
          left: {
            backgroundColor: "#FFF"
          }
        }}
      />
    }

    return (
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          renderBubble={renderBubble}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
            name
          }}
        />
       {Platform.OS === "ios"?<KeyboardAvoidingView behavior="padding" />: null}
      </View>
    )
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default Chat; // <-- Make sure this export is present