import React from 'react'
import { View, StyleSheet, Image, ViewStyle, Button } from 'react-native'
import style from '../App.module.css'
import { Screen } from '../components/Screen'
import { Navbar } from '../components/Navbar'

export function FirstScreen() {
  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        <View>
          <View style={styles.pendingWave}>
            <View style={styles.pendingSub}>
              <View>Pending Wave</View>
              <View style={styles.timeDuration}>13 : 55</View>
            </View>
            <View style={styles.pendingSub}>
              <View style={styles.pendingSubUser}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
                  }}
                />
                <View>
                  <View style={{ marginBottom: 3 }}>Jane SOL</View>
                  <View style={{ fontWeight: '300' }}>Initiator</View>
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 3 }}>21.84 SOL</View>
                <View style={{ fontWeight: '300' }}>$420.00</View>
              </View>
            </View>
          </View>
          <View style={styles.pastWave}>test</View>
        </View>
        <View style={styles.initiateButton}>Initiate new payment</View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    minHeight: '90%',
  },
  pendingWave: {
    borderRadius: '6px',
    height: '104px',
    backgroundColor: '#371752',
    marginTop: '30px',
    padding: '24px',
  },
  pastWave: {
    borderRadius: '6px',
    height: '257px',
    backgroundColor: '#fff',
    marginTop: '30px',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  initiateButton: {
    fontSize: '16px',
    // marginTop: '100px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    color: '#fff',
    backgroundColor: 'purple',
    backgroundImage: 'linear-gradient(90deg, #700CC2 0%, #9036D9 100%)',
    borderRadius: 6,
  },
  pendingSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: 'white',
    height: '20px',
  },
  timeDuration: {
    color: '#FF829B',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 75,
  },
  pendingSubUser: {
    flexDirection: 'row',
    width: '112px',
    justifyContent: 'space-between',
  }
})
