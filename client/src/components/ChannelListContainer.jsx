import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import Sidebar from '@/components/Sidebar'
import ChannelTextList from '@/components/ChannelTextList'
import ChannelListSearch from '@/components/ChannelListSearch'
import '@/components/ChannelListContainer.scss'
import TeamChannelList from '@/components/TeamChannelList'
import TeamChannelPreview from '@/components/TeamChannelPreview'


function ChannelListContainer({ isCreating, setIsCreating, setCreateType, setIsEditing }) {
  return (
    <aside className='channelListContainer'>
      <Sidebar/>
      <div className="channelListContainer__text">
        <ChannelTextList/>
        <ChannelListSearch/>
        <ChannelList
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
              <TeamChannelList 
                {...listProps}
                type="team"
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
              />
            )}
            Preview={(previewProps) => (
              <TeamChannelPreview
                {...previewProps}
                type="team"
              />
            )}
          />
        <ChannelList
            filters={{}}
            channelRenderFilterFn={() => {}}
            List={(listProps) => (
              <TeamChannelList 
                {...listProps}
                type="messaging"
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
              />
            )}
            Preview={(previewProps) => (
              <TeamChannelPreview
                {...previewProps}
                type="messaging"
              />
            )}
          />
      </div>
    </aside>
  )
}

export default ChannelListContainer