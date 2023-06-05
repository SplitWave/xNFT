import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Screen } from '../components/Screen'
import { Navbar } from '../components/Navbar'
import { SecondScreen } from './SecondScreen'
import Avatar from "boring-avatars";
import {useSolanaConnection, usePublicKeys } from 'react-xnft'
import { PublicKey } from '@solana/web3.js'

export function FirstScreen({ navigation}: any) {

  const connection = useSolanaConnection();
  
  const pks = usePublicKeys() as unknown as {solana: string};
  let pksString: string = "No pubkeys available!"
  const pk = pks ? new PublicKey(pks?.solana) : undefined;
  if(pk){
      pksString = pk.toBase58();
  }

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
              <Text style={styles.Text}>PENDING WAVES</Text>
            </View>
            <View style={styles.pendingSub}>
              <Text style={styles.pk}>{pksString}</Text>
            </View>
            <View style={styles.pendingSub}>
              <Text style={styles.timeDuration}>13 : 55</Text>
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
                  <View style={{ marginBottom: 5 }}>Jane SOL</View>
                  <Text style={{ color: '#877497' }}>Initiator</Text>
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 5 }}>21.84 SOL</View>
                <Text style={{ color: '#877497' }}>$420.00</Text>
              </View>
            </View>
          </View>

          <View style={styles.pastWave}>
            <View style={styles.pastWaveHeading}>PAST WAVES</View>
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
                    <View>You</View>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <View>4</View>
                </View>
                <View style={{ gap: 2 }}>
                  <View style={{ marginBottom: 3 }}>$200</View>
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
                    <View>NFTgod</View>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <View>8</View>
                </View>
                <View style={{ gap: 2 }}>
                  <View style={{ marginBottom: 3 }}>$78</View>
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
                    <View>Alysson282</View>
                  </View>
                </View>
                <View style={{ gap: 2 }}>
                  <Text style={{ color: '#6B7280' }}>Size</Text>
                  <View>3</View>
                </View>
                <View style={{ gap: 2 }}>
                  <View style={{ marginBottom: 3 }}>$109.23</View>
                  <Text style={{ color: '#6B7280' }}>Amount</Text>
                </View>
              </View>

              {/* ------- */}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.initiateButton} onPress={handlePaymentClick}>
        <Text style={{ color: '#fff', fontWeight: "500" }}>Add New Bill</Text>
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
    fontFamily: 'Inter',
    
  },
  Text: {
    color: 'white',
    fontWeight: "600",
    fontSize: 21,
    fontFamily: 'Inter'
  },
  pk: {
    color: 'white',
    fontWeight: "100",
    fontSize: 12,
    fontFamily: 'Inter'
  },
  pendingWave: {
    borderRadius: 6,
    // minheight: 104,
    backgroundColor: '#371752',
    marginTop: '30px',
    padding: '24px',
  },
  pastWave: {
    borderRadius: 6,
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
    fontWeight: "600"
  },
  initiateButton: {
    fontSize: 32,
    // marginTop: '100px',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: "500",
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
    fontWeight: "600",
    fontSize: 16,
  },
  timeDuration: {
    color: '#FF829B',
    fontSize: 14,
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
