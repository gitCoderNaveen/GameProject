import React, { useState } from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'

export default function Signup() {
    const cookies = new Cookies()
    const [user, setUser]= useState(null)

    const SignUp = (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/signup', user).then(res =>{
            const {token, firstName, lastName, userName, hashedPassword, userId} = res.data;

            cookies.set('toker', token);
            cookies.set('userId', userId);
            cookies.set('firstName', firstName);
            cookies.set('lastName', lastName);
            cookies.set('userName', userName);
            cookies.set('hashedPassword', hashedPassword);
        })

    }
  return (
    <div>
      <form onSubmit={SignUp}>
        <lable>Signup</lable>
        <input placeholder='First Name' onChange={(e)=>{
            setUser({...user, firstName:e.target.value})
        }}/>
        <input placeholder='Last Name' onChange={(e)=>{
            setUser({...user, lastName:e.target.value})
        }}/>
        <input placeholder='User Name' onChange={(e)=>{
            setUser({...user, userName:e.target.value})
        }}/>
        <input placeholder='Password' onChange={(e)=>{
            setUser({...user, password:e.target.value})
        }}/>
        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}
