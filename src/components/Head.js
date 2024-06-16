import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

function Head() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  // toggleMenuHandler ? {Sidebar} : null ;

    
    // const useIt = useSelector((store) => store.app.isMenuOpen)
  }



  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>

      <img className='h-10 cursor-pointer' 
      src='https://th.bing.com/th/id/OIP.ovcJ2Zaf-EkM_Emrh76B6QHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
      onClick={toggleMenuHandler}
      alt='menu' />

      <a href='/'>

      <img className='h-10'  
      src='https://th.bing.com/th/id/OIP.xxNZm92rz6ZHHChoF2zZSAHaBp?w=350&h=77&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
      alt='youtube-logo'/>
      </a>
      </div>

      <div className='col-span-10'>

      <input className=' w-1/2 mt-2 border p-2 rounded-l-full border-gray-400'  placeholder='Search ' />
      <button className='border border-gray-400 p-2 rounded-r-full bg-gray-3 00'> 🔍 </button>
      </div>


      <div className='col-span-1 flex justify-end'>
        <img 
        src='https://th.bing.com/th?q=User+Icon+Vector&w=44&h=44&c=7&rs=1&p=0&o=5&dpr=1.3&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1' 
        />
      </div>

      
    </div>
  )
}

export default Head