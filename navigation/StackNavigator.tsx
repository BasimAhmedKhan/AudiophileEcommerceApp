import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Headphones from "../screens/Headphones";
import Earphones from "../screens/Earphones";
import Speakers from "../screens/Speakers";
import { LogoIcon } from "../components/Icons";

const Stack = createStackNavigator();

const screenOptionStyles: any = {
    headerStyle: {
        backgroundColor: '#191919',
    },
    headerTitleAlign: "center",
    headerTintColor: "white",
    headerBackTitle: "Back",
};

function HomeStackNavigator(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles} >
            <Stack.Screen name='StackHome' component={Home} options={{ headerTitle: LogoIcon }} />
            <Stack.Screen name='Product' component={Product} />
        </ Stack.Navigator>
    );
}

function HeadphonesStackNavigator(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen name='StackHeadphones' component={Headphones} options={{ title: 'Headphones' }} />
            <Stack.Screen name='Product' component={Product} />
        </Stack.Navigator>
    );
}

function EarphonesStackNavigator(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen name='StackEarphones' component={Earphones} options={{ title: 'Earphones' }} />
            <Stack.Screen name='Product' component={Product} />
        </Stack.Navigator>
    );
}

function SpeakersStackNavigator(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen name='StackSpeakers' component={Speakers} options={{ title: 'Speakers' }} />
            <Stack.Screen name='Product' component={Product} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, HeadphonesStackNavigator, SpeakersStackNavigator, EarphonesStackNavigator };