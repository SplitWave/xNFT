import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Screen } from '../components/Screen'
import { Navbar } from '../components/Navbar'
import { SecondScreen } from './SecondScreen'
import Avatar from "boring-avatars";

export function FirstScreen({ navigation }) {

  const handlePaymentClick = () => {
    navigation.navigate(SecondScreen)
  }

  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        <View>
          <View style={styles.pendingWave}>
            <View style={styles.pendingSub}>
              <Text style={styles.Text}>PENDING WAVE</Text>
              <Text style={styles.timeDuration}>-13 : 55</Text>
            </View>
            <View style={styles.pendingSub}>
              <View style={styles.pendingSubUser}>
                <Avatar
  size={60}
  name="Maria Mitchell"
  variant="marble"
  square={false}
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>
                <View>
                  <Text style={{ marginBottom: 5 }}>Jane SOL</Text>
                  <Text style={{ color: '#877497' }}>Initiator</Text>
                </View>
              </View>
              <View>
                <Text style={{ marginBottom: 5 }}>21.84 SOL</Text>
                <Text style={{ color: '#877497' }}>$420.00</Text>
              </View>
            </View>
          </View>

          <View style={styles.pastWave}>
            <Text style={styles.pastWaveHeading}>PAST WAVES</Text>
            <View style={styles.pastWaveDiv}>
              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                <Avatar
  size={40}
  name="Amelia Earhart"
  variant="marble"
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>
                  <View style={{ gap: 2 }}>
                    <Text style={{ marginBottom: 3, color: '#6B7280' }}>Initiated by</Text>
                    <Text>You</Text>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <Text>4</Text>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ marginBottom: 3 }}>$200</Text>
                  <Text style={{ color: '#6B7280' }}>Amount</Text>
                </View>
              </View>

              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                <Avatar
  size={40}
  name="Belva Lockwood"
  variant="marble"
  colors={['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',]}
/>
                  <View style={{ gap: 2 }}>
                    <Text style={{ marginBottom: 3, color: '#6B7280' }}>Initiated by</Text>
                    <Text>NFTgod</Text>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <Text>8</Text>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ marginBottom: 3 }}>$78</Text>
                  <Text style={{ color: '#6B7280' }}>Amount</Text>
                </View>
              </View>

              {/* ------- */}

              <View style={styles.pastWaveSub}>
                <View style={styles.pastWaveSubUser}>
                <Avatar
  size={40}
  name="Florence Chadwick"
  variant="marble"
  colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
/>
                  <View style={{ gap: 2 }}>
                    <Text style={{ marginBottom: 3, color: '#6B7280' }}>Initiated by</Text>
                    <Text>Alysson282</Text>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <Text>3</Text>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ marginBottom: 3 }}>$109.23</Text>
                  <Text style={{ color: '#6B7280' }}>Amount</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.initiateButton} onPress={handlePaymentClick}>
        <Text style={{ color: '#fff', fontWeight: 500 }}>Add New Bill</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    minHeight: '95%',
    fontSize: 12,
    // fontFamily: 'Sans-serif',
    
  },
  Text: {
    color: 'white',
    fontWeight: 600,
    fontSize: '21px',
    // fontFamily: 'Sans-serif'
  },
  pendingWave: {
    borderRadius: '6px',
    minheight: '104px',
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
    fontWeight: 600
  },
  initiateButton: {
    fontSize: '32px',
    // marginTop: '100px',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 500,
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
    minHeight: '20px',
    marginBottom: '2%',
    fontWeight: 600,
    fontSize: '16px',
  },
  timeDuration: {
    color: '#FF829B',
    fontSize: '14px',
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
    minheight: '20px',
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
})
