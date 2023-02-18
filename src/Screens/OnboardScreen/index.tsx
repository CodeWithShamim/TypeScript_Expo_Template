import { Animated, FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Button, Text } from "../../components";
import { Onboard } from "../../../mock";
import { HEIGHT, WIDTH } from "../../Constants";
import { colors } from "../../theme";

interface IndicatorProps {
  index: number;
  scrollX: Animated.Value;
  slide?: number;
}
const Indicator = ({ index, scrollX }: IndicatorProps) => {
  const opacity = scrollX.interpolate({
    inputRange: [(index - 1) * WIDTH, index * WIDTH, (index + 1) * WIDTH],
    outputRange: [0.8, 1.4, 0.8],
  });
  return (
    <Animated.View style={styles.indicatorWrapper} key={index}>
      {Array(Onboard.length)
        .fill("_")
        .map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.indicator,
              {
                opacity,
              },
            ]}
          />
        ))}
    </Animated.View>
  );
};
export default function OnboardScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef<FlatList>(null);

  return (
    <Box>
      <FlatList
        ref={ref}
        data={Onboard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={() => {
          Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          });
        }}
        renderItem={({ item, index }) => {
          return (
            <Box sx={styles.container}>
              <Image
                source={item.Image}
                style={styles.asset}
                resizeMode="contain"
              />
              <Text
                sx={{ maxWidth: 300, paddingVertical: 15 }}
                variant="display"
              >
                {item.title}
              </Text>
              <Text
                lineHeight={25}
                numberOfLines={2}
                color="#3C3D3B"
                variant="p"
              >
                {item.content}
              </Text>
              <Box sx={styles.action}>
                <Indicator index={index} scrollX={scrollX} />
                <Button
                  size="large"
                  variant="contained"
                  sx={{ marginVertical: 10 }}
                >
                  Open an account
                </Button>
                <Button
                  size="large"
                  variant="outlined"
                  sx={{ borderColor: colors.border.main }}
                  color="danger"
                  textSx={{ color: colors.texts.main }}
                >
                  I have an account
                </Button>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  asset: {
    width: "100%",
  },
  action: {
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorWrapper: {
    flexDirection: "row",
  },
  indicator: {
    width: 49.34,
    height: 4,
    borderRadius: 100,
    backgroundColor: colors.gray[200],
    marginHorizontal: 8,
  },
});
