import React from 'react'
import { View, Text } from 'react-native';
import background from '../assets/images/background.jpg';
import logotype from '../assets/images/logotype.png';

function LandingPage() {
  return (
    <div style = {{backgroundImage: `url(${background})`}}>
        <img src = {logotype} alt = "" />
    </div>
  )
}

export {LandingPage};