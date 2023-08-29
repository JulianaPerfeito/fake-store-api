import { useContext, useState } from "react";
import { Card, Button } from "react-native-paper";
import { View, Text } from "react-native";
import {
  CartCard,
  InfoContainer,
  ProductNameText,
  PriceText,
} from "./cart-info-card.style";
import Cart from "../../../../models/cart";
import ICartContext, { CartContext } from "../../../../contexts/CartContext";
import Product from "../../../../models/product";

export const CartInfoCard = (
  { cart }: { cart: Cart },
  addAmount: () => (newItem: Product) => void
) => {
  const { addItemToCart, removeItemCart } = useContext(
    CartContext
  ) as ICartContext;

  const [amount, setAmount] = useState(cart?.amount);

  const handleIncrease = (cart: Cart) => {
    setAmount((item) => item + 1);
    addItemToCart(cart);
  };

  function handleDecrease(cart: Cart) {
    removeItemCart(cart);

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount((item) => item - 1);
  }

  return (
    <CartCard>
      <InfoContainer>
        <ProductNameText>{cart.title}</ProductNameText>
        <PriceText>TOTAL ${cart.total.toFixed(2)}</PriceText>
      </InfoContainer>
      <Card.Actions>
        <Button onPress={() => handleDecrease(cart)}>-</Button>
        <Text>{amount}</Text>
        <Button onPress={() => handleIncrease(cart)}>+</Button>
      </Card.Actions>
    </CartCard>
  );
};
