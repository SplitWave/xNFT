import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import { registerRootComponent } from "expo";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { FirstScreen } from "./screens/FirstScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

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
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{headerShown: false}} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
    },
});

export default registerRootComponent(App);
