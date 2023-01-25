import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AirportMap, LandingPage, LoginScreen } from './src/screens';

export default function App() {
  return (
    <View>
      {/* <LoginScreen /> */}
      {/* <LandingPage /> */}
      <AirportMap/>
    </View>
  );
}
