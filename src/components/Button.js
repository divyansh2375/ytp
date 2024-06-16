import React from 'react'

const Button = () => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>All</button>
        <button>Trending</button>
        <button>Movies</button>
        <button>Music</button>
        <button>Popular</button>
    </div>
  )
}

export default Button