import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'


export default function Login() {
    const [userName, setUserName]=useState('')
    const [password, setPassword] =useState('')
    const cookies = new Cookies();
    const login = ()=>{
      axios.post('http://localhost:3001/login',{
        userName, password
      }).then(res =>{
        const {token, firstName, lastName, userName, userId} = res.data;

        cookies.set('token', token);
        cookies.set('userId', userId);
        cookies.set('firstName', firstName);
        cookies.set('lastName', lastName);
        cookies.set('userName', userName);
    })
    }
  return (
    <div>
      <form onSubmit={login}>
        <label>Login</label>
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
