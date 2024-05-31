import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h1>Login Account</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input className=' border focus:ring border-black' type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className=' border focus:ring border-black' type="password" id="password" name="p  assword" />
        </div>
        <button type="submit">Login</button>
        <p>Already have an account?<Link to="/Register">Register here</Link > </p>

      </form>
    </div>
  );
}
