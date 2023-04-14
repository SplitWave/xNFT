// import { registerRootComponent } from "expo";
// import { RecoilRoot } from "recoil";
// import { ActivityIndicator, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

// import { ExamplesScreens } from "./screens/ExamplesScreen";

// import { HomeScreen } from "./screens/HomeScreen";

// import { TokenListNavigator } from "./screens/TokenNavigator";

// const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Hme"
//       screenOptions={{
//         tabBarActiveTintColor: "#e91e63",
//       }}
//     >
//       <Tab.Screen
//         name="ome"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: "omme",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ist"
//         component={TokenListNavigator}
//         options={{
//           headerShown: false,
//           tabBarLabel: "lokens",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bank" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Examples"
//         component={ExamplesScreens}
//         options={{
//           tabBarLabel: "Examples",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   let [fontsLoaded] = useFonts({
//     Inter_900Black,
//   });

//   if (!fontsLoaded) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <ActivityIndicator />
//       </View>
//     );
//   }

//   return (
//     <RecoilRoot>
//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </RecoilRoot>
//   );
// }

// export default registerRootComponent(App);
