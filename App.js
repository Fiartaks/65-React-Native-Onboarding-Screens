import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./OnboardingScreen"; 
import LoginScreen from "./LoginScreen"; 
import HomeScreen from "./HomeScreen"; 
import MoreInfoScreen from "./MoreInfoScreen"; // Bu bileşenin tanımlandığından emin olun

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoreInfo" component={MoreInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}