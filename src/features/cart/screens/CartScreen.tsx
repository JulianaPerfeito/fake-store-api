import { useContext } from "react";
import { CartInfoCard } from "./components/cart-info-card.component";
import ICartContext, { CartContext } from "../../../contexts/CartContext";
import { FlatList, View, Text } from "react-native";
import Cart from "../../../models/cart";

export const CartScreen = () => {
  const { cart, total } = useContext(CartContext) as ICartContext;

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartInfoCard cart={item} />}
        keyExtractor={(item: Cart) => item.id.toString()}
        ListFooterComponent={() => <Text>TOTAL: R${total.toFixed(2)}</Text>}
      />
    </View>
  );
};
