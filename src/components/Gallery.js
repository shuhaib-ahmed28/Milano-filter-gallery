import React, { useState } from 'react';
import { clothingitems } from '../data/data';
const Gallery = (props) => {

    const [data, setData] = useState([]);
    // function axios1(){
    //     axios.get('http://localhost:8080/name/books').then((res)=>{
    //         console.log(res.body);
    //         setData(res.body)
    //     })
    // }
   
    return (
        <div style={{padding:'10px', display:'flex', flexWrap:'wrap'}}>
            {
                    clothingitems.map((product)=>{
                        if (product.category.includes(props.buttonval)){
                            return(
                                <div className="card " style={{padding:'10px'}} >
                    
                                <div className="cardImg">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="cardProduct" > {product.name}</div>
                                <div className="cardPrice">Rs. {product.price}</div>
                            </div>
                            )
                        }else{
                            return null;
                        }
                     
                    })
                }
            
           
        </div>      
    );
};

export default Gallery;