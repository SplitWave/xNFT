import {
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Button,
  Text,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.userDiv}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg',
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>santino1919</Text>
          <Text>Fzmd...TTe2</Text>
        </View>
      </View>
      <View style={styles.iconDiv}>
        <MaterialCommunityIcons name="bell" color="#000" size={22} />
        <MaterialCommunityIcons name="circle" color="#000" size={22} />
        <MaterialCommunityIcons name="logout" color="#000" size={22} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    // borderRadius: 10,
    padding: 10,
    height: 56,
    fontSize: 70,
    // fontFamily: 'Helvetica',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  image: {
    width: 35,
    height: 35,
  },
  userDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 121.5,
  },
})
