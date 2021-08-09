# What i learned in this chapter is promises : 
 ** How to write a promise
 ** How to handle error in promises using .then and .catch
 ** How to handle errors using try and catch with Async and await

# Promise is an object which can be returned async from and async function
# and it can be resolve or rejected

## If it is a function i can use async await with promises but never with useEffect 

<!-- Promise in useEffect  -->
useEffect(()=> {
    axios.get(`URL`)
    .then((response)=>  {
        const searchResult = response.data;
        getCountries(searchResult)
    }).catch((error)=> console.error(`Error : ${error}`))
})

<!-- Promises inside a function  -->

const regionHandler = async () => {
    await axios.get(`${URL}`)
    .then((response)=> {
        const searchResult = response.data;
        getCountries(searchResult)
    }).catch((error)=> console.error(`Error: ${error}`))
}