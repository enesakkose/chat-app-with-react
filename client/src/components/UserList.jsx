import React, { useEffect, useState } from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'
import { TiTick } from 'react-icons/ti'
import '@/components/UserList.scss'

const ListContainer = ({children}) => {
    return(
        <div className='userList'>
            <div className="userList__header">
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}  

const UserItem = ({user}) => {
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        setSelected(!selected)
    }

    return(
        <div className='userList__userItem' onClick={handleSelect}>
            <div className="userList__userItem__name">
                <Avatar image={user.image} name={user.fullName || user.id} size={32}/>
                <p>{user.fullName || user.id}</p>
            </div>
            {selected 
            ? <div className='userList__userItem__fill'><TiTick/></div>
            : <div className='userList__userItem__empty'></div>}
        </div>
    )
}

// TODO NEW CHANNEL PAGE WILL BE ADDED WITH CHANNEL FEATURES 

function UserList() {
    const { client } = useChatContext()
    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ lisetEmpty, setListEmpty ] = useState(false)

    useEffect(() => {
        const getUsers = async() => {
            if(loading) return

            setLoading(true)

            try {
               const response = await client.queryUsers(
                    { id: {$ne: client.userID } },
                    { id: 1 },
                    { limit: 8}
               )
               if(response.users.length) {
                setUsers(response.users)
               }else {
                setListEmpty(true)
               }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }

        if(client) getUsers()
    }, [])

  return (
    <ListContainer>
        {loading ? <div className='userList__loading'>
            Loading Users...
        </div> : (
            users?.map((user, index) => (
                <UserItem index={index} key={user.id} user={user}/>
            ))
        )}
    </ListContainer>
  )
}

export default UserList