import React from 'react';
import Button from './Button';
import Gallery from './Gallery';
import '../App.css'
import { useState } from 'react';
import { clothingitems } from '../data/data';

const Project = () => {
    const [productData, setproductData]=useState(clothingitems)
    const [buttonValue,setbuttonValue]=useState('all')
    return (
        <div>
            {/* <h1>welcome to our new brand</h1> */}
           
            
            <hr />
            <div className="btn4" style={{display:'flex',padding:'10px ', }}>
                <Button  buttonstatus={(a)=>{setbuttonValue(a)}}/>
               
            </div>
            {
                productData.map((val)=>(
                    <Gallery val={val} buttonval={buttonValue}/>
                ))
               
            }
            
        </div>
    );
};

export default Project;