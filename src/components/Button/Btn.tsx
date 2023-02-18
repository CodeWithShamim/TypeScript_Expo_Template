import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "../../../interface";
import { Text } from "../Typography";
import colors from "../../theme/Colors";
import { theme } from "../../theme";

export default function Button({
  variant,
  children,
  color,
  elevation,
  size,
  sx,
  shadowColor,
  shadowOpacity,
  paddingHorizontal,
  paddingVertical,
  marginVertical,
  marginHorizontal,
  disabled,
  startIcon,
  endIcon,
  textSx,
  loading,
  onPress,
}: ButtonProps) {
  const getElevation = (elevation: number) => theme.shadow[elevation];

  // * This handles button width
  let containerWidth;
  if (size === "large") {
    containerWidth = 342;
  }
  if (size === "normal") {
    containerWidth = 200;
  }
  if (size === "small") {
    containerWidth = 100;
  }

  const containerStyles: any = [
    styles.container,
    {
      width: size ? containerWidth : 250,
      backgroundColor: color ? colors : colors.primary.main,
      alignItems: "center",
    },
    marginVertical && { marginVertical },
    marginHorizontal && { marginHorizontal },
    paddingVertical && { paddingVertical },
    paddingHorizontal && { paddingHorizontal },
    variant == "contained"
      ? { borderColor: "transparent" }
      : { borderColor: color ? colors.divider.primary : colors.primary.main },
    disabled && {
      borderColor:
        variant !== "contained" ? colors.border.main : colors.primary[300],
      backgroundColor:
        variant !== "contained" ? colors.texts.white : colors.primary[300],
    },
  ];
  const textSxs = [
    styles.text,
    variant === "outlined" && {
      color: color ? color : colors.primary.main,
    },
    variant === "text" && {
      color: color ? color : colors.texts.main,
    },
    disabled && {
      color:
        variant !== "contained" ? colors.texts.disabled : colors.texts.white,
    },
  ];

  if (variant === "contained") {
    containerStyles.push(styles.container);
    containerStyles.push(styles.text);
  }
  if (variant === "outlined") {
    containerStyles.push(styles.containerOutlined);
    containerStyles.push(styles.textOutlined);
  }
  if (variant === "text") {
    containerStyles.push(styles.containerText);
    containerStyles.push(styles.text);
  }
  return (
    <React.Fragment>
      {startIcon && (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.9}
          style={[
            containerStyles,
            { flexDirection: "row" },
            variant !== "outlined" &&
              variant !== "text" &&
              elevation &&
              getElevation(elevation),
            { shadowColor, shadowOpacity },
            sx,
          ]}
        >
          {startIcon}
          <Text variant="btn-text" sx={[textSxs, textSx]}>
            {children}
          </Text>
        </TouchableOpacity>
      )}
      {startIcon ||
        (endIcon ? (
          ""
        ) : (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[
              containerStyles,
              variant !== "outlined" &&
                variant !== "text" &&
                elevation &&
                getElevation(elevation),
              { shadowColor, shadowOpacity },
              sx,
            ]}
          >
            <Text variant="btn-text" sx={[textSxs, textSx]}>
              {children}
            </Text>
          </TouchableOpacity>
        ))}

      {endIcon && (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={[
            containerStyles,
            { flexDirection: "row" },
            variant !== "outlined" &&
              variant !== "text" &&
              elevation &&
              getElevation(elevation),
            { shadowColor, shadowOpacity },
            sx,
          ]}
        >
          <Text variant="btn-text" sx={[textSxs, textSx]}>
            {children}
          </Text>
          {endIcon}
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 53,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    borderWidth: 1,
  },
  containerOutlined: {
    backgroundColor: "transparent",
  },
  containerText: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  containerDisabled: {},
  textOutlined: {
    color: colors.primary.main,
  },
  text: {
    color: colors.texts.white,
  },
});
