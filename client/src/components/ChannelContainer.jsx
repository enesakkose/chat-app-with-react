import React from 'react'
import { Channel, MessageTeam } from 'stream-chat-react'
import CreateChannel from '@/components/CreateChannel'
import '@/components/ChannelContainer.scss'

function ChannelContainer({isCreating ,setIsCreating, createType,isEditing, setIsEditing }) {

  if(isCreating) {
    return(
      <div className="channelContainer">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing) {
    return(
      <>
      </>
    )
  }

  const EmptyState = () => (
    <div className='emptyContainer'>
      <p className='emptyContainer__first'>This is beggining of your chat history</p>
      <p className='emptyContainer__second'>Send messages, attachments, links, emojis, and more!</p>
    </div>
  )

  return (
    <div className='channelContainer'>
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i ) => <MessageTeam key={i} {...messageProps} />}
      >

      </Channel>
    </div>
  )
}

export default ChannelContainer