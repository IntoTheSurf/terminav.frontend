import React from 'react'
import { View, Text } from 'react-native';
import background from '../assets/images/background.jpg';
import logotype from '../assets/images/logotype.png';
import '../assets/styles/_main.scss';
import { ButtonElement } from '../components/ButtonElement';

function LandingPage() {
  return (
    <div style = {{backgroundImage: `url(${background})`}}>
        <img src = {logotype} alt = "" />
        <ButtonElement text = "Get started"/>
    </div>
  )
}

export {LandingPage};