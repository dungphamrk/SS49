import React from 'react'

export default function Register() {
  return (
    <div>
        <h2>Register</h2>
        <label>Username:</label><br />
        <input className=' border focus:ring border-black' type="text" name="username" required/><br/>
        <label htmlFor="">Password</label><br />
        <input className=' border focus:ring border-black' type="password" name="" id="" /><br />
        <label htmlFor="">Confirm password</label><br />
        <input className=' border focus:ring border-black' type="password" name="" id="" />
    </div>
  )
}
