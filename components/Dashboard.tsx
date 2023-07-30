'use client'

import React from 'react'
import Search from './Search'

const Dashboard = () => {
  const citySelectHandler = (lat: number, long: number) => {  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main)
        })
        .catch(err => console.error(err));
  }

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main)
        })
        .catch(err => console.error(err));
  }

  return (
    <section className='p-16 flex flex-col gap-16'>
        <div className='flex justify-between'>
            <div>
                <span>July 2023</span>
                <span>Monday, July 24, 2023</span>
            </div>
            <Search onCitySelect={citySelectHandler}/>
            <button onClick={fetchWeather}>Fetch</button>
            {/* <label htmlFor="search"></label>
            <input id='search' name='search'/> */}
        </div>
        <div className='grid-cols-3 grid-rows-2'>
            <h3>Today Overview</h3>
            <span>More Detail</span>
            <div>
                <div>Ic</div>
                <div>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div>
                <div>Ic</div>
                <div>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div>
                <div>Ic</div>
                <div>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div>
                <div>Ic</div>
                <div>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
        </div>
        <div>
            <h3>Average Weekly Temperature</h3>
            <div>Graph</div>
        </div>
    </section>
  )
}

export default Dashboard