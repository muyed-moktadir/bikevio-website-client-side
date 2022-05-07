import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id}=useParams();
    console.log("object",id);
    const [bike,setBike] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBike(data))
    },[id])
    return (
        <div className='bike'>
        <div className='image'>
            <img src={bike.img} alt="" />
        </div>
        <div  className='bike-details'>
            <h2>{bike.name}</h2>
            <div style={{textAlign:'justify'}}>
            <p title={bike.description}><strong>Description</strong>: {bike.description > 10? bike.description.slice(0,100) +'...': bike.description}</p>
            <p><strong>supplier name</strong>: <span style={{color:'darkviolet'}}>{bike.supplier_name}</span></p>
            <p><strong>quantity</strong>: {bike.quantity}</p>
            <h3>price: ${bike.price}</h3>
            </div>
        </div>
        <div className='btn-container'>
        </div>
    </div>
    );
};

export default Inventory;