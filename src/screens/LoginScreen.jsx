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

  const [username, onChangeUsername] = React.useState('')
  const [password, onChangePassword] = React.useState('')
  const [isSelected, setSelection] = React.useState(false)

  const handleLogin = () => {
    navigation.navigate(FirstScreen)
  }

  return (
    <Screen>
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
        <View style={styles.heading}>SplitWave</View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputSub}
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
          />
          <TextInput
            style={styles.inputSub}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
        </View>
        <View style={styles.passRememberDiv}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <View style={{ marginLeft: 4 }}>Remember me</View>
          </View>
          <View style={{ color: '#700CC2' }}>Forgot your password?</View>
        </View>
        <TouchableOpacity style={styles.logIn} onPress={handleLogin}>
          <Text style={{ color: '#fff' }}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.or}>OR</View>
        <View style={styles.gum}>Register with Gum</View>
        <View style={styles.phantom}>Register with Phantom</View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: ' ',
    padding: 15,
    fontFamily: 'Helvetica',
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
  inputs: {
    marginTop: 30,
  },
  inputSub: {
    borderRadius: 6,
    height: 42,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  passRememberDiv: {
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  logIn: {
    fontSize: '14px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '38px',
    color: '#fff',
    backgroundColor: '#700CC2',
    borderRadius: 6,
    marginTop: 15,
  },
  or: {
    fontSize: '14px',
    marginTop: 20,
  },
  gum: {
    fontSize: '14px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '38px',
    color: '#fff',
    backgroundColor: '#D664FF',
    borderRadius: 6,
    marginTop: 20,
  },
  phantom: {
    fontSize: '14px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '38px',
    color: '#fff',
    backgroundColor: '#5339CC',
    borderRadius: 6,
    marginTop: 15,
  },
})
