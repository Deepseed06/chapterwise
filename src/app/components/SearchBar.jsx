import React from 'react'
import { SearchIcon } from 'lucide-react'
const SearchBar = () => {
  return (
    <div className='flex items-center bg-[#F0F1F1] py-2 ml-2 max-w-96 text-xs lg:text-sm'>
      <span className='pl-2 opacity-50  '><SearchIcon size={15} color='#42474C'/></span>
        <input type="text" placeholder='Search Books ' className='p-2 w-full text-xs outline-none bg-[#F0F1F1]  lg:text-sm'/>
    </div>
  )
}

export default SearchBar