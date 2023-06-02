import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Text,
} from 'react-native'
import style from '../App.module.css'
import { Screen } from '../components/Screen'
import { FirstScreen } from './FirstScreen'


export function LoginScreen({ navigation }) {

  const handleLogin = () => {
    navigation.navigate(FirstScreen)
  }

  return (
    <Screen>
      <View style={style.heading}>
        Welcome to
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
            }}
          />
        </View>
        <View style={style.heading}>SplitWave</View>
                
        <TouchableOpacity style={styles.wallet} onPress={handleLogin}>
        <Text style={{color: '#fff', fontWeight: '500'}}>Get Started</Text>
        </TouchableOpacity>
     </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    fontFamily: 'Inter',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    alignSelf: 'center',
  },
  heading: {
    fontSize: '30px',
    marginTop: 10,
    fontWeight: 600,
  },

  wallet: {
    fontSize: '14px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    color: '#fff',
    backgroundColor: '#5339CC',
    borderRadius: 6,
    marginTop: 15,
  },
})
