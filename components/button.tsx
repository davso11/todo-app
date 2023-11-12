import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MAIN } from "../constants/colors";

interface ButtonProps extends TouchableOpacityProps {
  rounded?: boolean;
}

export const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ style, rounded = true, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        style={[
          {
            backgroundColor: MAIN,
            borderRadius: rounded ? 99999 : 8,
            paddingVertical: 12,
            paddingHorizontal: 32,
            justifyContent: "center",
            alignItems: "center",
          },
          style,
        ]}
        {...props}
      />
    );
  }
);
