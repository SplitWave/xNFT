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
              <View>PENDING WAVE</View>
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
          
          <View style={styles.pastWave}>
            <View style={styles.pastWaveHeading}>PAST WAVES</View>
            <View style={styles.pastWaveDiv}>
              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
                    }}
                  />
                  <View>
                    <View style={{ marginBottom: 3 }}>Initiated by</View>
                    <View style={{ fontWeight: '300' }}>Jane SOL</View>
                  </View>
                </View>
                <View>
                  <View style={{ fontWeight: '300' }}>Size</View>
                  <View>4</View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>$200</View>
                  <View style={{ fontWeight: '300' }}>Amount</View>
                </View>
              </View>

              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
                    }}
                  />
                  <View>
                    <View style={{ marginBottom: 3 }}>Initiated by</View>
                    <View style={{ fontWeight: '300' }}>Jane SOL</View>
                  </View>
                </View>
                <View>
                  <View style={{ fontWeight: '300' }}>Size</View>
                  <View>4</View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>$200</View>
                  <View style={{ fontWeight: '300' }}>Amount</View>
                </View>
              </View>

              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                  <Image
                    style={styles.image}
                    source={{
                      uri:
                        'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
                    }}
                  />
                  <View>
                    <View style={{ marginBottom: 3 }}>Initiated by</View>
                    <View style={{ fontWeight: '300' }}>Jane SOL</View>
                  </View>
                </View>
                <View>
                  <View style={{ fontWeight: '300' }}>Size</View>
                  <View>4</View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>$200</View>
                  <View style={{ fontWeight: '300' }}>Amount</View>
                </View>
              </View>

              {/* ------- */}
            </View>
          </View>
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
    fontSize: '12px',
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
    color: '#fff',
    
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
  },
  pastWaveHeading: {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    alignItems: 'flex-start',
    height: '40px',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  pastWaveDiv: {
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    justifyContent: 'space-between',
    height: '205px',
    
  },
  pastWaveSub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    height: '20px',
  },
  pastWaveSubUser: {
    flexDirection: 'row',
    width: '112px',
    justifyContent: 'space-between',
  },
})
