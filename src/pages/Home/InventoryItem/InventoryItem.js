import React from 'react';
import aos from "aos";
import "aos/dist/aos.css";
import { Link,useNavigate} from 'react-router-dom';
import "./InventoryItem.css"

const InventoryItem = ({bike}) => {
    aos.init();
    const {_id,img,name,description,price,quantity,supplier_name} =bike;
    const navigate = useNavigate()

    // TODO:inventory Handle:
    const inventoryHandle = (id) =>{
        console.log('id',id);
        navigate(`/inventory/${id}`)
    }

    return (
        <div  className='bike-container'>
            <div data-aos="zoom-in" className='image'>
                <img src={img} alt="" />
            </div>
            <div data-aos="fade-right" className='bike-details'>
                <h2>{name}</h2>
                <div style={{textAlign:'justify'}}>
                <p title={description}><strong>Description</strong>: {description.length > 10? description.slice(0,100) +'...': description}</p>
                <p><strong>supplier name</strong>: <span style={{color:'darkviolet'}}>{supplier_name}</span></p>
                <p><strong>quantity</strong>: {quantity}</p>
                <h3>price: ${price}</h3>
                </div>
            </div>
            <div className='btn-container'>
            <Link to={`/inventory/${_id}`}><button onClick={()=>inventoryHandle(_id)} className='btn'><p>Update</p></button></Link>
            </div>
        </div>
    );
};

export default InventoryItem;