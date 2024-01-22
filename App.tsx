import {useEffect} from 'react';
import {AuthProvider} from './context/AuthContext';
import AuthTab from './screens/AuthTab';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <AuthProvider>
        <AuthTab />
      </AuthProvider>
      <Toast />
    </>
  );
}
export default App;
