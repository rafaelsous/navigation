import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackRoutesList } from "@/routes/StackRoutes";

import { Titlte } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

type Props = NativeStackScreenProps<StackRoutesList, "home">;

export function Home({ navigation }: Readonly<Props>) {
  function handleNavigateToProduct() {
    navigation.navigate("product");
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
