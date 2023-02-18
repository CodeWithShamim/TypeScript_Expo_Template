import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { theme } from "../../theme";
import { WIDTH } from "../../Constants";
import { ContainerProps } from "../../../interface";
import SafeView from "../SafeView";

const Container: React.FC<ContainerProps> = ({
  children,
  sx,
  maxWidth,
  elevation,
  color,
}) => {
  const containerStyle: any = [styles.container];
  const getElevation = (elevation: number) => theme.shadow[elevation];
  if (maxWidth === "lg") {
    containerStyle.push(styles.maxWidth);
  }
  if (maxWidth === "md") {
    containerStyle.push(styles.mdWidth);
  }
  if (maxWidth === "sm") {
    containerStyle.push(styles.smWidth);
  }
  if (maxWidth === "xs") {
    containerStyle.push(styles.xsWidth);
  }
  return (
    <SafeView>
      <View
        style={[
          sx,
          elevation && getElevation(elevation),
          containerStyle,
          {
            alignSelf: "center",
          },
        ]}
      >
        {children}
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - 40,

    flex: 1,
  },
  maxWidth: {
    width: WIDTH,
  },
  mdWidth: {
    width: WIDTH - 20,
  },
  smWidth: {
    width: WIDTH - 50,
  },
  xsWidth: {
    width: WIDTH - 60,
  },
});
export default Container;
