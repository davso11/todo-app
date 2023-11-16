import { StyleSheet, Text, TextProps } from "react-native";

interface LabelProps extends TextProps {
  required?: boolean;
}

export function Label({ style, required = false, ...props }: LabelProps) {
  return (
    <Text>
      <Text {...props} />
      {required ? <Text style={styles.required}>*</Text> : null}
    </Text>
  );
}

const styles = StyleSheet.create({
  required: {
    color: "red",
    marginLeft: 1,
  },
});
