
import tw from "twrnc";
import React from 'react';

import { View, StyleSheet, StyleProp, ViewStyle, Button } from "react-native";
import style from "../App.module.css"

import { Screen } from "../components/Screen";
import { Navbar } from "../components/Navbar";

export function HomeScreen() {
 
  return (
    <Screen>
      <Navbar />
    </Screen>

  );
}

