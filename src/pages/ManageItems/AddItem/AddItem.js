import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddItem = () => {
    const [user] =useAuthState(auth);
  const handleAddBike = (event) => {
    event.preventDefault();
    const bike = event.target.name.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const quantity = event.target.quantity.value;
    console.log(quantity);
    const price = event.target.price.value;
    console.log(price);
    const img= event.target.img.value;
    const email= event.target.email.value;

   
     const addBike = { bike, description,supplier,img,email,quantity,price };

    // // TODO:send the user post method to backend server
    fetch("http://localhost:5000/newItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addBike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" success", data);
        alert("user added successfully  ..!!!");

        event.target.reset();
      });
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Add Item</h2>
        <form onSubmit={handleAddBike}>
          <div className="input-group">
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
            bike Name
            </label>
            <input
              style={{ fontSize: "18px" }}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              bike Description
            </label>
            <input
              style={{ fontSize: "18px" }}
              type="text"
              name="description"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              supplier name
            </label>
            <input
              style={{ fontSize: "18px" }}
              type="text"
              name="supplier"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              bike image url
            </label>
            <input
              style={{ fontSize: "18px" }}
              type="text"
              name="img"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              quantity
            </label>
            <input style={{ fontSize: "18px" }} type="number" name="quantity"  />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              price
            </label>
            <input
              style={{ fontSize: "18px" }}
              type="number"
              name="price"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              User email
            </label>
            <input type="email" value={user?.email} name="email" readOnly/>
          </div>
          <button type="submit" >Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
