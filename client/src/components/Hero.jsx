import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroTitleNDesc'>
            <div className='heroTitle'>
                <h1>Lenny Chanrion</h1>
            </div>
            <div className='heroDesc'>
                <p>I am a passionate developer with a knack for creating beautiful and functional web applications. Explore my projects to see what I can do.</p>
            </div>
        </div>
        <div className='heroQuote'>
            <div className='heroQuoteText'>
                <p>"Why use AI when we can just work harder"</p>
            </div>
        </div>
    </div>
  )
}

export default Hero