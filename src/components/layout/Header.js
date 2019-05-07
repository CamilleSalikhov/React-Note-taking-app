import React from 'react'

export default function Header() {
  return (
    <header>
      <h1 style ={headerStyle}>Todolist</h1>
    </header>
  )
}
const headerStyle = {
  backgroundColor: 'black',
  color:'white',
  margin:'0',
  
}