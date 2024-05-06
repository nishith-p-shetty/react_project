import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import './style.css';


const Home = () => {

    const [cityName, setCityName] = useState("Bengaluru");
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        makerequest();
    }, [])

    function makerequest() {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7b20c89ecb33037c66977b01cc8b40cf`)
            .then(async (data) => {
                if (data.ok) {
                    data = await data.json()
                    setWeatherData(data);
                }
                else{
                    console.log('Connection error')
                    setWeatherData(null);
                    alert('Error in Fetching Data');
                }
            }).catch(e => {
                console.log('Connection error', e)
                setWeatherData(null);
                alert('Error in Fetching Data');
            })
        setCityName('');
    }

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" className='searchTerm' placeholder='search city....' autoFocus id='search' value={cityName} onChange={(event) => setCityName(event.target.value)} />
                    <button type="button" className='searchButton' onClick={() => makerequest()}>🔍</button>
                </div>
            </div>
            {weatherData ? <WeatherCard weatherData={weatherData} /> : <></>}
        </>
    )
}

export default Home