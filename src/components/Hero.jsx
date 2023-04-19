import React, { useState, useEffect } from 'react';
import './Hero.css'

const Hero = () => {
    
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
    
    return (
        <div className='hero'>
            <div className='hero__uppersite'>
                {!mobile && <img className='hero__background' src={'./bg-pattern-intro-right-desktop.svg'} alt='bckgrnd' />}
                {mobile && <img className='hero__headimg' src='./image-intro-mobile.jpg' alt='family'/>}
                <div className='hero__maininfo'>
                    {!mobile && <div className='hero__divider--top'></div>}
                    <div className='hero__maininfo--title'>Humanizing your insurance.</div>
                    <div className='hero__maininfo--text'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure your and your loved ones are protected</div>
                    <button className='hero__maininfo--button'>VIEW PLANS</button>
                </div>
            </div>
            {!mobile && <img className='hero__headimg' src='./image-intro-mobile.jpg' alt='family'/>}
            {mobile && <img className='hero__background--mobile' src='./bg-pattern-intro-right-mobile.svg' alt='bckgrnd' />}
            {!mobile && <img className='hero__background--left' src='./bg-pattern-intro-left-desktop.svg' alt='bckgrnd' />}
            <div className='hero__divider--bottom'></div>
            <div className='hero__secondinfo'>
                <div className='hero__secondinfo--t'>We're different</div>
                <div id='p1' className='hero__secondinfo--p'>
                    <img className='hero__secondinfo--image' src='icon-snappy-process.svg' alt='process-icon'/>
                    <div className='hero__secondinfo--title'>Snappy Processs</div>
                    <div className='hero__secondinfo--note'>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms</div>
                </div>
                <div id='p2' className='hero__secondinfo--p'>
                    <img className='hero__secondinfo--image' src='icon-affordable-prices.svg' alt='price-icon' />
                    <div className='hero__secondinfo--title'>Affordable Prices</div>
                    <div className='hero__secondinfo--note'>We don't want you worrying about hight monthly costs. Ouyr prices may be low, but we still offer the best coverage possible.</div>
                </div>
                <div id='p3' className='hero__secondinfo--p'>
                    <img className='hero__secondinfo--image' src='icon-people-first.svg' alt='people-icon' />
                    <div className='hero__secondinfo--title'>People First</div>
                    <div className='hero__secondinfo--note'>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</div>
                </div>
            </div>
            <div className='hero__findout'>
                <div className='hero__findout--title'>Find out more about how we work</div>
                <button className='hero__findout--button'>HOW WE WORK</button>
            </div>
        </div>
    )
}
export default Hero