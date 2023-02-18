import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { SafeViewProp } from "../../../interface";

interface AllSafeAreaViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
export default function SafeView({ children, style }: SafeViewProp) {
  return (
    <SafeAreaView
      style={[
        Platform.OS === "android" && {
          paddingTop: StatusBar.currentHeight,
        },
        style && style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
