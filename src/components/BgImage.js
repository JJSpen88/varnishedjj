import React from 'react'
import {Link} from 'react-router-dom'
import './BgImageStyles.css'
import image from '../assets/vjjbgphoto.jpg'

const BgImage = () => {
    return (
        <div id='backgroundphoto'>
            <img src={image} alt="Background Image" />
            <div className='hero'>
                <div className='content'>
                    <h1>Varnished JJ</h1>
                    <p>Refurbished furniture lorem ipsum</p>
                    <div>
                        <Link to='/blog' className='btn'>Blog</Link>
                        <Link to='/contact' className='btn'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BgImage
