import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
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

function App() {
  const Stack = createStackNavigator();

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <View style={styles.container}>
          {/* <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown: false}} />
                <Stack.Screen name="SecondScreen" component={SecondScreen} options={{headerShown: false}} />
                <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown: false}} />
                <Stack.Screen name="FourthScreen" component={FourthScreen} options={{headerShown: false}} />
                <Stack.Screen name="FifthScreen" component={FifthScreen} options={{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer> */}
          <FifthScreen       />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
    },
});

export default registerRootComponent(App);
