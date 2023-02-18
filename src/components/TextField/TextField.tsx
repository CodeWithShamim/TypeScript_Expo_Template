import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import { TextFieldProps } from "../../../interface";
import { colors } from "../../theme";
import { Text } from "../Typography";

export default function TextField({
  label,
  leftIcon,
  onChangeText,
  placeholder,
  rightIcon,
  showLeftIcon,
  showRightIcon,
  helperTextStyle,
  value,
  variant,
  labelStyle,
  helperText,
  error,
  sx,
  color,
}: TextFieldProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <View>
      <Text variant="sub-heading4" sx={labelStyle}>
        {label}
      </Text>
      <View style={styles.textFieldWrapper}>
        {showLeftIcon && <View style={styles.iconButton}>{leftIcon}</View>}
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(false)}
          style={[
            sx,
            styles.textField,
            {
              backgroundColor:
                variant === "filled"
                  ? "white"
                  : variant === "locked"
                  ? "#E7E8E7"
                  : color,
              width: Platform.OS === "android" ? 323 : 343,
              paddingLeft: showLeftIcon ? 34 : 24,
              paddingRight: showRightIcon ? 34 : 24,
              borderColor:
                error || variant === "error"
                  ? "#FF0000"
                  : focus || variant === "focused"
                  ? colors.primary.main
                  : "#A0A29F",
            },
          ]}
          cursorColor={
            error || variant === "error" ? "#FF0000" : colors.primary.main
          }
        />
        {showRightIcon && (
          <View
            style={[
              styles.iconButton2,
              { right: Platform.OS === "android" ? "15%" : "10%" },
            ]}
          >
            {rightIcon}
          </View>
        )}
      </View>
      <Text variant="pm" sx={helperTextStyle}>
        {helperText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textFieldWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  textField: {
    height: 56,
    borderWidth: 1,
    borderRadius: 8,

    marginTop: 8,
    marginBottom: 5,
    fontFamily: "regular",
    fontSize: 16,
  },
  iconButton: {
    position: "absolute",
    left: "2%",
  },
  iconButton2: {
    position: "absolute",
  },
});
