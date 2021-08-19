import React,{useEffect, useState} from "react";
import './styles.css'


const Weather = ()=>{
    const [city,setCity] = useState(null);
    const [search,setSearch]= useState("mumbai")

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=45823c4393035ef644ed112c1cd0a68a`;
            const response = await fetch(url);
            const resjson = await response.json() ;
            // console.log(resjson)  
            setCity(resjson.main)
         };
            fetchApi();
            
    })


    return(
    <>
         <div className="container">
              <div className="search">
              <h1>Know The Temp Here </h1>
                 <input type="search" className="inp" onChange={(event)=>{setSearch(event.target.value)}}/>
                 {
            !city?(
                <h1>Enter Valid City </h1>
            ):(
                <div>
                    <h1>{search}</h1>
                    <h1>{city.temp} degree celcius</h1>
                </div>
            )
        }
            
        </div>
       

</div>
    </>
    )}

export default Weather;