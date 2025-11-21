import { Text, TextProps } from "react-native";

export function Titlte({ children, ...rest }: Readonly<TextProps>) {
  return (
    <Text style={{ fontSize: 22, fontWeight: 700 }} {...rest}>
      {children}
    </Text>
  );
}
