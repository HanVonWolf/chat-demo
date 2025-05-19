# Chat App in React Native

My Chat app is an easy to use and effective app that can be used to send and receive chat messages in real time. Chat messages can be simply text messages, or include photos or geolocations.


## Screenshots

Start screen:
![IMG_3163](https://github.com/user-attachments/assets/b03dd7b0-5bff-45b1-969c-1811e1f775cc)


Chat interface:
![IMG_3164](https://github.com/user-attachments/assets/6a347680-bb8f-4518-8412-0a404f0c40e3)


## Features

Chat is customizable: users enter their name and can select a chosen background colour.

Users don't need an account. they can use anonymous authentication from Firebase Auth.

Messages stored within Firebase database.

App determines if user is online or not (using Network status detection with @react-native-community/netinfo) and if necessary AsyncStorage renders past messages (but no new messages can be sent)

Chat messages can include images (both from the camera and camera roll) using Firebase Storage, as well as geolocations
with react-native-maps.


## Technologies used

* React Native (Expo)
* Firebase (Auth, Firestore, Storage)
* React Navigation
* Gifted Chat
* AsyncStorage
## Installation

1. Clone the repository:

```bash
git clone https://github.com/HanVonWolf/chat-demo
cd chat-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start Expo Go
```bash
npx expo start
```

    
