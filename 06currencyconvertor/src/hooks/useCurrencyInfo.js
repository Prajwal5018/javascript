// function hello() {
//     return []
// } //custom hook example

import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@2023-12-31/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    },[currency])
    // return [data, setData]
    console.log(data);
    return data
    
}

export default useCurrencyInfo;