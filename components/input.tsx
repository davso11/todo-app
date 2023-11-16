import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { forwardRef, useState } from "react";

interface InputProps extends TextInputProps {
  required?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ style, required = false, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <TextInput
        ref={ref}
        style={[
          {
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderRadius: 6,
            borderColor: "#DADADA",
          },
          style,
        ]}
        placeholderTextColor="#9A9A9A"
        numberOfLines={1}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({});
