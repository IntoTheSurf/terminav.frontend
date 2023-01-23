import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LandingPage } from './src/screens';
//import './src/assets/styles/_index.scss';

export default function App() {
  return (
    <View>
      <LandingPage />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}
