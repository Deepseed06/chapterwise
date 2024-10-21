import React from 'react'
import { SearchIcon } from 'lucide-react'
const SearchBar = () => {
  return (
    <div className='flex items-center border  mx-2 text-xs lg:text-sm'>
      <span className='mx-4'><SearchIcon size={15}/></span>
        <input type="text" placeholder='Search Books ' className='p-2 w-full text-xs outline-none  lg:text-sm'/>
    </div>
  )
}

export default SearchBar