import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LandingPage, RegisterScreen } from './src/screens';
import './src/assets/styles/_index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <View>
      {/*<RegisterScreen/>*/}
      <LandingPage />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}
