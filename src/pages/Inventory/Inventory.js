import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id}=useParams();
    console.log("object",id);
    return (
        <div>
            
        </div>
    );
};

export default Inventory;