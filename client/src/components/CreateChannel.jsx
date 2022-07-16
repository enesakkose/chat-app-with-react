import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'
import CloseCreateChannel from '@/components/CloseCreateChannel'
import '@/components/C.scss'


const ChannelNameInput = ({ channelName = '', setChannelName}) => {
    const handleChange = (e) => {
        e.preventDefault()

        setChannelName(e.target.value)
    }

    return(
      <div className='createChannel'>
        <div className="createChannel__input">
            <p>Name</p>
            <input onChange={handleChange} type="text" value={channelName} placeholder='channel-name'/>
            <p>Add Members</p>
        </div>
      </div>
    )
} 

function CreateChannel({createType, setIsCreating}) {

    const [ channelName, setChannelName ] = useState('') 

  return (
    <div className='createChannel'>
        <div className="createChannel__header">
            <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
            <CloseCreateChannel setIsCreating={setIsCreating}/>
        </div>
        {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>}
    </div>
  )
}

export default CreateChannel