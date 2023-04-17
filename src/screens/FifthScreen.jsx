import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'
import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'


export function FifthScreen({ navigation }) {

  const handleCancelClick = () => {
    navigation.navigate(FourthScreen)
  }

  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        hi
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: '95%',
    fontSize: '12px',
    fontFamily: 'Helvetica',
    justifyContent: 'space-between',
  },
})
