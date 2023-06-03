import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import {AuthorizeAPI} from '@solana-mobile/mobile-wallet-adapter-protocol';
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Text,
} from 'react-native'
import style from '../App.module.css'
import { Screen } from '../components/Screen'

export const APP_IDENTITY = {
  name: 'React Native dApp',
  uri:  'https://yourdapp.com'
  icon: "https://media.tatler.com/photos/627258d0bc4f55bd13591609/master/w_640,c_limit/Creepz_04052022_Instagram%20@coldbloodedcreepz_nft.jpg", // Full path resolves to https://yourdapp.com/favicon.ico
};

const authorizationResult = await transact(async (wallet: AuthorizeAPI) => {
  const authorizationResult = await wallet.authorize({
    cluster: 'devnet',
    identity: APP_IDENTITY,
  }));

  return authorizationResult;
});