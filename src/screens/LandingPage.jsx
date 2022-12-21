import React from 'react'
import { View, Text } from 'react-native';
import background from '../assets/images/background.jpg';
import logotype from '../assets/images/logotype.png';
import '../assets/styles/_main.scss';
import { ButtonElement } from '../components/ButtonElement';

function LandingPage() {
  return (
    <div style = {{backgroundImage: `url(${background})`}} className = "landing-page-background">
        <img src = {logotype} alt = "" className = "landing-page-logotype"/>
        <ButtonElement text = "Get started" className={"button-main"}/>
    </div>
  )
}

export {LandingPage};