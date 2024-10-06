import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
    const location =useLocation();
  return (
    <div className="App-header">Welcome {location?.state?.id} 
    <div>
        <Link to="/task1" className="input">Task1</Link>
        <Link to="/task2" className="input">Task2</Link>
        <Link to="/" className="input">Logout</Link>
    </div>
    </div>
  )
}

export default HomePage