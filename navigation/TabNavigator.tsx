import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EarphonesStackNavigator, HeadphonesStackNavigator, HomeStackNavigator, SpeakersStackNavigator } from "./StackNavigator";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element{
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Headphones" component={HeadphonesStackNavigator} />
            <Tab.Screen name="Speakers" component={SpeakersStackNavigator} />
            <Tab.Screen name="Earphones" component={EarphonesStackNavigator} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    );
}