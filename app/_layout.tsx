import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* This makes the system status bar (time, battery) visible. */}
      {/* 'auto' style will automatically set the icons to light or dark. */}
      <StatusBar style="auto" />

      <Stack
        // This object configures all the screens in your app.
        screenOptions={{
          // This specific option hides the header on all screens.
          headerShown: false,
        }}
      />
    </>
  );
}