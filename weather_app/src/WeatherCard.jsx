import './style.css'
import { useEffect, useState } from 'react';

const WeatherCard = ({ weatherData }) => {

    const [weatherState, setWeatheState] = useState("");

    useEffect(() => {
        if (weatherData.weather[0].main) {
            switch (weatherData.weather[0].main) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherData.weather[0].main]);

    return (
        <article className='widget'>
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{weatherData.main.temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        {weatherData.weather[0].main}
                    </div>
                    <div className="place">
                        {weatherData.name}, {weatherData.sys.country}
                    </div>
                </div>
            </div>
            <div className="date">
                {new Date().toLocaleString()}
            </div>
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className="wi wi-sunset"></i>
                        </p>
                        <p className="extra-info-leftside">
                            {new Date(weatherData.sys.sunset * 1000).getHours()}:{new Date(weatherData.sys.sunset * 1000).getMinutes()} <br />
                            Sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className="wi wi-humidity"></i>
                        </p>
                        <p className="extra-info-leftside">
                            {weatherData.main.humidity} <br />
                            Humidity
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-barometer"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {weatherData.main.pressure} <br />
                            Pressure
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {weatherData.wind.speed} <br />
                            Speed
                        </p>
                    </div>
                </div>


            </div>
        </article>
    )
}

export default WeatherCard