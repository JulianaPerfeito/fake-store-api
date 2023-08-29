import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsScreen } from "../features/products/screens/ProductsScreen";
import { CartScreen } from "../features/cart/screens/CartScreen";

const Stack = createNativeStackNavigator();

export default AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: "Meu Carrinho",
        }}
      />
    </Stack.Navigator>
  );
};
