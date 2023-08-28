import {
  InfoContainer,
  ProductCard,
  ProductCardCover,
  ProductNameText,
  CategoryText,
  PriceText,
} from "./product-info-card.style";
import { Button } from "react-native-paper";
import Product from "../../../models/product";

export const ProductInfoCard = ({ product }: { product: Product }) => {
  return (
    <ProductCard>
      <ProductCardCover source={{ uri: product.image }} />
      <InfoContainer>
        <ProductNameText>{product.title}</ProductNameText>
        <CategoryText>{product.category}</CategoryText>
        <PriceText>${product.price}</PriceText>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          COMPRAR
        </Button>
      </InfoContainer>
    </ProductCard>
  );
};
