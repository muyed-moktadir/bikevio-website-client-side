import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Additem.css"
import aos from "aos";
import "aos/dist/aos.css";

const AddItem = () => {
  aos.init(
    {duration: 600,}
  );
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleAddBike = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const supplier_name = event.target.supplier_name.value;
    const quantity = event.target.quantity.value;
    console.dir(quantity);
    const price = event.target.price.value;
    console.dir(price);
    const img = event.target.img.value;
    const email = event.target.email.value;


    const addBike = {
      name,
      description,
      supplier_name,
      img,
      email,
      quantity,
      price,
    };
    console.log(addBike);



    // // TODO:send the user post method to backend server
    fetch("https://rocky-coast-85375.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" success", data);
        alert("user added successfully  ..!!!");
        event.target.reset();
      });
      navigate('/myitems');
  };

  

  return (
    <div data-aos="zoom-in" className="addItem-container">
      <div>
        <h2 className="addItem-title">Add Item</h2>
        <form onSubmit={handleAddBike}>
          <div className="input-group"></div>
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
              name="supplier_name"
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
            <input style={{ fontSize: "18px" }} type="number" name="quantity" />
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
              User mail
            </label>
            <input type="email" value={user?.email} name="email" readOnly />
          </div>
          <button className="add-newBike-btn" type="submit"><p>add Item</p></button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
