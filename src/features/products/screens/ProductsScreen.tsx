import { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { ProductInfoCard } from "../components/product-info-card.component";
import Product from "../../../models/product";
import { Header } from "../components/header.component";
import { SafeArea } from "../../../components/safe-area.component";
import IProductContext, {
  ProductContext,
} from "../../../contexts/ProductContext";

export const ProductsScreen = () => {
  const { product, addProducts } = useContext(
    ProductContext
  ) as IProductContext;

  addProducts();

  return (
    <SafeArea>
      <Header />
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductInfoCard product={item} />}
        keyExtractor={(item: Product) => item.id.toString()}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};
