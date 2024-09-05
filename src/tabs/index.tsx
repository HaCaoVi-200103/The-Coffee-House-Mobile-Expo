import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
const Nesting = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={() => {
          return (
            <View>
              <Text>12</Text>
            </View>
          );
        }}
      />
    </Tab.Navigator>
  );
};

export default Nesting;
