import React from 'react'


const CountryCard = ({countries}) => {
    return (
        <>
        {countries.map((country)=> {
            // {alpha3Code, flag, population, region, capital, name } = country
            return (

                <div className="country-card" key={country.alpha3Code}>
                <div className="country-img">
                    <img src={country.flag} alt={country.name}/>
                </div>

                <div className="country-info">
                    <h2>{country.name}</h2>
                    <div className="country-details">
                        <h3>Population : <span>{country.population}</span> </h3>
                        <h3>Region : <span>{country.region}</span></h3>
                        <h3>Capital : <span>{country.capital}</span></h3>
                    </div>
                </div>
         </div>

            )

        })}
        </>
    )
}

export default CountryCard
