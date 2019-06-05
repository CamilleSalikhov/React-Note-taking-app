import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <h1 style ={headerStyle}>Note taking app</h1>
    <Link to='/'>Home</Link> | <Link to='/about'> About</Link>
    </header>  )
}
const headerStyle = {
  backgroundColor: 'black',
  color:'white',
  margin:'0',
  
}