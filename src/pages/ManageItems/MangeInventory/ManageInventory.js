import React from 'react';

const ManageInventory = ({bike}) => {
    const {_id,img,name,description,price,quantity,supplier_name} =bike;

    return (
        <div className='bike-container'>
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div  className='bike-details'>
                <h2>{name}</h2>
                <div style={{textAlign:'justify'}}>
                <p title={description}><strong>Description</strong>: {description.length > 10? description.slice(0,100) +'...': description}</p>
                <p><strong>supplier name</strong>: <span style={{color:'darkviolet'}}>{supplier_name}</span></p>
                <p><strong>quantity</strong>: {quantity}</p>
                <h3>price: ${price}</h3>
                </div>
            </div>
            <div className='btn-container'>
            <button  className='btn'><p>Delete</p></button>
            </div>
        </div>
    );
};

export default ManageInventory;