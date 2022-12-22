import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Notify from '../components/Notify'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar />
            <Chat />
            <Notify />
        </div>
    </div>
  )
}
export default Home