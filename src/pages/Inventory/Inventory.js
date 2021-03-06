import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [bike, setBike] = useState([]);
  const { _id, name, quantity, img, description, supplier_name, price } = bike;
  console.log("single bike :", bike);

  // TODO:fetch all bikes by id 
  useEffect(() => {
    const url = `https://rocky-coast-85375.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBike(data));
  }, [quantity, id]);

  
  const handleDeliver = (id) => {
    //   event.preventDefault()
    console.dir("object", id);
    const newQuantity = quantity - 1;
    console.dir("new quantity", newQuantity);
    const updateQuantity = { newQuantity };


    // TODO:send the particular quantity "PUT" method to server
    const url = `https://rocky-coast-85375.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBike({
          _id,
          name,
          newQuantity,
          img,
          description,
          supplier_name,
          price,
        });
        alert("delivered successfully  ..!!!");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const restock = event.target.restock.value;
    const newQuantity = parseInt(restock) + quantity;
    const updateQuantity = { newQuantity };

    const url = `https://rocky-coast-85375.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBike({
          _id,
          name,
          newQuantity,
          img,
          description,
          supplier_name,
          price,
        });
        toast("restock successfully..!!");
      });
  };

  return (
    <div className="bike-description">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="bike">
        <h2>{name}</h2>
        <div style={{ textAlign: "justify", paddingRight: "10px" }}>
          <p title={description}>
            <strong>Description</strong>:{" "}
            {description > 10 ? description.slice(0, 100) + "..." : description}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "20px",
          }}
        >
          <div>
            <button onClick={() => handleDeliver(_id)} className="btn-class">
              <p>Delivered</p>
            </button>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                style={{ width: "60px", height: "30px" }}
                type="number"
                min="0"
                name="restock"
              />{" "}
              <button type="submit" className="btn-class">
                <p>restock</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="btn-container"></div>
    </div>
  );
};

export default Inventory;
