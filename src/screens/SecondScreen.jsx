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
import { ThirdScreen } from './ThirdScreen'
import { FirstScreen } from './FirstScreen'

export function SecondScreen({ navigation }) {
  
  const [cost, onChangeCost] = React.useState('')
  const [tag, onChangeTag] = React.useState('')

  const handleSplitClick = () => {
    navigation.navigate(ThirdScreen)
  }

  const handleGoBack = () => {
    navigation.navigate(FirstScreen)
  }
  return (
    <Screen>
      <Navbar />
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-around',
            height: '50%',
            marginTop: '5%',
          }}
        >
          <Text style={styles.heading}>Select an amount for payment</Text>
          <View>
            <TextInput
              style={styles.inputCost}
              onChangeText={onChangeCost}
              value={cost}
              placeholder="0 SOL"
            />
            <Text style={{color: `rgba(0, 0, 0, 0.2)`}}>($00.00)</Text>
          </View>
          <TextInput
            style={styles.inputTag}
            onChangeText={onChangeTag}
            value={tag}
            placeholder="Add a tag to the expense"
          />
        </View>

        <View style={{ gap: 12 }}>
          <TouchableOpacity style={styles.split} onPress={handleSplitClick}>
            <Text style={{ color: '#fff', fontWeight: 500 }}>Split the amount</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel} onPress={handleGoBack}>
            <Text style={{ color: '#700CC2', fontWeight: 500 }}>Cancel</Text>
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
  heading: {
    fontSize: 32,
    fontWeight: 600,
    width: 311,
    alignSelf: 'center',
    padding: 10,
  },
  inputCost: {
    fontSize: 48,
    fontWeight: 700,
    textAlign: 'center',
    color: `rgba(0, 0, 0, 0.2)`,
  },
  inputTag: {
    height: 42,
    paddingVertical: 9,
    paddingHorizontal: 13,
    height: 50,
    borderRadius: 6,
    color: `rgba(107, 114, 128, 0.4)`,
    backgroundColor: '#f5f5f5',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
  },
  split: {
    backgroundImage: 'linear-gradient(90deg, #700CC2 0%, #9036D9 100%)',
    paddingVertical: 13,
    paddingHorizontal: 33,
    height: 50,
    borderRadius: 6,
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
})
