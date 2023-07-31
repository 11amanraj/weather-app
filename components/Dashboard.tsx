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
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=19.0760&lon=72.8777&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main)
        })
        .catch(err => console.error(err));
  }

  return (
    <section className='p-16 w-full flex flex-col gap-16 bg-gray-800'>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex flex-col justify-between items-center'>
                <span className='text-3xl'>July 2023</span>
                <span>Monday, July 24, 2023</span>
            </div>
            <Search onCitySelect={citySelectHandler}/>
            <button onClick={fetchWeather}>Fetch</button>
            {/* <label htmlFor="search"></label>
            <input id='search' name='search'/> */}
        </div>
        <div className='grid grid-cols-4 grid-auto-rows gap-4'>
            <h3 className='col-span-2'>Today Overview</h3>
            <span className='col-span-2 text-right'>More Detail</span>
            <div className='weather-card'>
                <h4>Ic</h4>
                <div className='sub-card'>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div className='weather-card'>
                <h4>Ic</h4>
                <div className='sub-card'>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div className='weather-card'>
                <h4>Ic</h4>
                <div className='sub-card'>
                    <h3>Wind Speed</h3>
                    <span>12Km/h</span>
                </div>
                <div>
                    2Km/h increase
                </div>
            </div>
            <div className='weather-card'>
                <h4>Ic</h4>
                <div className='sub-card'>
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