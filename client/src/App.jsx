import { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelContainer from '@/components/ChannelContainer'
import ChannelListContainer from '@/components/TeamChannelList'
import Auth from '@/components/Auth'
import '@/App.scss'

const cookies = new Cookies()
const apiKey = 'mt7f99ynddrh'
const client = StreamChat.getInstance(apiKey)
const authToken = cookies.get('token')

if(authToken) {
  client.connectUser({   
     token: cookies.get('token'),
     id: cookies.get('userId'),
     fullName: cookies.get('fullName'),
     name: cookies.get('userName'),
     phoneNumber: cookies.get('phoneNumber'),
     image: cookies.get('avatarURL'),
     hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

function App() {

  if(!authToken) return <Auth/>



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
