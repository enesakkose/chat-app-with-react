import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'
import CloseCreateChannel from '@/components/CloseCreateChannel'
import UserList from '@/components/UserList'
import '@/components/CreateC.scss'


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
    console.log(createType)
    const [ channelName, setChannelName ] = useState('') 

  return (
    <div className='createChannel'>
        <div className="createChannel__header">
            <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
            <CloseCreateChannel setIsCreating={setIsCreating}/>
        </div>
        {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName}/>}
        <UserList/>
    </div>
  )
}

export default CreateChannel