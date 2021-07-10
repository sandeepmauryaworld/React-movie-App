import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className= 'navbar'>

       <div className= "logo">Movie APP</div>
       <div className= "menus">
       <ul className="menu">


           <li><link to='/'>Home</link></li>
           <li><link to='/watchlist'>Watchlist</link></li>
           <li><link to='/contact'>Contact</link></li>
       </ul>
            
        </div>
        </div>
    )
}

export default Navbar
