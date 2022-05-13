import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const ManageInventory = ({ bike }) => {
  const [bikes, setBikes] = useState([]);
  const { _id, img, name, description, price, quantity, supplier_name } = bike;
  const [user] = useAuthState(auth);
  const navigate =useNavigate()

  // TODO:Load all bikes from (app.get) api:
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const handleUserDelete = (id) => {
    if (user) {
      const proceed = window.confirm("are you sure want to delete??");
      if (proceed) {
        console.log("deleting the id", id);
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (bike.deletedCount > 0) {
              console.log("delete successfully");
              const remaining = bikes.filter((bike) => bike._id !== id);
              setBikes(remaining);
            }
          });
        window.location.reload();
      }
    }
    else{
      navigate('/login')
    }
  };
  return (
    <div className="bike-container">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="bike-details">
        <h2>{name}</h2>
        <div style={{ textAlign: "justify" }}>
          <p title={description}>
            <strong>Description</strong>:{" "}
            {description.length > 10 ? description.slice(0, 100) + "..." : description}
          </p>
          <p>
            <strong>supplier name</strong>:{" "}
            <span style={{ color: "darkviolet" }}>{supplier_name}</span>
          </p>
          <p>
            <strong>quantity</strong>: {quantity}
          </p>
          <h3>price: ${price}</h3>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => handleUserDelete(_id)} className="btn">
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};

export default ManageInventory;
