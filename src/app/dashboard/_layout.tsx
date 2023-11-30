import { Stack, Tabs } from "expo-router";

export default function DashboardRoot() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Tabs />
    </>
  );
}
