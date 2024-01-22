import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Headphones from '../screens/Headphones';
import Earphones from '../screens/Earphones';
import Speakers from '../screens/Speakers';
import {LogoIcon} from '../components/Icons';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

const screenOptionStyles: any = {
  headerStyle: {
    backgroundColor: '#191919',
  },
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

function LoginStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: LogoIcon}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerTitle: LogoIcon}}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name="StackProfile"
        component={Profile}
        options={{headerTitle: LogoIcon}}
      />

    </Stack.Navigator>
  );
}

function CartStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name="CART"
        component={Cart}
      />

    </Stack.Navigator>
  );
}

function HomeStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={screenOptionStyles}>
      <Stack.Screen
        name="StackHome"
        component={Home}
        options={{headerTitle: LogoIcon}}
      />
      <Stack.Screen
        name="Headphones"
        component={Headphones}
        options={{title: 'Headphones'}}
      />
      <Stack.Screen
        name="Speakers"
        component={Speakers}
        options={{title: 'Speakers'}}
      />
      <Stack.Screen
        name="Earphones"
        component={Earphones}
        options={{title: 'Earphones'}}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

export {HomeStackNavigator, LoginStackNavigator, ProfileStack, CartStack};
