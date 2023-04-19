import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () =>{
    
    const [button, setButton] = useState(window.innerWidth<=640)
    const [menu, setMenu] = useState(false)

    const checkButton = () => {
        if(window.innerWidth<=640){
            setButton(true)
        }else{
            setButton(false)
        }
        setMenu(false) 
        if(window.innerWidth>640){
            document.body.style.overflowY = 'visible';
            document.body.style.position = ''
        }
    }

    const checkMenu = () => {
        setMenu(!menu);
        if(!menu){
            document.body.style.overflowY = 'hidden';
            document.body.style.position = 'fixed'
        }else{
            document.body.style.overflowY = 'visible';
            document.body.style.position = ''
        }

    }

    useEffect(() => {checkButton()
      },[]);
      
    
      
    window.addEventListener('resize', checkButton);

    return(
    <div className='navbar'>
        <img className='nav__logo' src='./logo.svg' alt="insure-logo"/>
        <ul className={!menu ? 'nav__menu' : 'nav__menu--mobile'}>
            <li className='nav__menu__button'>HOW WE WORK</li>
            <li className='nav__menu__button'>BLOG</li>
            <li className='nav__menu__button'>ACCOUNT</li>
            <li className='nav__menu__button'>VIEW PLANS</li>
        </ul>
        {button && <img className='nav__burger' src={!menu ? './icon-hamburger.svg' : './icon-close.svg'} alt="burger-menu" onClick={()=>checkMenu()}/>}
    </div>
    )
}

export default Navbar