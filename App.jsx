import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import {useEffect} from 'react'
import { LandingPage, LoginScreen } from './src/screens';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '155297987858-hq2t7lmbauaqtbq79g7irnqh6h35llfk.apps.googleusercontent.com';




export default function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);
  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
    <View>
      <LoginScreen />
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </View>
  );
}
