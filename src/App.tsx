
import { registerRootComponent } from "expo";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./screens/LoginScreen";
import { FirstScreen } from "./screens/FirstScreen";
import { SecondScreen } from "./screens/SecondScreen";
import { ThirdScreen } from "./screens/ThirdScreen";
import { FourthScreen } from "./screens/FourthScreen";
import { FifthScreen } from "./screens/FifthScreen"
import { GenrateWallet } from "./screens/GenrateWallet";

import 'react-native-get-random-values'
// import { useFonts } from 'expo-font';

function App() {
  const Stack = createStackNavigator();

  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });

    return (
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="GenrateWallet" component={GenrateWallet} options={{headerShown: false}} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown: false}} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerShown: false}} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown: false}} />
                <Stack.Screen name="FourthScreen" component={FourthScreen} options={{headerShown: false}} />
                <Stack.Screen name="FifthScreen" component={FifthScreen} options={{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <FirstScreen /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",    },
});

export default registerRootComponent(App);
