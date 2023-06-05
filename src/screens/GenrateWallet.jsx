import React, { useState } from 'react'
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
import { Button } from '@mui/material'
import { FirstScreen } from './FirstScreen'
import { generateMnemonic } from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import ConnectButton from '../components/ConnectWallet'

export function GenrateWallet({ navigation }) {
    const [mnemonic, setMnemonic] = useState('')
    const [show, setShow] = useState(false)

    const handleLogin = () => {
      navigation.navigate(FirstScreen)
    }
  
    const generate = () => {
      const mnemonic = generateMnemonic(wordlist)
  
      setMnemonic(mnemonic)
    }
    return (
        <Screen>
        <View style={style.heading}>
            Genrating your wallet
        </View>
        <Button onClick={generate}>Generate</Button>
        <Text>{mnemonic}</Text>
        <TouchableOpacity style={styles.wallet} onPress={() => setShow(true)}>
          {show && <ConnectButton />}
        <Text style={{color: '#fff', fontWeight: '500'}}>go go</Text>
        </TouchableOpacity>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 15,
        fontFamily: 'Inter',
        },
        heading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        },
        wallet: {
        backgroundColor: '#371752',
        borderRadius: 10,
            
        height: 56,
        fontSize: 70,
        margin: -12,
        fontFamily: 'Inter',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        },
    })