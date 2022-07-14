import { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelContainer from '@/components/ChannelContainer'
import ChannelListContainer from '@/components/TeamChannelList'
import Auth from '@/components/Auth'
import '@/App.scss'
const apiKey = 'mt7f99ynddrh'
const client = StreamChat.getInstance(apiKey)
const authToken = false

function App() {

  if(!authToken) return <Auth/>

  //Todo the auth page will be added 

  return (
    <div className="app">
      <Chat client={client} theme="team light">
          <ChannelListContainer/>
          <ChannelContainer/>
      </Chat>
    </div>
  )
}

export default App
