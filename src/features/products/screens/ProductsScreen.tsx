import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {} from "styled-components";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { ProductInfoCard } from "../components/product-info-card.component";

export const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductInfoCard />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
