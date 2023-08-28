import {} from "styled-components";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const ProductInfoCard = () => {
  return (
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Text>Card title</Text>
        <Text>Card content</Text>
      </Card.Content>
    </Card>
  );
};
