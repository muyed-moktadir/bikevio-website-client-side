import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  console.log("object", id);
  const [bike, setBike] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, [id]);
  return (
    <div className="bike-description">
      <div className="image">
        <img src={bike.img} alt="" />
      </div>
      <div className="bike">
        <h2>{bike.name}</h2>
        <div style={{ textAlign: "justify" , paddingRight:'10px'}}>
          <p title={bike.description}>
            <strong>Description</strong>:{" "}
            {bike.description > 10
              ? bike.description.slice(0, 100) + "..."
              : bike.description}
          </p>
          <p>
            <strong>supplier name</strong>:{" "}
            <span style={{ color: "darkviolet" }}>{bike.supplier_name}</span>
          </p>
          <p>
            <strong>quantity</strong>: {bike.quantity}
          </p>
          <h3>price: ${bike.price}</h3>
        </div>
        <div style={{display:'flex', justifyContent:"space-evenly", marginBottom:"20px"}}>
          <div>
            <button className="btn-class"><p >Delivered</p></button>
          </div>
          <div>
              <input style={{width:'60px',height:"30px"}} type="number" min="0" name=""/>{" "}
            <button className="btn-class"><p>restock</p></button>
          </div>
        </div>
      </div>
      <div className="btn-container"></div>
    </div>
  );
};

export default Inventory;
