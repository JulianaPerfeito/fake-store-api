import { ProductsScreen } from "./src/features/products/screens/ProductsScreen";
import { CartScreen } from "./src/features/cart/screens/CartScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/navigation/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useRoboto,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [robotoLoaded] = useRoboto({
    Roboto_900Black,
  });

  if (!oswaldLoaded || !latoLoaded || !robotoLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
