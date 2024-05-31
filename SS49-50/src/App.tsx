import React from "react";
import { NavLink, Route, Routes,NavLinkProps } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from './components/Register';
import Notfound from "./components/Notfound";
import ListUser from "./components/ListUser";
import UserDetail from "./components/UserDetail";
export default function App() {
  return (
    <div>
      <div className="flex gap-3 ">
        <NavLink  className={({ isActive }) => (isActive?"text-white bg-red-600":"")} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive?"text-white bg-red-600":"")} to="/Contact">Contact</NavLink>
        <NavLink className={({ isActive }) => (isActive?"text-white bg-red-600":"")} to="/Login">Login</NavLink>
        <NavLink className={({ isActive }) => (isActive?"text-white bg-red-600":"")} to="/Register">Register</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/ListUser" element={<ListUser/>}/> 
        <Route path="/UserDetail/:userId/:userName" element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}
