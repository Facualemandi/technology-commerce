import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext'

export const ProtectRoute = ({children}) => {
  const {user} =  useAuth();
  

  if(!user) return  <Navigate to={'/'}/>

  return  <>{children}</>
}
