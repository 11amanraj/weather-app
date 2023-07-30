'use client'

import { useCallback, useEffect, useState } from "react"
import { debounce } from "lodash"

interface city {
  id: number,
  city: string,
  latitude: number,
  longitude: number
}

const Search: React.FC<{onCitySelect: (lat: number, long: number) => void}> = ({onCitySelect}) => {
  const [searchText, setSearchText] = useState('')
  const [cities, setCities] = useState<city[]>([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_CITY_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_CITY_API_HOST
      }
    }

    function fetchCity(name: string) {
      fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${name}&minPopulation=100000`, options)
        .then(response => response.json())
        .then(data => {
            setCities(data.data)
            console.log(data.data)
        })
        .catch(err => console.error(err));
    }

    if(searchText.length > 0) {
      console.log(searchText)
      fetchCity(searchText)
    } else {
      setCities([])
    }
  }, [searchText])
  
  const debouncedOnChange = useCallback(
    debounce((input: string) => setSearchText(input), 1000), []
  )

  const handleSearch = (input: string) => {
    debouncedOnChange(input)
  }

  return (
    <div> 
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} type="text" className="text-black"/>
      {cities.length > 0 && (
        <div className="bg-red-300 px-4 py-4 text-black absolute w-64 max-h-64 overflow-y-scroll flex gap-4 flex-col">
          {cities.map(city => <p key={city.id} onClick={() => onCitySelect(city.latitude, city.longitude)} className="bg-orange-500 flex-1">{city.city}</p>)}
        </div>
      )}
    </div>
  )
}

export default Search