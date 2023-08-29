import { useContext } from "react";
import { CartInfoCard } from "./components/cart-info-card.component";
import ICartContext, { CartContext } from "../../../contexts/CartContext";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Cart from "../../../models/cart";
import styled from "styled-components";

export const PriceText = styled(Text)`
  font-family: "Roboto_900Black";
  font-size: 24px;
  padding: 8px;
`;

export const CartScreen = () => {
  const { cart, total } = useContext(CartContext) as ICartContext;

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartInfoCard cart={item} />}
        keyExtractor={(item: Cart) => item.id.toString()}
        ListEmptyComponent={() => (
          <PriceText>stay natty, kid! buy something whist us</PriceText>
        )}
        ListFooterComponent={() => (
          <PriceText>TOTAL: R${total.toFixed(2)}</PriceText>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceText: {
    fontFamily: "Roboto_900Black",
    fontSize: 24,
    padding: 8,
  },
});
