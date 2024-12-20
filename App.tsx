import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all screen components
import HomePage from './src/screens/HomePage';
import LoginSignupPage from './src/screens/LoginSignupPage';
import ProfilePage from './src/screens/ProfilePage';
import SendMoneyPage from './src/screens/SendMoneyPage';
import LoginPage from './src/screens/LoginPage';
import PaymentConfirmationPage from './src/screens/PaymentConfirmationPage';
import ScanQRPage from './src/screens/ScanQRPage';
import SignUpPage from './src/screens/SignUpPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginSignup"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginSignup" component={LoginSignupPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="SendMoney" component={SendMoneyPage} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationPage} />
        <Stack.Screen name="ScanQR" component={ScanQRPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
