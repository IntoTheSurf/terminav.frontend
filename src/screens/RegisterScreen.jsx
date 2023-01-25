import React from 'react'
import { View, Text, ScrollView, Keyboard, SafeAreaView } from 'react-native';
import Input from '../components/registerInput';
import { ButtonElement } from '../components/ButtonElement';
import logotype from '../assets/images/loginlogo.png';
import '../assets/styles/_login.css';
import '../assets/styles/_buttons.css';

const RegisterScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    validatepassword: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email){
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError('Invalid input!', 'email');
      isValid = false;
    }

    if(!inputs.fullname){
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if(!inputs.username){
      handleError('Please input username', 'username');
      isValid = false;
    }

    if(!inputs.password){
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 7) {
      handleError('Min password length of 7', 'password');
    }

    if(inputs.validatepassword != inputs.password){
      handleError('Passwords do not match!', 'validatepassword');
      isValid = false;
    }

    if(isValid){
      finish();
    }
  };

  const finish = () => {
      navigation.navigate('LoginScreen');
  }

    const handleOnChange = (text, input) => {
      setInputs((prevState)=>({...prevState, [input]: text}));
    };

    const handleError = (errorMessage, input)=>{
      setErrors((prevState)=>({...prevState,[input]:errorMessage}))
    }

  return (
    <>
        <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 50,
              paddingHorizontal: 20,
            }}>
        <img src = {logotype} alt = "" className = 'loginlogo'/>
        <Text style={{color: "black",fontSize: 40}}>Register</Text>
        <View style={{marginVertical: 20}}>
         <Input
          onFocus={() => {
            handleError(null, 'fullname');
          }}
          onChangeText={text => handleOnChange(text, 'fullname')}
          label="Full name" 
          error={errors.fullname}        
          />
          <Input
          onFocus={() => {
            handleError(null, 'username');
          }}
          onChangeText={text => handleOnChange(text, 'username')}
          label="Username"
          error={errors.username}
          />
          <Input
          onFocus={() => {
            handleError(null, 'email');
          }}
          onChangeText={text => handleOnChange(text, 'email')}
          label="E-mail"
          error={errors.email}         
          />
          <Input
          onFocus={() => {
            handleError(null, 'password');
          }}
          onChangeText={text => handleOnChange(text, 'password')}
          label="Password"
          error={errors.password}        
          password
          />
          <Input
          onFocus={() => {
            handleError(null, 'validatepassword');
          }}
          onChangeText={text => handleOnChange(text, 'validatepassword')}
          label="Validate password"
          error={errors.validatepassword}   
          vpassword       
          />
          <ButtonElement text = "Finish" className="btn--main" onPress={validate}/>
          <Text 
          onPress={() => navigation.naviate('LoginScreen')}
          style={{
            color: "black", 
            marginVertical: 20, 
            textAlign: 'center',
            fontSize: 18,
            }}>
              Already have an account? Log in</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    </>
  )
}


export default {RegisterScreen};