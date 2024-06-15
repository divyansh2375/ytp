import React from 'react'

function Head() {
  return (
    <div >
      <div className='flex justify-start m-4'>

      <img className='h-10' src='https://th.bing.com/th/id/OIP.ovcJ2Zaf-EkM_Emrh76B6QHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='menu' />
      
      <img className='h-10'  src='https://th.bing.com/th/id/OIP.35qS0KpmHufI_kbzn6hd1QHaCY?w=330&h=112&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='youtube-logo'/>
      <input className='w-150 ' placeholder='Search ' />
      <button>Search</button>
      </div>
      <div>
        <img src='https://th.bing.com/th?q=User+Icon+Vector&w=44&h=44&c=7&rs=1&p=0&o=5&dpr=1.3&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1' />
      </div>

      {/* searchbar  */}
      
    </div>
  )
}

export default Head