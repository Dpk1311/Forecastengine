import "./temperature.css"

const Temperature=({cityData , cityName})=>{
    if(!cityData) return
    return(
        <div className="temp-container">
            <div>City : {cityName}</div>
            <div>Temperature : {cityData.main.temp} °C</div>
        </div>
    )
}

export default Temperature