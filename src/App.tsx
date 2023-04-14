import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import { registerRootComponent } from "expo";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { FirstScreen } from "./screens/FirstScreen";


function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

return (
    <View style={styles.container}>
      <FirstScreen />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    minWidth: '100%',
    // backgroundColor: '#000',
    // padding: 12,
  }
})

export default registerRootComponent(App);