import React, { useEffect, useState } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [bikes, setBikes] = useState([]);
//   console.log(bikes);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);
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
