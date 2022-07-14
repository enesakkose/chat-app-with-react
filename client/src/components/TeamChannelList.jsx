import React from 'react'
import '@/components/TeamChannelList.scss'

function TeamChannelList({ children, error = false, loading, type}) {

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
            {type === 'team' ? 'Channels' : 'Direct Messages'}
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList