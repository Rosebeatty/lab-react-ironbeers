import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="Header"> 
        
                <Link to='/' ><img id="home-icon" src="images/home-icon.png" alt=""/></Link>
            
        </div>
    )
}
