import './App.css';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';
import React,{useState} from "react";
import './DarkMode.css'
import './LightMode.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails/CountryDetails';

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
      <Router>
        <Navbar toggleAction={toggleTrueFalse} toggleName={toggleName}/>
          <Switch>
            <Route path="/" exact>
              <HeroSection bgColorSet={bgColorSet} colorSet={colorSet} />
            </Route>
            <Route path="/country/:countryId" component={CountryDetails}/>
            <Route>404 Page not found</Route>
          </Switch>
      </Router>
      </div>
  );
}

export default App;
