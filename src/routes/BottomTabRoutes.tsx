import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type BottomTabRoutesList = {
  home: undefined;
  product:
    | undefined
    | {
        id: string;
      };
};

export type BottomTabRoutesProps<T extends keyof BottomTabRoutesList> =
  BottomTabScreenProps<BottomTabRoutesList, T>;

const { Navigator, Screen } = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomTabRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
