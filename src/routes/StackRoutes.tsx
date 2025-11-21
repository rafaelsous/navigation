import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
