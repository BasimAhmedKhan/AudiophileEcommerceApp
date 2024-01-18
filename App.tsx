import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthTab from './screens/AuthTab';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {

  useEffect(()=>{
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <AuthTab />
    </AuthProvider>
  );
}
export default App;
