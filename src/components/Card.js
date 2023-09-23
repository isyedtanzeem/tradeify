import React from 'react';
import './Card.css'



const Card = (prop) => {


    return (
        <>
        <div className='card-layout m-5'>
            <p className='m-2'>{prop.name}</p>

        </div>
        
        </>
    )
}

export default Card;
