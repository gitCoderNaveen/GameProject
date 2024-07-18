import React, { useState } from 'react'

export default function Login() {
    const [userName, setUserName]=useState('')
    const [password, setPassword] =useState('')

    const handleLogin=(e)=>{
        e.preventDefault()

    }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <lable>Login</lable>
        <input placeholder='User Name' onChange={(e)=>{
            setUserName({...userName, userName:e.target.value})
        }}/>
        <input placeholder='Password' onChange={(e)=>{
            setPassword({...password, password:e.target.value})
        }}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
