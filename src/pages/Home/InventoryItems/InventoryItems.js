import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [bikes, setBikes] = useState([]);

  // TODO:show all Bikes
  useEffect(() => {
    fetch("https://rocky-coast-85375.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  // TODO:add Loading Spinner
  if(bikes.length<1){
    return <Loading></Loading>;
  }

 
  return (
    <div>
      <h1>Bike Gears</h1>
      <div className="bikes-container">
        {bikes.slice(0, 6).map((bike) => (
          <InventoryItem key={bike._id} bike={bike}></InventoryItem>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
