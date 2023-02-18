import { TextStyle, TextProps, StyleProp, Text } from "react-native";

type OpaqueColorValue = symbol & { __TYPE__: "Color" };
export type ColorValue = string | OpaqueColorValue;

export type ProcessedColorValue = string | OpaqueColorValue;

export interface TypographyProps extends TextProps {
  color?: ProcessedColorValue;
  lineHeight?: number;
  variant?:
    | "display"
    | "display-regular"
    | "h1"
    | "h2"
    | "h3"
    | "headline"
    | "btn-text"
    | "p"
    | "pm"
    | "sub-heading1"
    | "sub-heading2"
    | "sub-heading3"
    | "sub-heading4"
    | "footnote"
    | "callout"
    | "caption1"
    | "caption2"
    | "caption3";
  fontSize?: number;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  textAlign?: "center" | "auto" | "justify" | "left" | "right";
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  sx?: StyleProp<TextStyle>;
}
