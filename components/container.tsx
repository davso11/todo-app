import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type ContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Container({ children, style }: ContainerProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});
