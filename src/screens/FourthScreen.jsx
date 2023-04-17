import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'
import { FifthScreen } from './FifthScreen'

export function FourthScreen({ navigation }) {
  const handlePayClick = () => {
    navigation.navigate(FifthScreen)
  }

  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        <View>
          <View style={{ marginTop: '8%' }}>
            <Text style={{ fontSize: 14, fontWeight: '600' }}>
              Amount to pay
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                gap: 5,
                justifyContent: 'flex-end',
              }}
            >
              <Text
                style={{ color: '#50C9CE', fontSize: 24, fontWeight: '700' }}
              >
                100 SOL
              </Text>
              <Text style={{ color: 'rgba(0, 0, 0, 0.4)' }}>($1250.00)</Text>
            </View>
          </View>

          <View style={styles.pastWave}>
            <View style={styles.pastWaveHeading}>PAYMENT #201 SPLIT</View>
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
                    <View style={{ marginBottom: 3 }}>You</View>
                    <View style={{ color: '#6B7280' }}>33.33%</View>
                  </View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                  <View style={{ color: '#6B7280' }}>($140.00)</View>
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
                    <View style={{ marginBottom: 3 }}>NFTgod</View>
                    <View style={{ color: '#6B7280' }}>33.33%</View>
                  </View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                  <View style={{ color: '#6B7280' }}>($140.00)</View>
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
                    <View style={{ marginBottom: 3 }}>Alysson..</View>
                    <View style={{ color: '#6B7280' }}>33.33%</View>
                  </View>
                </View>
                <View>
                  <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                  <View style={{ color: '#6B7280' }}>($140.00)</View>
                </View>
              </View>

              {/* ------- */}
            </View>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <TouchableOpacity style={styles.pay} onPress={handlePayClick}>
            <Text style={{ color: '#fff', fontWeight: '500' }}>
              Pay with
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.back}>
            <Text style={{ color: '#700CC2', fontWeight: '500' }}>Go back</Text>
          </TouchableOpacity>
        </View>
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
  pay: {
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
  image: {
    width: 35,
    height: 35,
    borderRadius: 75,
  },
  pastWave: {
    borderRadius: '6px',
    height: '257px',
    backgroundColor: '#fff',
    marginTop: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    color: '#fff',
  },
  pastWaveHeading: {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    alignItems: 'flex-start',
    height: '40px',
    paddingVertical: '12px',
    paddingHorizontal: '24px',
  },
  pastWaveDiv: {
    paddingVertical: '16px',
    paddingHorizontal: '24px',
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
  back: {
    paddingVertical: 13,
    paddingHorizontal: 33,
    height: 50,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  }
})
