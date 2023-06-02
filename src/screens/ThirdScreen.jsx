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
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FourthScreen } from './FourthScreen'
import { SecondScreen } from './SecondScreen'

export function ThirdScreen({ navigation }) {
  const [addr, onChangeAddress] = React.useState('')

  const handleSummaryClick = () => {
    navigation.navigate(FourthScreen)
  }
  const handleGoBack = () => {
    navigation.navigate(SecondScreen)
  }

  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        <View style={{ paddingHorizontal: '3%' }}>
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

          <View style={{ marginTop: '6%' }}>
            <Text
              style={{ fontSize: 14, fontWeight: 600, alignSelf: 'flex-start' }}
            >
              Select a first wallet
            </Text>
            <TextInput
              style={styles.inputAddr}
              onChangeText={onChangeAddress}
              value={addr}
              placeholder="Fzmd...TTe2"
            />
          </View>

          <MaterialCommunityIcons
            name="plus"
            style={{ marginTop: '8%' }}
            color="#000"
            size={22}
          />
        </View>

        <View style={{ gap: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <TouchableOpacity style={styles.equalSplitBtn}>
              <Text style={{ color: '#fff', fontWeight: 500 }}>Equal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.splitBtn}>
              <Text style={{ color: '#000', fontWeight: 500 }}>Quarter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.splitBtn}>
              <Text style={{ color: '#000', fontWeight: 500 }}>Bi-quarter</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 12 }}>
            <TouchableOpacity style={styles.summary}  onPress={handleSummaryClick}>
              <Text style={{ color: '#fff', fontWeight: '500', }}>Check summary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.back} onPress={handleGoBack}>
              <Text style={{ color: '#700CC2', fontWeight: '500' }}>Go back</Text>
            </TouchableOpacity>
          </View>
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
  inputAddr: {
    borderRadius: 6,
    height: 42,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    color: '#D1D5DB',
  },
  splitBtn: {
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
  summary: {
    backgroundImage: 'linear-gradient(90deg, #700CC2 0%, #9036D9 100%)',
    paddingVertical: 13,
    paddingHorizontal: 33,
    height: 50,
    borderRadius: 6,
    fontWeight: 500,
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
  },
  equalSplitBtn: {
    backgroundColor: '#9C95DC',
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
