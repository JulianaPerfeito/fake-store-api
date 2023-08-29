import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./header.style";

import { Feather } from "@expo/vector-icons";
export const Header = () => {
  return (
    <HeaderContainer>
      <Title>FAKE NATTY STORE</Title>
      <TouchableOpacity>
        <Feather name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </HeaderContainer>
  );
};
