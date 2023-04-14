import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { registerRootComponent } from "expo";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";


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
    // <RecoilRoot>
    //   <NavigationContainer>
    //     <TabNavigator />
    //   </NavigationContainer>
    // </RecoilRoot>

    <View style={styles.container}>
      <Navbar />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    minWidth: '100%',
    backgroundColor: '#000',
    // padding: 12,
  }
})

export default registerRootComponent(App);