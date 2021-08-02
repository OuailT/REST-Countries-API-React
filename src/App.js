import './App.css';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import React,{useState} from "react";
import './DarkMode.css'
import './LightMode.css'

function App() {
  //create a state to toggle the classes
  const [isToggled, setIsToggled] = useState(false);
  
  //variables with conditions to toggle 
  const toggleModeClass = isToggled ? "DarkMode" : "LightMode"
  const toggleName = isToggled ? "LightMode" : "DarkMode"
  //bgColorSet and colorSet is for changing the color of the select Comp
  const bgColorSet = isToggled ? "#2b3844" : "#fff"
  const colorSet = isToggled ? "#fff" : "#2b3844"

  //function to toggle the state
  const toggleTrueFalse = () => setIsToggled(!isToggled);

  return (
    <div className={`App ${toggleModeClass}`} >
    <Navbar toggleAction={toggleTrueFalse} toggleName={toggleName}/>
    <HeroSection bgColorSet={bgColorSet} colorSet={colorSet} />
    </div>
  );
}

export default App;
