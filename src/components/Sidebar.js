import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //this is called early return 
  if (!isMenuOpen) return null ;
  return (

    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Liked Videos</li>
      </ul>


      <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar