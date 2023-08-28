import {
  InfoContainer,
  ProductCard,
  ProductCardCover,
  ProductNameText,
  CategoryText,
  PriceText,
} from "./product-info-card.style";
import { Button } from "react-native-paper";

export const ProductInfoCard = () => {
  return (
    <ProductCard>
      <ProductCardCover source={{ uri: "https://picsum.photos/700" }} />
      <InfoContainer>
        <ProductNameText>Product Name</ProductNameText>
        <CategoryText>Eletronic</CategoryText>
        <PriceText>R$ 55,00</PriceText>
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          COMPRAR
        </Button>
      </InfoContainer>
    </ProductCard>
  );
};
