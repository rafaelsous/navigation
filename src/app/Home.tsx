import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Titlte } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home() {
  const { navigate } = useNavigation();

  function handleNavigateToProduct() {
    navigate("product");
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
        paddingTop: 54,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Header>
        <Titlte>Home</Titlte>
        <ButtonIcon name="add-circle" onPress={handleNavigateToProduct} />
      </Header>
    </View>
  );
}
