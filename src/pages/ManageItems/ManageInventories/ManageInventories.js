import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useBikevioItems from "../../../CustomHook/CustomHook";
import ManageInventory from "../MangeInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [bikes] = useBikevioItems();
  console.log(bikes);
  return (
    <div>
      <h1>Manage Inventory</h1>
      <div className="services-container">
        {bikes.map((bike) => (
          <ManageInventory key={bike._id} bike={bike}></ManageInventory>
        ))}
      </div>
      <Link to='/additem'>add a new bike</Link>
    </div>
  );
};

export default ManageInventories;
