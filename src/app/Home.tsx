import { View } from "react-native";

import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Titlte } from "@/components/Title";

export function Home() {
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
        <ButtonIcon name="add-circle" />
      </Header>
    </View>
  );
}
