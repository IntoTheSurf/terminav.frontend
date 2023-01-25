import React from 'react'
import '../assets/styles/_mainscreen.css';
import '../assets/styles/_fonts.css';
import homebutton from '../assets/images/mainscreen/homebutton.png';
import pinbutton from '../assets/images/mainscreen/pinbutton.png';
import mapbutton from '../assets/images/mainscreen/mapbutton.png';
import helpbutton from '../assets/images/mainscreen/helpbutton.png';
import options from '../assets/images/mainscreen/optionsbutton.png';
import logo from '../assets/images/mainscreen/logo.png';
import backbutton from '../assets/images/mainscreen/backbutton.png';
import chooseflight from '../assets/images/mainscreen/chooseflight.png';
import arrivalsbutton from '../assets/images/mainscreen/arrivalsbutton.png';
import departuresbutton from '../assets/images/mainscreen/departuresbutton.png';
import services from '../assets/images/mainscreen/services.png';
import infoflight from '../assets/images/mainscreen/infoflight.png';
import loader from '../assets/images/mainscreen/loader.gif';

const imageRef=React.createRef();
const loaderRef=React.createRef();

var i = 0;
function handleChange(event) {
  i++;
  if (i == 6) {
    loaderRef.current.className = "loader";
    sleep(1500).then(() => {
      loaderRef.current.className = "loaderof";
      imageRef.current.src = infoflight;
    });
  }
}
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

function MainScreen() {
  return (<>
    <div className='wrapper'>
      <div className='floatingMain'>

        <div className='logomain'>
          <img src={backbutton} alt="home" className='backbutton'/>
          <img src={logo} alt="home" className='logo'/>
        </div>

        <div className='chooseFlightNum'>
          <input type="text" className='inputFlightNum' onChange={handleChange}/>
          <img src={chooseflight} alt="flight" className='width100' ref={imageRef}/>
        </div>

        <div>
          <div className='choosenAirportText'>BERLIN BRANDENBURG AIRPORT</div>
          <div>
            <img src={departuresbutton} alt="departures" className='departures'/>
            <img src={arrivalsbutton} alt="arrivals" className='arrivals'/>
          </div>
        </div>
        <div>
          <select name="terminals" className='terminalselect'>
            <option value="A">Terminal A</option>
            <option value="B">Terminal B</option>
            <option value="C">Terminal C</option>
            <option value="D">Terminal D</option>
          </select>
        </div>
        <div>
          <img src={services} alt="services" className='width100'/>
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
          <img src={mapbutton} alt="map" className='map'/>
        </div>
        <div className='help'>
          <img src={helpbutton} alt="help"/>
        </div>
        <div className='options'>
          <img src={options} alt="options"/>
        </div>
      </div>
    </div>
    <div className='loaderof' ref={loaderRef}>
      <img src={loader} className='loadergif'/>
    </div>
  </>)
}
export {MainScreen};