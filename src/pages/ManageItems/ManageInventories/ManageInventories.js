import React from 'react';
import useBikevioItems from '../../../CustomHook/CustomHook';
import ManageInventory from '../MangeInventory/ManageInventory';

const ManageInventories = () => {
    const[bikes]= useBikevioItems()
    return (
        <div>
            <h1>Manage Inventories</h1>
            <div>
            {
                bikes.map(bike=><ManageInventory key={bike._id}></ManageInventory>)
            }
            </div>
        </div>
    );
};

export default ManageInventories;