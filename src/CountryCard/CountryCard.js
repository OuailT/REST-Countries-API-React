import React from 'react';
import { Link } from 'react-router-dom';


const CountryCard = ({countries, colorSet, bgColorSet}) => {
    return (
        <>
        {countries.map((country)=> {
         const {alpha3Code, flag, population, region, capital, name } = country ;
            return (
            <div className="country-card" key={alpha3Code}>
                <Link to={`/country/${alpha3Code}`}>
                    <div className="country-img">
                        <img src={flag} alt={name}/>
                    </div>

                    <div className="country-info">
                        <h2>{name}</h2>
                        <div className="country-details">
                            <h3>Population : <span>{population}</span> </h3>
                            <h3>Region : <span>{region}</span></h3>
                            <h3>Capital : <span>{capital}</span></h3>
                        </div>
                    </div>
                 </Link>
            </div>
            
            )

        })}
        </>
    )
}

export default CountryCard
