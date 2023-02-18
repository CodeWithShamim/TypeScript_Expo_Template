import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger" | "success" | "inherit";
  size?: "small" | "normal" | "large";
  fontFamily?: "google-sans" | "google-sans-bold" | "dynapuff";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  sx?: StyleProp<ViewStyle>;
  textSx?: StyleProp<TextStyle>;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  shadowColor?: string;
  shadowOpacity?: number;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  disableRipple?: boolean;
  rippleColor?: string;
  startIcon?: any;
  endIcon?: any;
  onPress?: (args: any) => void;
  loading?: boolean;
  disabled?: boolean;
}
