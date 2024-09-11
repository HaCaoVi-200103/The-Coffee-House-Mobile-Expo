import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import OrderScreen from "@pages/Order";
import StoreScreen from "@pages/Store";
import EndowScreen from "@pages/Endow";
import OtherScreen from "@pages/Other";

const Nesting = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={(
        {
          /*route*/
        }
      ) => ({
        headerShown: false,
        // tabBarIcon: ({ focused, color, size }) => {
        //     let iconName ;

        //     // if (route.name === 'Home') {
        //     //   iconName = focused
        //     //     ? 'ios-information-circle'
        //     //     : 'ios-information-circle-outline';
        //     // } else if (route.name === 'Settings') {
        //     //   iconName = focused ? 'ios-list' : 'ios-list-outline';
        //     // }

        //     // You can return any component that you like here!
        //     return <Iconicons name={iconName} size={size} color={color} />;
        //   },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Trang chủ"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="coffee" size={size} color={color} />
          ),
        }}
        name="Đặt hàng"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="Cửa hàng"
        component={StoreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ticket-outline" size={size} color={color} />
          ),
        }}
        name="Ưu dãi"
        component={EndowScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="bars" size={size} color={color} />
          ),
        }}
        name="Khác"
        component={OtherScreen}
      />
    </Tab.Navigator>
  );
};

export default Nesting;
