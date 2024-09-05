import React from "react";
import { StatusBar } from "expo-status-bar";
import hihi from "@assets/favicon.png";
import { Image, Text, View } from "react-native";
import { styles } from "style";
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={hihi}></Image>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
