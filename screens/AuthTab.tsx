import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import {LoginStackNavigator} from '../navigation/StackNavigator';
import TabNavigator from '../navigation/TabNavigator';

function AuthTab(): JSX.Element {
  const {isLogin}: any = useAuth();
  return (
    <NavigationContainer>
      {isLogin ? <LoginStackNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
}

export default AuthTab;
