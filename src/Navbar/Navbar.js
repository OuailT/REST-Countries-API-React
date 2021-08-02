import React, {useState} from 'react'
import './Navbar.css'
import { RiMoonLine } from 'react-icons/ri';
import { FiSun} from 'react-icons/fi';

const Navbar = ({toggleAction, toggleName}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <header>
            <h2>Where in the world ?</h2>
            <div className="mode">
                {isActive ? 
                <button className="modeBtn" onClick={()=> {toggleAction(); setIsActive(!isActive);}}>
                    <FiSun/>
                </button> : <button className="modeBtn" onClick={()=> {toggleAction(); setIsActive(!isActive);}}>
                    <RiMoonLine/> 
                </button> }
                <h3>{toggleName}</h3>
            </div>
        </header>
    )
}

export default Navbar
