import { useContext } from "react";
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
import ICartContext, { CartContext } from "../../../contexts/CartContext";

export const ProductInfoCard = ({ product }: { product: Product }) => {
  const { cart, addItemToCart } = useContext(CartContext) as ICartContext;

  const handleClick = (product: Product) => {
    addItemToCart(product);
  };

  return (
    <ProductCard>
      <ProductCardCover source={{ uri: product.image }} />
      <InfoContainer>
        <ProductNameText>{product.title}</ProductNameText>
        <CategoryText>{product.category}</CategoryText>
        <PriceText>${product.price}</PriceText>
        <Button mode="contained" onPress={() => handleClick(product)}>
          COMPRAR
        </Button>
      </InfoContainer>
    </ProductCard>
  );
};
