import React from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../slices/userSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.userInfo.user);
  const logout = () =>{
    dispatch(removeUser())
    navigate("/")
  }
  return (
    <div className="na">
        <h1>Protected Routes</h1>
        <ul>
            {!user && (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
            {user && (
              <>
                <Link to="/settings">
                  <li>Settings</li>
                </Link>
                <li onClick={logout}>Logout</li>
              </>
            )}            

            {/* <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/settings">
              <li>Settings</li>
            </Link>
            <li>Logout</li> */}
        </ul>
    </div>
  )
}

export default Navbar