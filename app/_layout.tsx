import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { fr, registerTranslation } from "react-native-paper-dates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MAIN } from "../constants/styles";

const qc = new QueryClient();
registerTranslation("fr", fr);

function HomeLayout() {
  return (
    <QueryClientProvider client={qc}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="new"
            options={{
              headerTitle: "Nouvelle tâche",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: MAIN,
              },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default HomeLayout;
