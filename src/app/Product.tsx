import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";

import { Titlte } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Product({ navigation }: Readonly<StackRoutesProps<"product">>) {
  function handleNavigateGoBack() {
    navigation.goBack();
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
        <ButtonIcon name="arrow-circle-left" onPress={handleNavigateGoBack} />
        <Titlte>Product</Titlte>
      </Header>
    </View>
  );
}
