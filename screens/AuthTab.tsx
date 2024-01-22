import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';
import {LoginStackNavigator} from '../navigation/StackNavigator';
import TabNavigator from '../navigation/TabNavigator';
import { ActivityIndicator, View } from 'react-native';
import { COLORS, gStyles } from '../components/Styles';

function AuthTab(): JSX.Element {

  const {isLogin, isLoading}: any = useAuth();

  if(isLoading){
    return(
      <View style={gStyles.center}>
        <ActivityIndicator size={"large"} color={COLORS.orange}/>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!isLogin ? <LoginStackNavigator /> : <TabNavigator />}
    </NavigationContainer>
  );
}

export default AuthTab;
