import { Tabs } from "expo-router";
import { theme } from "../../constants";
import { svg } from "../../svg";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // You can hide the header here if you have custom headers in each screen
        tabBarShowLabel: false, // Hides the default text labels
        tabBarStyle: {
          backgroundColor: theme.COLORS.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          height: 68, // Adjust height as needed
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard" // This corresponds to dashboard.js
        options={{
          tabBarIcon: ({ focused }) => <svg.ReportSvg focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="Deposits" // This corresponds to deposits.js
        options={{
          tabBarIcon: ({ focused }) => <svg.SafeDepositSvg focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="Loans" // This corresponds to loans.js
        options={{
          tabBarIcon: ({ focused }) => <svg.WalletSvg focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="Notifications" // This corresponds to notifications.js
        options={{
          tabBarIcon: ({ focused }) => (
            <svg.NotificationSvg focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="More" // This corresponds to more.js
        options={{
          tabBarIcon: ({ focused }) => <svg.MoreSvg focused={focused} />,
        }}
      />
    </Tabs>
  );
}