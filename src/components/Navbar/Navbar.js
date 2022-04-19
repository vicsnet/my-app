import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
      <div className='navbar'>
          <div className='logo'>
          CoffeRoster
          </div>
          
          <div className='nav-links'> 
              <ul>

              
              <li>
                  Home
              </li>
              <li>
                  About Us
              </li>
              <li>
                  Create Your Plan
                  </li>
            </ul>
        </div>
      </div>
      
  )
}

export default Navbar