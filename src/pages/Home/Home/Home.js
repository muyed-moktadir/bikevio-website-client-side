import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import "./Home.css"

const Home = () => {
    const navigate=useNavigate()
    navigate(`/inventory`)
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            
            <Link to={`/inventory`}> <button className='manage-btn'><p>Manage Inventories</p></button></Link>
            
        </div>
    );
};

export default Home;