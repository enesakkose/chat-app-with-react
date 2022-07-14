import React from 'react'
import { FaHospitalAlt } from 'react-icons/fa'
import { RiLogoutBoxLine } from 'react-icons/ri'
import Button from '@/components/Button'
import '@/components/Sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button>
            <FaHospitalAlt size={21}/>
        </Button>
        <Button>
            <RiLogoutBoxLine size={21}/>
        </Button>
    </div>
  )
}

export default Sidebar