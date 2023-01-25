import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { RegisterScreen, LandingPage } from './src/screens';

export default function App() {
  return (
    <View>
      <RegisterScreen />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}
