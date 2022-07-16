import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import Button from '@/components/Button'
import '@/pages/Auth.scss'

const initialForm = {
  fullName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  avatarURL: '',
  phoneNumber: ''
}

const cookies = new Cookies()

function Auth() {
  
  const [ form , setForm ] = useState(initialForm)
  const [ isSignUp, setIsSignUp ] = useState(true)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const { fullName, userName, password, phoneNumber, avatarURL } = form

    const URL = 'http://localhost:5000/auth'

    const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
      userName, password, fullName, phoneNumber, avatarURL
    })

    cookies.set('token', token)
    cookies.set('userId', userId)
    cookies.set('fullName', fullName)
    cookies.set('userName', userName)

    if(isSignUp) {
      cookies.set('phoneNumber', phoneNumber)
      cookies.set('avatarURL', avatarURL)
      cookies.set('hashedPassword', hashedPassword)
    }

    window.location.reload()
  }

  const handleAccount = () => {
    setIsSignUp(!isSignUp)
  }

  return (
    <div className='authForm'>
      <div className="authForm__fields">
        <h3>{isSignUp ? 'Sign Up' : 'Sign In'}</h3>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="authForm__fields__input">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text"
                  name='fullName'
                  onChange={handleChange}
                  placeholder='Full Name'
                  required 
                />
              </div>
            )}
              <div className="authForm__fields__input">
                  <label htmlFor="userName">User Name</label>
                  <input 
                    type="text"
                    name='userName'
                    onChange={handleChange}
                    placeholder='User Name'
                    required 
                  />
              </div>
              {isSignUp && (
              <div className="authForm__fields__input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                  type='tel'
                  name='phoneNumber'
                  onChange={handleChange}
                  placeholder='Phone Number'
                  required 
                />
              </div>
            )}
            {isSignUp && (
              <div className="authForm__fields__input">
                <label htmlFor="avatar">Avatar Url</label>
                <input 
                  type='avatar'
                  name='avatar'
                  onChange={handleChange}
                  placeholder='Phone Number'
                  required 
                />
              </div>
            )}
              <div className="authForm__fields__input">
                  <label htmlFor="password">Password</label>
                  <input 
                    type='password'
                    name='password'
                    onChange={handleChange}
                    placeholder='Password'
                    required 
                  />
              </div>
            {isSignUp && (
              <div className="authForm__fields__input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type='password'
                  name='confirmPassword'
                  onChange={handleChange}
                  placeholder='Confirm Password'
                  required 
                />
              </div>
            )}
            <div className="authForm__fields__submitButton">
              <Button className='submitBtn'>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </div>
          </form>
          <div className="authForm__fields__accountPlace">
            <p>
              {isSignUp ? 'Already have an account?' : 'Does not have a account?'}
               
              <span onClick={handleAccount}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </span>
            </p>
          </div>
      </div>

    </div>
  )
}

export default Auth