import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import '@/components/ChannelListSearch.scss'

function ChannelListSearch() {

    const [ search, setSearch ] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

  return (
    <div className='channelListContainer__text__search'>
        <input 
            type="text"
            className='channelListContainer__text__search__input'
            placeholder='Search Text...'
            value={search}
            onChange={handleSearch}
        />
        <div className='channelListContainer__text__search__icon'>
            <AiOutlineSearch />
        </div>
    </div>
  )
}

export default ChannelListSearch