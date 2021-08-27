import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';


const CountryDetails = () => {
    let {countryId} = useParams();
    const [countriesDetails, setCountriesDetails] = useState([]);
    console.log(countriesDetails);

    useEffect(()=> {
        try {
            const fetchDetails = async () => {
                const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
                const result = await response.data;
                console.log(result);
                setCountriesDetails(result);
               }
               fetchDetails();
        } catch(error) {
            console.log(`Error ${error}`)
        }
        
    },[])

    
    

    return (
        <div className="sectionDetails">
            <h3>{BordersArray}</h3>
        </div>

    )
}

export default CountryDetails
