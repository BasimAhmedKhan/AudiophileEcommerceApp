import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EarphonesStackNavigator, HeadphonesStackNavigator, HomeStackNavigator, SpeakersStackNavigator } from "./StackNavigator";
import Cart from "../screens/Cart";
import { CartIcon, EarphoneIcon, HeadphoneIcon, HomeIcon, SpeakerIcon } from "../components/Icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator(): JSX.Element {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{
                tabBarIcon: () => (<HomeIcon size={30} color="black" />),
            }} />
            <Tab.Screen name="Headphones" component={HeadphonesStackNavigator} options={{
                tabBarIcon: () => (<HeadphoneIcon size={30} color="black" />),
            }} />
            <Tab.Screen name="Speakers" component={SpeakersStackNavigator} options={{
                tabBarIcon: () => (<SpeakerIcon size={30} color="black" />),
            }} />
            <Tab.Screen name="Earphones" component={EarphonesStackNavigator} options={{
                tabBarIcon: () => (<EarphoneIcon size={30} color="black" />),
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: () => (<CartIcon size={30} color="black" />),
            }} />
        </Tab.Navigator>
    );
}