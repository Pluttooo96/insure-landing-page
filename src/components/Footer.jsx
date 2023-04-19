import React, {useState, useEffect} from 'react';
import './Footer.css';

const Footer = () =>{
    const socials = ['./icon-facebook.svg', './icon-twitter.svg', './icon-pinterest.svg', './icon-instagram.svg']
    
    const [mobile, setMobile] = useState(false)

    const checkMobile = () => {
        if(window.innerWidth<=640){
            setMobile(true)
        }else{
            setMobile(false)
        }
    }

    useEffect(() => {checkMobile()
    },[]);

    window.addEventListener('resize', checkMobile);


    return(
    <div className='footer'>
        <div className='footer__socialmedia'>
            <img className='footer__socialmedia--logo' src='./logo.svg' alt='logo' />
            <div className='footer__socialmedia--icons'>
                <a href={'//www.facebook.com'} target='_blank'><img  className='footer__socialmedia--icon' src={socials[0]} alt='Facebook'/></a>
                <a href={'//www.twitter.com'} target='_blank'><img className='footer__socialmedia--icon' src={socials[1]} alt='twitter'/></a>
                <a href={'//www.pinterest.com'} target='_blank'><img className='footer__socialmedia--icon' src={socials[2]} alt='pinterest'/></a>
                <a href={'//www.instagram.com'} target='_blank'><img className='footer__socialmedia--icon' src={socials[3]} alt='instagram'/></a>
            </div>
        </div>
        <div className='footer__i'>
            <ul className='footer__info'>   
                <p className='footer__info--title'>OUR COMPANY</p>
                <li className='footer__info--ref'>HOW WE WORK</li>
                <li className='footer__info--ref'>WHY INSURE?</li>
                <li className='footer__info--ref'>CHECK PRICE</li>
                <li className='footer__info--ref'>REVIEWS</li>
            </ul>
            <ul className='footer__info'>
                <p className='footer__info--title'>HELP ME</p>
                <li className='footer__info--ref'>FAQ</li>
                <li className='footer__info--ref'>TERMS OF USE</li>
                <li className='footer__info--ref'>PRIVACY POLICY</li>
                <li className='footer__info--ref'>COOKIES</li>
            </ul>
            <ul className='footer__info'>
                <p className='footer__info--title'>CONTACT</p>
                <li className='footer__info--ref'>SALES</li>
                <li className='footer__info--ref'>SUPPORT</li>
                <li className='footer__info--ref'>LIVE CHAT</li>
            </ul>
            <ul className='footer__info'>
                <p className='footer__info--title'>OTHERS</p>
                <li className='footer__info--ref'>CAREERS</li>
                <li className='footer__info--ref'>PRESS</li>
                <li className='footer__info--ref'>LICENSES</li>
            </ul>
        </div>        
        {!mobile && <img className='footer__background--desktop' src='./bg-pattern-footer-desktop.svg' alt='bckgfooter' />}
    </div>
)}

export default Footer;