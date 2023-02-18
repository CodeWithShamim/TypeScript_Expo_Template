import colors from "./Colors";
import shadow from "./Shadows";
interface themeProps {
  shadow: any;
  light: any;
  dark: any;
  mode: "light" | "dark";
}
const theme: themeProps = {
  shadow: { ...shadow },
  light: "white",
  dark: "black",
  mode: "light",
};

export { colors, shadow, theme };
