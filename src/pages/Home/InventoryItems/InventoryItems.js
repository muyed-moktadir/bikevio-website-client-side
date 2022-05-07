import React from 'react';
import useBikevioItems from '../../../CustomHook/CustomHook';
import InventoryItem from '../InventoryItem/InventoryItem';
import "./InventoryItems.css"

const InventoryItems = () => {
    const [bikes] =useBikevioItems();
    console.log(bikes);
    return (
        <div>
            <h1>Bike Gears</h1>
           <div className="bikes-container">
           {
                bikes.slice(0,6).map(bike=><InventoryItem 
                key={bike._id}
                bike={bike}
                ></InventoryItem>)
            }
           </div>
        </div>
    );
};

export default InventoryItems;