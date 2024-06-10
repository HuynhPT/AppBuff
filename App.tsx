import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreens from './src/screens/splash/splash';
import HomeScreens from './src/screens/home/home';
import AuthScreens from './src/screens/auth/login/auth';
import RegisterScreens from './src/screens/auth/register/register';
import ForgotScreens from './src/screens/auth/forgot/forgot';
import PaymentScreens from './src/screens/payment/payment';
import HistoryPaymentScreens from './src/screens/payment/history/history';
import ProfileScreens from './src/screens/profile/profile';
import CartScreens from './src/screens/cart/cart';
export enum routerName {
  splash = 'splash',
  auth = 'auth',
  home = 'home',
  service = 'service',
  forgot = 'forgot',
  register = 'register',
  payment = 'payment',
  historyPayment = 'historyPayment',
  profile = 'profile',
  cart = 'cart',
}
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={routerName.splash}>
        <Stack.Screen name={routerName.splash} component={SplashScreens} />
        <Stack.Screen name={routerName.auth} component={AuthScreens} />
        <Stack.Screen name={routerName.register} component={RegisterScreens} />
        <Stack.Screen name={routerName.forgot} component={ForgotScreens} />

        <Stack.Screen name={routerName.home} component={HomeScreens} />
        <Stack.Screen name={routerName.payment} component={PaymentScreens} />
        <Stack.Screen
          name={routerName.historyPayment}
          component={HistoryPaymentScreens}
        />

        <Stack.Screen name={routerName.cart} component={CartScreens} />
        <Stack.Screen name={routerName.profile} component={ProfileScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
