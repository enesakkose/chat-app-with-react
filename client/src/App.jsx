import { useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import ChannelContainer from '@/components/ChannelContainer'
import ChannelListContainer from '@/components/ChannelListContainer'
import Auth from '@/pages/Auth'
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
  const [createType, setCreateType] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  if(!authToken) return <Auth/>

  return (
    <div className="app">
      <Chat client={client} theme="team light">
          <ChannelListContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
          />
          <ChannelContainer
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            createType={createType}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
      </Chat>
    </div>
  )
}

export default App
