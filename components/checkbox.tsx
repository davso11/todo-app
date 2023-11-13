import React from "react";
import BouncyCheckbox, {
  type IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import { Platform } from "react-native";
import { MAIN } from "../constants/styles";

interface CheckboxProps extends IBouncyCheckboxProps {}

export const Checkbox = React.forwardRef<BouncyCheckbox, CheckboxProps>(
  ({ style, ...props }, ref) => {
    const size = Platform.OS !== "web" ? 25 : 22;

    return (
      <BouncyCheckbox
        ref={ref}
        fillColor={MAIN}
        size={size}
        style={[
          {
            width: size,
            borderColor: MAIN,
            padding: 0,
          },
          style,
        ]}
        {...props}
      />
    );
  }
);
