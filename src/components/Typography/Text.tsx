import { StyleSheet, Text as Typography, View } from "react-native";
import React from "react";
import { TypographyProps } from "../../../interface";
import { TYPO } from "../../Constants";
import { colors } from "../../theme";

export default function Text({
  variant,
  textAlign,
  textTransform,
  fontSize,
  fontWeight,
  sx,
  color,
  children,
  numberOfLines,
  lineHeight,
}: TypographyProps) {
  const textStyle = [];

  if (variant === "h1") {
    textStyle.push({ fontSize: TYPO.h1, fontFamily: "hMedium" });
  }
  if (variant === "h2") {
    textStyle.push({ fontSize: TYPO.h2, fontFamily: "hMedium" });
  }
  if (variant === "h3") {
    textStyle.push({ fontSize: TYPO.h3, fontFamily: "hMedium" });
  }
  if (variant === "sub-heading1") {
    textStyle.push({ fontSize: TYPO.h3, fontFamily: "regular" });
  }
  if (variant === "sub-heading2") {
    textStyle.push({ fontSize: TYPO.h3, fontFamily: "medium" });
  }
  if (variant === "sub-heading3") {
    textStyle.push({ fontSize: TYPO.h4, fontFamily: "regular" });
  }
  if (variant === "sub-heading4") {
    textStyle.push({ fontSize: TYPO.h5, fontFamily: "regular" });
  }
  if (variant === "btn-text") {
    textStyle.push({ fontSize: TYPO.buttonText, fontFamily: "medium" });
  }
  if (variant === "p") {
    textStyle.push({ fontSize: TYPO.paragraph, fontFamily: "regular" });
  }
  if (variant === "pm") {
    textStyle.push({ fontSize: 12, fontFamily: "regular" });
  }
  if (variant === "callout") {
    textStyle.push({ fontSize: TYPO.callout, fontFamily: "medium" });
  }
  if (variant === "caption1") {
    textStyle.push({ fontSize: TYPO.caption1, fontFamily: "medium" });
  }
  if (variant === "caption2") {
    textStyle.push({ fontSize: TYPO.caption1, fontFamily: "regular" });
  }
  if (variant === "caption3") {
    textStyle.push({ fontSize: TYPO.caption2, fontFamily: "regular" });
  }
  if (variant === "display") {
    textStyle.push({ fontSize: TYPO.display, fontFamily: "hBold" });
  }
  if (variant === "display-regular") {
    textStyle.push({ fontSize: TYPO.display, fontFamily: "hRegular" });
  }
  if (variant === "footnote") {
    textStyle.push({ fontSize: TYPO.footnote, fontFamily: "regular" });
  }
  return (
    <View>
      <Typography
        numberOfLines={numberOfLines}
        style={[
          !fontSize ? textStyle : { fontSize: fontSize ? fontSize : 16 },
          textAlign && { textAlign: textAlign },
          color && { color: color ? color : colors.texts.main },
          textTransform && { textTransform },
          sx,
          {
            fontWeight,
            lineHeight: lineHeight,
          },
        ]}
      >
        {children}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({});
