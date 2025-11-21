import { NavigationContainer } from "@react-navigation/native";

import { BottomTabRoutes } from "./BottomTabRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
}
