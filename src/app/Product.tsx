import { View } from "react-native";

import { Titlte } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Product() {
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
        <ButtonIcon name="arrow-circle-left" />
        <Titlte>Product</Titlte>
      </Header>
    </View>
  );
}
