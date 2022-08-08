import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen max-w-5xl mx-auto flex justify-start lg:justify-center items-center p-4 lg:p-0'>
      <div className='flex flex-col gap-4 w-full p-10'>
        <div className='flex flex-col'>
          <small>Home Page</small>
          <ul className='flex flex-col lg:flex-row gap-4 list-disc list-inside marker:text-sky-400 tracking-widest uppercase'>
            <li className='hover:text-sky-400'><Link to='/'>Home</Link></li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <small>Dashboards</small>
          <ul className='flex flex-col lg:flex-row gap-4 list-disc list-inside marker:text-sky-400 tracking-widest uppercase'>
            <li className='hover:text-sky-400'><Link to='/dashboard01'>Dashboard 01</Link></li>
            <li className='hover:text-sky-400'><Link to='/dashboard02'>Dashboard 02</Link></li>
            <li className='hover:text-sky-400'><Link to='/dashboard03'>Dashboard 03</Link></li>
            <li className='hover:text-sky-400'><Link to='/dashboard04'>Dashboard 04</Link></li>
          </ul>
        </div>

        <span className='text-xs italic text-gray-400'>2022 @droidclass - gmsetiawan</span>
      </div>
    </div>
  )
}

export default Home