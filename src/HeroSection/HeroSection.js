import React,{useState, useEffect} from 'react'
import CountryCard from '../CountryCard/CountryCard';
import axios from 'axios';
import './HeroSection.css'


const URL = "https://restcountries.eu/rest/v2?fields=alpha3Code;name;population;region;capital;flag";


const HeroSection = () => {
    const [countries, getCountries] = useState([])
    console.log(countries)

    useEffect(()=> {
        const GetData = async () => {
            const response = await axios.get(`${URL}`);
            const result = await response.data;
            getCountries(result);
        }
        GetData();
    }, [])

    return (
        <section className="banner">
            <div className="grid-container">
                <CountryCard countries = {countries} />
            
            

            </div>
        </section>
    )
}

export default HeroSection

