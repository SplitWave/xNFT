import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Navbar } from '../components/Navbar'
import { Screen } from '../components/Screen'
import { LoginScreen } from './LoginScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FirstScreen } from './FirstScreen'

export function FifthScreen({ navigation }) {
  const handleCancelClick = () => {
    navigation.navigate(LoginScreen)
  }
const HandleClosePopup = () => {
    navigation.navigate(FirstScreen)
  }
  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>

        <View style={{ marginTop: '4%' }}>
        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={HandleClosePopup}>
          <MaterialCommunityIcons
            name="close"
            style={{ alignSelf: 'flex-end' }}
            color="#000"
            size={22}
          />
          </TouchableOpacity>
          <Text style={{ marginTop: '4%', fontWeight: 500 }}>COUNTDOWN</Text>
          <Text style={{ fontSize: 72, fontWeight: 700, color: '#7817C8' }}>
            -5:54
          </Text>
        </View>

        <View style={styles.pastWave}>
          <View style={styles.pastWaveHeading}>PARTICIPANTS</View>
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
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                <View style={{ color: '#6B7280' }}>($140.00)</View>
              </View>
              <View style={styles.pending}>Pending</View>
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
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                <View style={{ color: '#6B7280' }}>($140.00)</View>
              </View>
              <View style={styles.paid}>Paid</View>
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
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 3 }}>7.28 SOL</View>
                <View style={{ color: '#6B7280' }}>($140.00)</View>
              </View>
              <View style={styles.paid}>Paid</View>
            </View>

            {/* ------- */}
          </View>
        </View>

        <View style={{ gap: 15 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: '500', alignSelf: 'flex-start' }}>
                Merchant
              </Text>
              <Text>Initiated 10min ago</Text>
            </View>

            <View style={{ gap: 5 }}>
              <Text style={{ fontWeight: '500' }}>Juice & co.</Text>
              <Text>$120.43</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.cancel} onPress={handleCancelClick}>
            <Text style={{ color: '#C20C0C', fontWeight: '500' }}>
              Cancel transaction
            </Text>
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
    fontFamily: 'Inter',
    justifyContent: 'space-between',
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
    marginTop: '%',
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
    fontWeight: 600,
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
  cancel: {
    paddingVertical: 13,
    paddingHorizontal: 33,
    height: 50,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  pending: {
    backgroundColor: '#F5F5F5',
    color: 'rgba(0, 0, 0, 0.6)',
    width: 71,
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 28,
    borderRadius: 16,
    justifyContent: 'center',
  },
  paid: {
    backgroundColor: '#50C9CE',
    color: '#fff',
    width: 71,
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 28,
    borderRadius: 16,
    justifyContent: 'center',
  },
})
