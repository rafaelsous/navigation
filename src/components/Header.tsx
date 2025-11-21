import { View } from "react-native";

export function Header({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
}
