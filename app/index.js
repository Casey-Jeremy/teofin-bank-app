// File: app/index.js

import { Redirect } from 'expo-router';

// This is the app's entry point. It immediately redirects to the onboarding screen.
export default function Index() {
  return <Redirect href="./Onboarding" />;
}