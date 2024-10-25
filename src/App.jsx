import React from 'react'
import './App.css'
import './assets/DeviconArgocd'
import { DeviconArgocd } from './assets/DeviconArgocd'

function NavBar(){
  return (
    <nav>
      <div className="left">
        <DeviconArgocd/>
        <h2>CodeDecode</h2>
      </div>
      <ul className='right'>
        <li>Home</li>
        <li>About</li>
        <li>Search</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function SideBar(){
  return(
    <div className='side'>
      <ul className='strings'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className='encrypt'>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className='hash'>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className='misc'>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="arrow">Collapse</div>
    </div>
  )
}

function MainSection(){
  return(
    <div className='mainSec'>MainSection</div>
  )
}

function App() {
  return (
    <div className="cntr">
      <NavBar/>
      <SideBar/>
      <MainSection/>
    </div>
  )
}

export default App