import React from 'react'
import '../assets/styles/_map.css';
import { InputGroup } from 'react-bootstrap';

function AirportMap() {
  return (
    <div className='map-wrapper'>
        <div className='search-bar--wrapper'>
            <input type="text" className='search-bar' placeholder='Search'/>
            <img src={require("../assets/images/map/search-icon.png")} alt="" className='search-bar__icon'/>
        </div>
        <div className='map'>
            <img src={require("../assets/images/map/map.png")} alt="" className='map__image'/>
        </div>
        <div className='actions-bar'>
            <div className='actions-bar__sub-act'>
                <img src={require("../assets/images/map/restaurant-icon.png")} alt="" className="actions-bar__sub-act__action" />
                <img src={require("../assets/images/map/store-icon.png")} alt="" className="actions-bar__sub-act__action" />
                <img src={require("../assets/images/map/gate.png")} alt="" className="actions-bar__sub-act__action--my-gate" />
                <img src={require("../assets/images/map/discount-icon.png")} alt="" className="actions-bar__sub-act__action" />
                <img src={require("../assets/images/map/position-icon.png")} alt="" className="actions-bar__sub-act__action" />
            </div>

            <div className='actions-bar__main-act'>
                <img src={require("../assets/images/map/home-icon.png")} alt="" className="actions-bar__main-act__action" />
                <img src={require("../assets/images/map/pin-icon.png")} alt="" className="actions-bar__main-act__action" />
                <div className='active-action--wrapper'>
                    <img src={require("../assets/images/map/map-icon.png")} alt="" className="actions-bar__main-act__action--active" />
                </div>
                <img src={require("../assets/images/map/person-icon.png")} alt="" className="actions-bar__main-act__action" />
                <img src={require("../assets/images/map/settings-icon.png")} alt="" className="actions-bar__main-act__action" />
            </div>
        </div>
    </div>
  )
}

export { AirportMap };