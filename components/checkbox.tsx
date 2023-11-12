import React from "react";
import BouncyCheckbox, {
  type IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";
import { MAIN } from "../constants/colors";

interface CheckboxProps extends IBouncyCheckboxProps {}

export const Checkbox = React.forwardRef<BouncyCheckbox, CheckboxProps>(
  ({ style, ...props }, ref) => {
    return (
      <BouncyCheckbox
        ref={ref}
        fillColor={MAIN}
        size={22}
        style={[
          {
            width: 22,
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
