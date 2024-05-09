import React from 'react';
import '../App.css'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="brand-logo">
                    <img src=".\images\myntra.jpg" alt="" className='myntralogo' />
                </div>
                <div className="brand-links">
                    <ul className='links'>
                        <h5><li>Pants</li></h5>
                        <h5><li>Shirt</li></h5>
                        <h5><li>Jewels</li></h5>
                        <h5><li>Sunglasses</li></h5>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;