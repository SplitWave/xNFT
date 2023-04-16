import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[] | null;
};
export function Screen({ style, children }: Props) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    fontFamily: "Inter_900Black",
    textAlign: "center",
    fontSize: 64,
    color: "#000",
    backgroundColor: '#fff',
    flexDirection: 'column',
    // textAlign: 'center',
    // padding: 0 20px;
    // border-radius: 8px;
    // padding-top: 20px;
  },
});
