import {
  ColorValue,
  OpaqueColorValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface TextFieldProps {
  variant?: "default" | "filled" | "focused" | "error" | "locked";
  label?: string;
  placeholder?: string;
  helperText?: string;
  size?: number;
  value: string;
  onChangeText?: (value: any) => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  sx?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  error?: boolean;
  color?: ColorValue;
  helperTextStyle?: StyleProp<TextStyle>;
}
