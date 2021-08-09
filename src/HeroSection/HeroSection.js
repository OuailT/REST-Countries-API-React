import React,{useState, useEffect} from 'react'
import CountryCard from '../CountryCard/CountryCard';
import axios from 'axios';
import Select from 'react-select'
import './HeroSection.css'


const URL = "https://restcountries.eu/rest/v2?fields=alpha3Code;name;population;region;capital;flag";


const options = [
    {value : "", label : "Filter by Region"},
    {value : "Africa", label : "Africa"},
    {value : "America", label : "America"},
    {value : "Asia", label : "Asia"},
    {value : "Oceania", label : "Oceania"},
    {value : "Europe", label : "Europe"}
]




const HeroSection = ({bgColorSet, colorSet}) => {
    const [countries, getCountries] = useState([])
    const [valueSelected, setValueSelected] = useState(null)
    const [searchTerm, setSearchTerm] = useState("") // to get the value from the country.name
    const [searchResultCountry, setSearchResultCountry] = useState([]) // to update the data countries

    //To get the region Using Async await
    const regionHandler = async (valueSelected) => {
        //To store the value selected
        setValueSelected(valueSelected);
        try {
            if(valueSelected.value) {
            const sendRequest = await axios.get(`https://restcountries.eu/rest/v2/region/${valueSelected.value}`);
            const searchResults = await sendRequest.data;
            getCountries(searchResults)

            } 
            else {
                const sendIt = await axios.get(`${URL}`)
                const searchResult = await sendIt.data;
                getCountries(searchResult);
            }

        } catch(error) {
            console.error(`Error : ${error}`)
        }
    }

    // // Region Handler using promises
    // const RegionSelect = async (valueSelected) => {
    //     setValueSelected(valueSelected)
    //     if(valueSelected.value) {
    //         await axios.get(`https://restcountries.eu/rest/v2/region/${valueSelected.value}`)
    //         .then((response)=> {
    //             const searchResult = response.data;
    //             getCountries(searchResult);
    //         }).catch((error)=> console.error(`Error : ${error}`));
    //     } else {
    //         await axios.get(`${URL}`)
    //         .then((response)=> {
    //             const searchResult = response.data;
    //             getCountries(searchResult)
    //         }).catch((error)=> console.error(`Error : ${error}`));
    //     }
    // }

    // To Get the countries using async await
    useEffect(()=> {
        try {
            const GetData = async () => {
                const response = await axios.get(`${URL}`);
                const result = await response.data;
                getCountries(result);
            }
            GetData();

        } catch(error) {
            console.error(`Error : ${error}`)
        }
    }, [])



   //Getting the countries using Promises
    // useEffect(()=> {
    //     axios.get(`${URL}`)
    //     .then((response)=> {
    //         const result = response.data;
    //         getCountries(result)
    //     }).catch((error)=> console.error(`Error : ${error}`))
    // }, [])


    useEffect(()=> {
    const searchResult = countries.filter((country)=>  country.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResultCountry(searchResult);
    },[searchTerm, countries])
    
    const customStyles = {
        //control is the whole input
        //singleValue is the value clicked
        control: () => ({
            cursor: "pointer",
            borderRadius: "5px",
            width: "200px",
            height: "56px",
            backgroundColor: bgColorSet,
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0 2px 9px rgb(0 0 0 / 5%)",
        }), 
        singleValue: ()=> ({
            color : colorSet,
            paddingLeft:"12px"
        }), 
        indicatorSeparator: ()=> ({
            display: "none"
        }),

        placeholder: ()=> ({
            color: colorSet,
            fontSize:"13px",
            paddingLeft:"12px",
        }),

        menu: () => ({
            backgroundColor: bgColorSet,
            color: colorSet,
            position: "absolute",
            width: 200,
            marginTop: "4px",
            borderRadius: "5px",
            zIndex : 1000
        })

    }

    return (
        <section className="countryContainer">
             <nav className="country-nav">

            <div className="searchBar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="search"><path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484"></path></g></svg>
             <input type="text"
                    placeholder="Search for a country..."
                    onChange={(e)=> setSearchTerm(e.target.value)}/>
                    
            </div>
            <Select  options={options} value={valueSelected} 
                        defaultValue={{value : "", label : "Filter by Region"}}
                        onChange={regionHandler} styles={customStyles}/>
            </nav>
          
            <div className="grid-container">
                <CountryCard countries = {searchResultCountry} />
            </div>
        </section>
    )
}

export default HeroSection

