import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AirportMap, LandingPage, LoginScreen, RegisterScreen } from './src/screens';

export default function App() {
  return (
    <View>
      {/* <LoginScreen /> */}
      {/* <LandingPage /> */}
      {/* <RegisterScreen /> */}
      <AirportMap/>
    </View>
  );
}
