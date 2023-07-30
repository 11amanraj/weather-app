import React from 'react'
import Search from './Search'

const Dashboard = () => {
  return (
    <section className='p-16 flex flex-col gap-16'>
        <Search />
        <div className='flex justify-between'>
            <div>
                <span>July 2023</span>
                <span>Monday, July 24, 2023</span>
            </div>
            <label htmlFor="search"></label>
            <input id='search' name='search'/>
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