import { StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
  children: React.ReactNode;
  sx?: StyleProp<ViewStyle>;
  maxWidth?: "sm" | "md" | "lg" | "xs";
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  color?: string;
}
