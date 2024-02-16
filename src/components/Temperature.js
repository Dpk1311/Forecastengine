import "./temperature.css"

const Temperature=(prop)=>{
    const {cityData} = prop
    return(
        <div className="temp-container">
            <div>City : {cityData.name}</div>
            <div>Temperature : {cityData.main.temp}</div>
        </div>
    )
}

export default Temperature