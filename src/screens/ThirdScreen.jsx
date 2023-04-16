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

export function ThirdScreen({ navigation }) {
    return(
        <Screen>
            <Navbar />
            <View>hi</View>
        </Screen>
    )
}