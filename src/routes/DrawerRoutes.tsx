import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import { MaterialIcons } from "@expo/vector-icons";

export type DrawerRoutesList = {
  home: undefined;
  product:
    | undefined
    | {
        id: string;
      };
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const { Navigator, Screen } = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
