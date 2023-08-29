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

export const DotContainer = styled(View)`
  align-items: center;
  justify-content: center;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  position: absolute;
  z-index: 99;
  bottom: -2px;
  left: -4px;
`;

export const DotText = styled(Text)`
  font-size: 8px;
  color: white;
`;
