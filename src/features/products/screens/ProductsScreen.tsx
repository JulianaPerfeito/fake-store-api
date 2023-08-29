import { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { ProductInfoCard } from "../components/product-info-card.component";
import Product from "../../../models/product";
import { Header } from "../components/header.component";

export const ProductsScreen = () => {
  const [products, setProducts] = useState<Product[]>();

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((items) => {
      setProducts(items);
    });

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductInfoCard product={item} />}
        keyExtractor={(item: Product) => item.id.toString()}
      />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
