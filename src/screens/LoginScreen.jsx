import React from 'react'
import loginlogo from '../assets/images/loginlogo.png';
import gugl from '../assets/images/gugl.png';
import outlok from '../assets/images/outlook.png';
import fejs from '../assets/images/fejs.png';
import '../assets/styles/_login.css';

function LoginScreen( ) {
  return (<>
    <div className='mainmain'>
      <img src={loginlogo} alt="loginlogo" className='loginlogo'/>
      <div>
        <h1>Log in</h1>
        <h6>Don't have an account? <a style={{color:"orange"}}>Create account</a></h6>
      </div>

      <div>
        <h6>E-mail or Username</h6>
        <input type="email" />
      </div>

      <div>
        <h6>Password</h6>
        <input type="password" />
        <h6><span style={{color:"orange"}}>Forgot password?</span></h6>
      </div>

      <div>
        <button type="button">Finish</button>
      </div>

      <div>
        <h6>Or log in with...</h6>
        <img src={fejs} alt="loginlogo"/>
        <img src={outlok} alt="loginlogo"/>
        <img src={gugl} alt="loginlogo"/>
      </div>
      <div>
        <h6>In a rush?<span style={{color:"orange"}}>Quick Start</span></h6>
      </div>
    </div>
  </>)
}

export {LoginScreen};