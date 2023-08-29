import styled from "styled-components";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";

export const CartCard = styled(Card)`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const InfoContainer = styled(View)`
  padding: 16px;
  align-items: center;
`;

export const ProductNameText = styled(Text)`
  font-family: "Oswald_400Regular";
  font-size: 24px;
`;

export const CategoryText = styled(Text)`
  font-family: "Lato_400Regular";
`;

export const PriceText = styled(Text)`
  font-family: "Roboto_900Black";
  font-size: 24px;
  padding: 8px;
`;
