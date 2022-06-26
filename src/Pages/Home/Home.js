import React from 'react'
import { useAuth } from '../../Context/authContext'

const Home = () => {

  const authContext = useAuth()

  return (
    <div>Home</div>
  )
}

export default Home