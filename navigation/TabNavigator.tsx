import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartStack, HomeStackNavigator, ProfileStack} from './StackNavigator';
import Cart from '../screens/Cart';
import {CartIcon, HomeIcon, ProfileIcon} from '../components/Icons';
import { COLORS } from '../components/Styles';

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
  const screenOptions = {
    tabBarActiveTintColor: COLORS.orange,
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarStyle: {
      height: 60,
    },
    tabBarItemStyle: {
      margin: 5,
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => <HomeIcon size={ focused ? 35 : 30 } color={focused ? COLORS.orange : "black"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => <ProfileIcon size={ focused ? 35 : 30 } color={focused ? COLORS.orange : "black"} />,
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({focused}) => <CartIcon size={ focused ? 35 : 30 } color={focused ? COLORS.orange : "black"} />,
        }}
      />
    </Tab.Navigator>
  );
}
