import React from 'react'
import AddChannel from '@/components/AddChannel'
import '@/components/TeamChannelList.scss'



function TeamChannelList({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing}) {

    if(error) {
        return type === 'team' ? (
            <div className="teamChannelList">
                <p className='teamChannelList__message'>
                    Connection error, try again
                </p>
            </div>
        ) : null
    }

    if(loading) {
        return (
            <div className='teamChannelList'>
                <p className='teamChannelList__message loading'>
                    {type === 'team' ? 'Channels' : 'Messages'} Loading...
                </p>
            </div>
        )
    }


  return (
    <div className='teamChannelList'>
        <div className="teamChannelList__header">
            <p className='teamChannelList__header__title'>
              {type === 'team' ? 'Channels' : 'Direct Messages'}  
            </p>
            <AddChannel
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
                type={type === 'team' ? 'team' : 'messaging'}
            />
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList

