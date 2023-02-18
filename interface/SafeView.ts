import { StyleProp, ViewStyle } from "react-native";

export interface SafeViewProp {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
