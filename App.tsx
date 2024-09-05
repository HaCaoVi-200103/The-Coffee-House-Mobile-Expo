import React from "react";
import { StatusBar } from "expo-status-bar";
import hihi from "@assets/favicon.png";
import { Image, Text, View } from "react-native";
import { styles } from "style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nesting from "src/tabs";
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Image source={hihi}></Image>
      <StatusBar></StatusBar>
    </View>
  );
}
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="(tabs)"
          component={Nesting}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
