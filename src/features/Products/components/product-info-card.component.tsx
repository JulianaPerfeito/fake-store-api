import { Text } from "react-native";
import {
  InfoContainer,
  ProductCard,
  ProductCardCover,
} from "./product-info-card.style";

export const ProductInfoCard = () => {
  return (
    <ProductCard>
      <ProductCardCover source={{ uri: "https://picsum.photos/700" }} />
      <InfoContainer>
        <Text>Card title</Text>
        <Text>Card content</Text>
      </InfoContainer>
    </ProductCard>
  );
};
