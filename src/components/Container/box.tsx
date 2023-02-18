import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { BoxProps } from "../../../interface";
import SafeView from "../SafeView";

export default function Box({ children, sx }: BoxProps) {
  return (
    <SafeView>
      <View style={{ ...sx }}>{children}</View>
    </SafeView>
  );
}

const styles = StyleSheet.create({});
