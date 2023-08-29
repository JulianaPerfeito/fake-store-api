import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./header.style";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}
export const Header = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();

  return (
    <HeaderContainer>
      <Title>FAKE NATTY STORE</Title>
      <TouchableOpacity onPress={() => navigate("CartScreen")}>
        <Feather name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </HeaderContainer>
  );
};
