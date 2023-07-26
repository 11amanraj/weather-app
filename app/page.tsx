import Dashboard from '@/components/Dashboard'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <Dashboard />
    </main>
  )
}
