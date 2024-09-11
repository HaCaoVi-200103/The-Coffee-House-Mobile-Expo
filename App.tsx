import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nesting from "src/tabs";
import { Provider } from "react-redux";
import { store } from "@redux/store";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="(tabs)"
            component={Nesting}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Home" component={() => <></>} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
