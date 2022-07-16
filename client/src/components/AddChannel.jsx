import React from 'react'
import '@/components/AddChannel.scss'
import { RiAddFill } from 'react-icons/ri'

function AddChannel({isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer, type}) {

    const handleClick = () => {
        setCreateType(type)
        setIsCreating(!isCreating)
        setIsEditing(false)
        if(setToggleContainer) setToggleContainer((prevState) => !prevState)
        console.log('click')
    }


  return (
    <button onClick={handleClick} className='addChannel__btn'>
        <RiAddFill size={20}/>
    </button>
  )
}

export default AddChannel