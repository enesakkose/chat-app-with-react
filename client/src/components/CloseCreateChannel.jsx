import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import Button from '@/components/Button'
import '@/components/CloseCreateChannel.scss'


function CloseCreateChannel({setIsCreating}) {
  return (
    <Button 
    onClick={() => {
        if(setIsCreating) setIsCreating(false)
    }} 
    className='closeCreateChannelBtn'>
        <RiCloseLine size={18}/>
    </Button>
  )
}

export default CloseCreateChannel