import React from 'react'

const Header2 = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Pradeep</h2>
      <div className='flex gap-10'>
        <a className='text-xl underline' href="/contact">Contact</a>
        <a className='text-xl underline' href="/about">About</a>
        <a className='text-xl underline' href="/product">Product</a>
        <a className='text-xl underline' href="/">Home</a>
      </div>
    </div>
  )
}

export default Header2