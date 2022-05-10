import React from "react";
import { Link} from "react-router-dom";
import Banner from "../Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";
import Other from "../Other/Other";
import SafetyGear from "../SafetyGear/SafetyGear";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <SafetyGear></SafetyGear>
      <Other></Other>
      <Link to={`/inventory`}>
        {" "}
        <button className="manage-btn">
          <p>Manage Inventories</p>
        </button>
      </Link>
    </div>
  );
};

export default Home;
