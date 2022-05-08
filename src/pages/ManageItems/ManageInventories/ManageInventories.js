import React from "react";
import useBikevioItems from "../../../CustomHook/CustomHook";
import ManageInventory from "../MangeInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [bikes] = useBikevioItems();
  return (
    <div>
      <h1>Manage Inventory</h1>
      <div className="services-container">
        {bikes.map((bike) => (
          <ManageInventory key={bike._id} bike={bike}></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
