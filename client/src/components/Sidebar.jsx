import React from 'react'
import { FaHospitalAlt } from 'react-icons/fa'
import { RiLogoutBoxLine } from 'react-icons/ri'
import Cookies from 'universal-cookie'
import Button from '@/components/Button'
import '@/components/Sidebar.scss'

const cookies = new Cookies()

function Sidebar() {
  const logout = () => {
    cookies.remove('token')
    cookies.remove('userId')
    cookies.remove('fullName')
    cookies.remove('userName')
    cookies.remove('phoneNumber')
    cookies.remove('avatarURL')
    cookies.remove('hashedPassword')

    window.location.reload()
  }

  return (
    <div className='sidebar'>
        <Button>
            <FaHospitalAlt size={21}/>
        </Button>
        <Button onClick={logout}>
            <RiLogoutBoxLine size={21}/>
        </Button>
    </div>
  )
}

export default Sidebar