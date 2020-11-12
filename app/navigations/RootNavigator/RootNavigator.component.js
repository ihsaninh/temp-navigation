import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../../screens/Login.screen';
import Splash from '../../screens/Splash.screen';
import ForgotPassword from '../../screens/ForgotPassword.screen';
import Home from '../../screens/Home.screen';
import Merchant from '../../screens/Merchant.screen';
import Faq from '../../screens/Faq.screen';
import Inbox from '../../screens/Inbox.screen';
import Account from '../../screens/Account.screen';
import DailyTask from '../../screens/DailyTask.screen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Merchant" component={Merchant} />
      <Tab.Screen name="Faq" component={Faq} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="DailyTask" component={DailyTask} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
