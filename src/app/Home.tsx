import { View } from "react-native";

import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home({ navigation }: Readonly<DrawerRoutesProps<"home">>) {
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
        <ButtonIcon name="add-circle" onPress={handleNavigateToProduct} />
        <Title>Home</Title>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
      </Header>
    </View>
  );
}
