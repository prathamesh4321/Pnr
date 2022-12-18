import React from 'react'
import "./Header.css"
function Header(props) {
    return <div className='bg'>
    <div style={{textAlign:"center", display:"flex", justifyContent:"flex-start"}}> {props.Navigation}</div> 
         </div>;
    
}

export default Header;