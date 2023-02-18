import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./src/Screens/OnboardScreen";
import { hideHeader } from "./custom";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    hBold: require("./assets/fonts/Gilroy/Gilroy-Bold.ttf"),
    hRegular: require("./assets/fonts/Gilroy/Gilroy-Regular.ttf"),
    hMedium: require("./assets/fonts/Gilroy/Gilroy-Medium.ttf"),
    hSemiBold: require("./assets/fonts/Gilroy/Gilroy-SemiBold.ttf"),
    regular: require("./assets/fonts/Gordita/Gordita-Regular.otf"),
    medium: require("./assets/fonts/Gordita/Gordita-Medium.otf"),
    light: require("./assets/fonts/Gordita/Gordita-Light.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={hideHeader}
            name="Onboard"
            component={OnboardScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
