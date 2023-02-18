import { StyleProp, ViewStyle } from "react-native";

export interface BoxProps extends React.CSSProperties {
  children?: React.ReactNode;
  sx?: StyleProp<ViewStyle>;
}
