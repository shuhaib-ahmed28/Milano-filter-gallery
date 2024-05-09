import React from 'react';



const Button = (props) => {
function handleClick(a){
    props.buttonstatus(a)
}

    return (
        <div style={{padding:"10px"}}>
            <button onClick={()=>{ handleClick('all')}}>All</button>
            <button onClick={()=>{ handleClick('shirt')}}>Shirt</button>
            <button onClick={()=>{ handleClick('pant')}}>Pants</button>
            <button onClick={()=>{ handleClick('jewels')}}>Jewels</button>
            <button onClick={()=>{ handleClick('sunglass')}}>Sunglasses</button>
      
        </div>
    );
};

export default Button;