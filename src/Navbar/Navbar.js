import React from 'react'
import './Navbar.css'
import { RiMoonLine } from 'react-icons/ri';
// import { FiSun} from 'react-icons/fi';

const Navbar = () => {
    return (
        <header>
            <h2>Where in the world ?</h2>
            <div className="mode">
                <button className="modeBtn">
                    <RiMoonLine/>
                </button>
                <h3>Dark mode</h3>
            </div>
        </header>
    )
}

export default Navbar
