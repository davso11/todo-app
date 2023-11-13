import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
  ViewProps,
} from "react-native";
import { MAIN } from "../constants/styles";

interface ScreenLoaderProps extends ViewProps {
  loaderProps?: ActivityIndicatorProps;
}

export function ScreenLoader({
  style,
  loaderProps,
  ...viewProps
}: ScreenLoaderProps) {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
      {...viewProps}
    >
      <ActivityIndicator size={20} color={MAIN} {...loaderProps} />
    </View>
  );
}
