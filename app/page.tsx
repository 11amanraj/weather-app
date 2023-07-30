import Dashboard from '@/components/Dashboard'
import Search from '@/components/Search'
import Sidebar from '@/components/Sidebar'

interface weather {
  city: string,
  lat: number,
  long: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  }, 
  main: {
    temp: number,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    humidity: number,
    pressure: number
  },
  weather: [
    {
      main: string,
      description: string,
      icon: string
    }
  ]
}

export default function Home() {
  return (
    <main className='flex'>
      {/* <Sidebar /> */}
      <Dashboard />
    </main>
  )
}
