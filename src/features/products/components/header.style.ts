import styled from "styled-components/native";
import { View, Text } from "react-native";

export const HeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-end: 16px;
  padding-start: 16px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;
