import React, { useState, useEffect } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => { // <-- Component function starts here
    const { name, backgroundColor } = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({ title: name })
      setMessages([
        {
          _id: 1,
          text: 'Hello there!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'Sytem message: send a message to chat!',
          createdAt: new Date(),
          system: true,
        },
      ]);
  
    }, []);
  
    const onSend = (newMessages) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
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