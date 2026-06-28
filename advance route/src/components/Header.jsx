import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex justify-between items-center bg-teal-900 py-5 px-8'>
      <h2 className='font-bold text-2xl'>Indeed</h2>
      <div className='flex gap-10 underline text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Header
