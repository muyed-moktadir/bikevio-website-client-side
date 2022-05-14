import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import useBikevioItems from "../../../CustomHook/CustomHook";
import Loading from "../../Shared/Loading/Loading";
import ManageInventory from "../MangeInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [bikes,setBikes] = useState([]) 
  
  useEffect(() => {
    fetch("https://rocky-coast-85375.herokuapp.com/inventory/")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, [bikes]);

  if(bikes.length<1){
    return <Loading></Loading>
  }
  // console.dir(bikes);
  return (
    <div>
      <h1>Manage Inventory</h1>
      <div className="newBikes-container">
        {bikes.map((bike) => (
          <ManageInventory key={bike._id} bike={bike}></ManageInventory>
        ))}
      </div>
      <Link to='/additem'><button className="newBike-btn"><p>Add a New Bike</p></button></Link>
    </div>
  );
};

export default ManageInventories;
