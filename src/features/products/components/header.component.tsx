import { TouchableOpacity, Text } from "react-native";
import { HeaderContainer, Title, DotContainer, DotText } from "./header.style";

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
        <DotContainer>
          <DotText>BUY</DotText>
        </DotContainer>
        <Feather name="shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </HeaderContainer>
  );
};
