import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
  ViewProps,
} from "react-native";
import { MAIN } from "../constants/styles";

interface LoaderProps extends ActivityIndicatorProps {}

export function Loader({ size, ...props }: LoaderProps) {
  return <ActivityIndicator color={MAIN} {...props} />;
}

interface ScreenLoaderProps extends ViewProps {
  loaderProps?: LoaderProps;
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
      <Loader {...loaderProps} />
    </View>
  );
}
