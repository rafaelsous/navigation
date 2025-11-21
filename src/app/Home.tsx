import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home({ navigation }: Readonly<StackRoutesProps<"home">>) {
  function handleNavigateToProduct() {
    navigation.navigate("product", {
      id: Math.random().toString(36).substring(2),
    });
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
        <Title>Home</Title>
        <ButtonIcon name="add-circle" onPress={handleNavigateToProduct} />
      </Header>
    </View>
  );
}
