import {
  View,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import { LoginScreen } from '../screens/LoginScreen';

export function Navbar() {
  const logout = () => {
    navigation.navigate(LoginScreen)
  }
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
        <View style={{ marginLeft: 20, alignItems: 'flex-start' }}>
          <Text style={{ fontWeight: 'bold' }}>@MrPeer_here</Text>
          <Text>Fzmd...TTe2</Text>
        </View>
      </View>
      <View style={styles.iconDiv}>
        <NotificationsNoneOutlinedIcon style={{color: '#000'}} />
        <WavesOutlinedIcon style={{color: '#000'}} />

        <TouchableOpacity style={styles.initiateButton} onPress={logout}>
        <LogoutOutlinedIcon style={{color: '#000'}} />
        </TouchableOpacity>

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
    paddingRight: 20,
    height: 56,
    fontSize: 70,
    margin: -12,
    fontFamily: 'Inter',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  image: {
    width: 40,
    height: 40,
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
