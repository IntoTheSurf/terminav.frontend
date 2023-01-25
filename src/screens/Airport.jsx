import React from 'react'
import '../assets/styles/_airport.css';
import '../assets/styles/_fonts.css';
import logo from '../assets/images/mainscreen/logo.png';
import backbutton from '../assets/images/mainscreen/backbutton.png';
import homebutton from '../assets/images/mainscreen/homebutton.png';
import pinbutton from '../assets/images/mainscreen/pinbutton.png';
import mapbutton from '../assets/images/mainscreen/mapbutton.png';
import helpbutton from '../assets/images/mainscreen/helpbutton.png';
import options from '../assets/images/mainscreen/optionsbutton.png';
import az from '../assets/images/airport/az.png';
import findme from '../assets/images/airport/findme.png';
import atena from '../assets/images/airport/atena.png';
import amsterdam from '../assets/images/airport/amsterdam.png';
import berlin from '../assets/images/airport/berlin.png';
import cologne from '../assets/images/airport/cologne.png';


function Airport() {
  return (<>
    <div className="background">
        <div className='logomain'>
          <img src={backbutton} alt="home" className='backbutton'/>
          <img src={logo} alt="home" className='logo'/>
        </div>

        <div className="divinput">
            <div className="naslov">Where are you flying from?</div>
            <input type="text" className='traziaerodrom'></input>
        </div>
        
        <div className="botuni">
            <div className="supported">Supported Airports</div>
            <img src={az} alt="az"/>
            <img src={findme} alt="find me"/>
        </div>
        
        <div className="airports">
            <div className="slovo">A</div>
            <img src={atena} alt="atena"/>
            <img src={amsterdam} alt="amsterdam"/>
            <div className="slovo">B</div>
            <img src={berlin} alt="berlin"/>
            <div className="slovo">C</div>
            <img src={cologne} alt="cologne"/>
            <div className="slovo">D</div>
        </div>
    </div>
    <div className='menuMain'>
        <div className='home'>
          <img src={homebutton} alt="home"/>
        </div>
        <div className='pin'>
          <img src={pinbutton} alt="pin"/>
        </div>
        <div className='mapBorder'>
          <img src={mapbutton} alt="map" className='mapp'/>
        </div>
        <div className='help'>
          <img src={helpbutton} alt="help"/>
        </div>
        <div className='options'>
          <img src={options} alt="options"/>
        </div>
    </div>

  </>)
}

export {Airport};