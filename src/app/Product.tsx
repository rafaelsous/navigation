import { View } from "react-native";

import { BottomTabRoutesProps } from "@/routes/BottomTabRoutes";

import { Title } from "@/components/Title";
import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Product({
  navigation,
  route,
}: Readonly<BottomTabRoutesProps<"product">>) {
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
        <Title>Product</Title>
      </Header>

      {route.params && (
        <Title style={{ fontSize: 24, textAlign: "center" }}>
          Product ID:{" "}
          <Title style={{ fontSize: 24, fontWeight: 700 }}>
            {route.params?.id}
          </Title>
        </Title>
      )}
    </View>
  );
}
