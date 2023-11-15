import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MAIN } from "../constants/styles";

const qc = new QueryClient();

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
